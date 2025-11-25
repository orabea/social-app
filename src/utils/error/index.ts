export class AppError extends Error {
    constructor( message: string,
         public statusCode: number,
         public errorDetails?: Record<string, any>[]) {
        super(message);
        this.statusCode = statusCode;

    }
}
export class conflictError extends AppError {
    constructor(message: string, public errorDetails?: Record<string, any>[]) {
        super(message, 409, errorDetails);
    }
}
export class notFoundError extends AppError {
    constructor(message: string, public errorDetails?: Record<string, any>[]) {
        super(message, 404, errorDetails);
    }
}
export class notAuthrizedError extends AppError {
    constructor(message: string) {
        super(message, 401);
    }
}
export class forbiddenError extends AppError {
    constructor(message: string) {
        super(message, 403);
    }
}