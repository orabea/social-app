"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../utils/error");
const user_repo_1 = require("../../DB/model/user/user.repo");
const factory_1 = require("./factory");
const authValidation = __importStar(require("./auth.validation"));
const hash_1 = require("../../utils/hash");
const token_1 = require("../../utils/token");
class AuthService {
    constructor() {
        // private dbService = new DBService<IUser>(User);
        this.userRepository = new user_repo_1.UserRepository();
        this.authFactory = new factory_1.AuthFactoryService();
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            //get data from req
            const registerDTO = req.body;
            //validate data
            const result = authValidation.registerSchema.safeParse(registerDTO);
            console.log(result);
            if (result.success === false) {
                let errorMessage = result.error.issues.map((issue) => ({
                    path: issue.path, message: issue.message
                }));
                throw new error_1.conflictError("Validation Error", errorMessage);
            }
            //user existence check
            const userExists = yield this.userRepository.exist({ email: registerDTO.email });
            if (userExists) {
                throw new error_1.conflictError('User already exists');
            }
            //prepare data - hash password  
            const user = this.authFactory.register(registerDTO);
            //save into database
            const createdUser = yield this.userRepository.create(user);
            return res.status(201).json({
                message: 'User registered successfully',
                success: true,
                data: createdUser
            });
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const loginDTO = req.body;
            // user existence check
            const userExists = yield this.userRepository.exist({ email: loginDTO.email });
            if (!userExists) {
                throw new error_1.forbiddenError('Invalid credentials');
            }
            if (!(yield (0, hash_1.compareHash)(loginDTO.password, userExists.password))) {
                throw new error_1.forbiddenError('Invalid credentials');
            }
            //generate token
            const accessToken = (0, token_1.generateToken)({
                payload: { id: userExists._id, role: userExists.role },
                options: { expiresIn: '1d' }
            });
            //send response
            return res.status(200).json({
                message: 'User logged in successfully',
                success: true,
                data: { accessToken }
            });
        });
    }
    ;
}
exports.default = new AuthService();
//# sourceMappingURL=auth.service.js.map