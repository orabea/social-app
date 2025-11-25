import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../utils/token";
import { UserRepository } from "../model/user/user.repo";
import { notFoundError } from "../../utils/error";


export const isAuthnticated = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // Verify token logic here
    const secretKey = process.env.JWT_SECRET || "defult_secret_key";
    const payload = verifyToken(token, secretKey);

    const userRepository = new UserRepository();

    const user = await userRepository.exist({ _id: payload.id });
    if(!user) throw new notFoundError('User not found');
    req.user = user;

    
    next();
}