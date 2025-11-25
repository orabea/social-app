import { Router } from "express";
import { isAuthnticated } from "../../DB/middleware/auth.middleware";
import commentService from "./comment.service";


const router = Router({ mergeParams: true});
router.post("/:id", isAuthnticated,commentService.create);
router.delete("/:id", isAuthnticated, commentService.deleteComment);

export default router;