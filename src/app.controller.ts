import { NextFunction, Request, Response, type Express } from 'express';
import {commentRouter, postRouter} from './modules';
import authRouter from './modules/auth/auth.controller.js';
import { connectDB } from './DB/connection.js';
import { AppError } from './utils/error/index.js';

export function bootstap(app: Express, express: any) {
    connectDB();
    app.use(express.json());
    // auth
    app.use("/auth", authRouter)
    // user
    // post
    app.use("/post", postRouter);
    // comment
    app.use("/comment", commentRouter);
    // message

    app.use("/{*dummy}", (req: Request, res: Response, next: NextFunction) => {
        return res.status(404).json({ message: "route not found", success: false });

        });

        app.use((error: AppError, _req: Request, res: Response, next: NextFunction) => {
            return res
            .status(error.statusCode || 500).
            json({
                message: error.message || 'Internal Server Error',
                success: false
            });
        })}