"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = exports.postRouter = void 0;
const comment_controller_1 = __importDefault(require("./comment/comment.controller"));
exports.commentRouter = comment_controller_1.default;
const post_controller_1 = __importDefault(require("./post/post.controller"));
exports.postRouter = post_controller_1.default;
//# sourceMappingURL=index.js.map