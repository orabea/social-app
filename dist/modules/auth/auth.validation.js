"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = require("zod");
const enum_1 = require("../../utils/common/enum");
exports.registerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(2, 'Full name must be at least 2 characters long'),
    email: zod_1.z.email('Invalid email address'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters long'),
    phoneNumber: zod_1.z.string().min(10, 'Phone number must be at least 10 characters long'),
    gender: zod_1.z.enum(enum_1.GENDER, 'Invalid gender'),
});
//# sourceMappingURL=auth.validation.js.map