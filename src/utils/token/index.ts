import jwt from 'jsonwebtoken';
import { IPayload } from '../common/interface';
import { DevConfig } from '../../config/env/dev.config';

export const generateToken = ({ payload, secretKey = DevConfig.JWT_SECRET, options }:
    { payload: object, secretKey?: string, options?: jwt.SignOptions }) => {

   return jwt.sign(payload, secretKey, options);
};


export const verifyToken = (token: string, secretKey?: string, string?: any) => {

       return jwt.verify(token, secretKey) as IPayload;
 
}