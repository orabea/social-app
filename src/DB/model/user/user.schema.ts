import { Schema } from "mongoose";
import { IUser } from "../../../utils/common/interface";
import { GENDER, SYS_ROLE, USER_AGENT } from "../../../utils/common/enum";



export const UserSchema = new Schema<IUser>({
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
        required: function(){
            if (this.userAgent === USER_AGENT.google) return false;
            return true;
        },
        minlength: 6,
        maxlength: 100
    },
    role: {
        type: String,
        enum: SYS_ROLE,
        default: SYS_ROLE.user
    },
    gender: {
        type: String,
        enum: GENDER,
        default: GENDER.male
    },
    userAgent: {
        type: String,
        enum: USER_AGENT,
        default: USER_AGENT.local
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    }
}, { timestamps: true , toJSON: { virtuals: true }, toObject: { virtuals: true }});


UserSchema.virtual("fullName").get(function(this: IUser) {
    return `${this.firstName} ${this.lastName}`;
});