import { config } from 'dotenv';

config();

export const DevConfig ={
    PORT: process.env.PORT,

    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET, 
}