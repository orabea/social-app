"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactoryService = void 0;
const enum_1 = require("../../../utils/common/enum");
const hash_1 = require("../../../utils/hash");
const otp_1 = require("../../../utils/otp");
const entity_1 = require("../entity");
class AuthFactoryService {
    register(registerDTO) {
        const user = new entity_1.User();
        user.fullName = registerDTO.fullName;
        user.email = registerDTO.email;
        user.password = (0, hash_1.generateHash)(registerDTO.password);
        user.phoneNumber = registerDTO.phoneNumber;
        user.otp = (0, otp_1.generateOTP)();
        user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes
        user.gender = registerDTO.gender;
        user.createdAt = new Date();
        user.userAgent = enum_1.USER_AGENT.local;
        user.role = enum_1.SYS_ROLE.user;
        return user;
    }
}
exports.AuthFactoryService = AuthFactoryService;
//# sourceMappingURL=index.js.map