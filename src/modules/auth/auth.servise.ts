
import type { Request, Response, NextFunction } from 'express';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { conflictError, forbiddenError } from '../../utils/error';
import { UserRepository } from '../../DB/model/user/user.repo';
import { AuthFactoryService } from './factory';
import * as authValidation from './auth.validation';
import { compareHash } from '../../utils/hash';
import { generateToken } from '../../utils/token';

class AuthService {
    constructor() {};
    // private dbService = new DBService<IUser>(User);
    private userRepository = new UserRepository()
    private authFactory = new AuthFactoryService();
    register = async (req:Request, res:Response, next:NextFunction) => {
        //get data from req
        const registerDTO: RegisterDTO = req.body;
        //validate data
        const result = authValidation.registerSchema.safeParse(registerDTO);
        console.log(result);
        if (result.success === false) {
            let errorMessage = result.error.issues.map((issue) => ({
                path: issue.path, message: issue.message
            }));
        throw new conflictError("Validation Error", errorMessage);
    }
        //user existence check
        const userExists = await this.userRepository.exist({ email: registerDTO.email });
        if (userExists) {
       throw new conflictError('User already exists');
   }
//prepare data - hash password  
   const user = this.authFactory.register(registerDTO);

   //save into database
   const createdUser = await this.userRepository.create(user);

    
   return res.status(201).json({
       message: 'User registered successfully',
       success: true,
       data : createdUser
   })};

   
   login = async (req:Request, res:Response, next:NextFunction) => {
const loginDTO: LoginDTO = req.body;
// user existence check
const userExists = await this.userRepository.exist({email: loginDTO.email});
if (!userExists) {
    throw new forbiddenError('Invalid credentials');
}
if(!await compareHash(loginDTO.password, userExists.password)){
   throw new forbiddenError('Invalid credentials');
}
//generate token
const accessToken = generateToken({
    payload: {id: userExists._id, role: userExists.role},
    options: {expiresIn: '1d'}  
})
//send response
return res.status(200).json({
    message: 'User logged in successfully',
    success: true,
    data : {accessToken}
})

}}
export default new AuthService();
