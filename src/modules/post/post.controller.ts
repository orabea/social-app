import { Router } from "express";
import postService from "./post.service";
import { isAuthnticated } from "../../DB/middleware/auth.middleware";
import { commentRouter } from "..";
const router = Router();
router.use("/:postId/comment", commentRouter)
router.post("/", isAuthnticated, postService.create);
router.patch("/:id", isAuthnticated, postService.addReaction);
router.get("/:id", postService.specificPost);

export default router;