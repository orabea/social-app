"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_service_1 = __importDefault(require("./post.service"));
const auth_middleware_1 = require("../../DB/middleware/auth.middleware");
const __1 = require("..");
const router = (0, express_1.Router)();
router.use("/:postId/comment", __1.commentRouter);
router.post("/", auth_middleware_1.isAuthnticated, post_service_1.default.create);
router.patch("/:id", auth_middleware_1.isAuthnticated, post_service_1.default.addReaction);
router.get("/:id", post_service_1.default.specificPost);
exports.default = router;
//# sourceMappingURL=post.controller.js.map