import { GENDER } from './../../utils/common/enum/index';


export interface RegisterDTO{

    fullName?: string;
    email: string;
    password: string;
    phoneNumber?: string;
    gender?: GENDER;
}

export interface LoginDTO{
    email: string;
    password: string;
}

export interface updateUserDTO extends Partial<RegisterDTO>{

 }

