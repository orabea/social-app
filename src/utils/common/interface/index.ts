import { JwtPayload } from "jsonwebtoken";
import { GENDER, SYS_ROLE, USER_AGENT } from "../enum";
import { ObjectId } from "mongoose";

export interface IComment {
  _id?: ObjectId;
  userId: ObjectId;
  postId: ObjectId;
  parentId?: ObjectId | ObjectId[];
  content: string;
  // attachment?: IAttachment[];
  reactions?: IReaction[];
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IAttachment {
  url: string;
  id: string;
}
export interface IReaction {
  _id?: ObjectId;
  userId: ObjectId;
  reactions?: number;
}

export interface IUser {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
otp: string;
otpExpiry: Date;
  role: SYS_ROLE;
  gender: GENDER;
  userAgent: USER_AGENT;
}

export interface IUser{
  _id : ObjectId;

}

export interface IPost{
  userId : ObjectId;
  content: string;
  reactions: IReaction[];
  attachments?: IAttachment[];
  comments?: IComment[];
  createdAt?: Date;
  updatedAt?: Date;
  _id : ObjectId;
}

export interface IPayload extends JwtPayload {
  _id: string;
  role: SYS_ROLE;
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
    secretKey?: string;
    _id: string;
  }
}