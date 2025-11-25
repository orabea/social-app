import { SYS_ROLE, USER_AGENT } from "../../../utils/common/enum";
import { generateHash } from "../../../utils/hash";
import { generateOTP } from "../../../utils/otp";
import { LoginDTO, RegisterDTO } from "../auth.dto";
import { User } from "../entity";

export class AuthFactoryService {

    register(registerDTO: RegisterDTO){
        const user = new User();
        user.fullName = registerDTO.fullName;
        user.email = registerDTO.email;
        user.password = generateHash(registerDTO.password);
        user.phoneNumber = registerDTO.phoneNumber;
        user.otp = generateOTP();
        user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes
        user.gender = registerDTO.gender;
        user.createdAt = new Date();
        user.userAgent = USER_AGENT.local;
        user.role = SYS_ROLE.user;
        return user;
    }

// login(loginDTO: LoginDTO) {
//     const user = new User();
//     user.email = loginDTO.email;
//     user.password = generateHash(loginDTO.password);
//     return user;
// }

}