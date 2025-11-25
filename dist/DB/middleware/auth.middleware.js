"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthnticated = void 0;
const token_1 = require("../../utils/token");
const user_repo_1 = require("../model/user/user.repo");
const error_1 = require("../../utils/error");
const isAuthnticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // Verify token logic here
    const secretKey = process.env.JWT_SECRET || "defult_secret_key";
    const payload = (0, token_1.verifyToken)(token, secretKey);
    const userRepository = new user_repo_1.UserRepository();
    const user = yield userRepository.exist({ _id: payload.id });
    if (!user)
        throw new error_1.notFoundError('User not found');
    req.user = user;
    next();
});
exports.isAuthnticated = isAuthnticated;
//# sourceMappingURL=auth.middleware.js.map