"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../../../utils/common/enum");
exports.UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    lastName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true,
    },
    password: {
        type: String,
        required: function () {
            if (this.userAgent === enum_1.USER_AGENT.google)
                return false;
            return true;
        },
        minlength: 6,
        maxlength: 100
    },
    role: {
        type: String,
        enum: enum_1.SYS_ROLE,
        default: enum_1.SYS_ROLE.user
    },
    gender: {
        type: String,
        enum: enum_1.GENDER,
        default: enum_1.GENDER.male
    },
    userAgent: {
        type: String,
        enum: enum_1.USER_AGENT,
        default: enum_1.USER_AGENT.local
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    }
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
exports.UserSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});
//# sourceMappingURL=user.schema.js.map