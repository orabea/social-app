import { GENDER, SYS_ROLE, USER_AGENT } from "../../../utils/common/enum";

export class User {

   
    public fullName!: string;
    public email!: string;
    public password!: string;
    public phoneNumber?: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public otp!: string;
    public otpExpiry!: Date;
    public role!: SYS_ROLE;
    public gender!: GENDER;
    public userAgent!: USER_AGENT;
}