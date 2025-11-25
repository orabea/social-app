import {z} from 'zod';
import { GENDER } from '../../utils/common/enum';
import { RegisterDTO } from './auth.dto';



export const registerSchema = z.object<RegisterDTO>({
    fullName: z.string().min(2, 'Full name must be at least 2 characters long') as unknown as string,
    email: z.email('Invalid email address') as unknown as string,
    password: z.string().min(6, 'Password must be at least 6 characters long') as unknown as string,
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters long') as unknown as string,
    gender: z.enum(GENDER, 'Invalid gender') as unknown as GENDER,
    
});
