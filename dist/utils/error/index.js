"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbiddenError = exports.notAuthrizedError = exports.notFoundError = exports.conflictError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode, errorDetails) {
        super(message);
        this.statusCode = statusCode;
        this.errorDetails = errorDetails;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
class conflictError extends AppError {
    constructor(message, errorDetails) {
        super(message, 409, errorDetails);
        this.errorDetails = errorDetails;
    }
}
exports.conflictError = conflictError;
class notFoundError extends AppError {
    constructor(message, errorDetails) {
        super(message, 404, errorDetails);
        this.errorDetails = errorDetails;
    }
}
exports.notFoundError = notFoundError;
class notAuthrizedError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}
exports.notAuthrizedError = notAuthrizedError;
class forbiddenError extends AppError {
    constructor(message) {
        super(message, 403);
    }
}
exports.forbiddenError = forbiddenError;
//# sourceMappingURL=index.js.map