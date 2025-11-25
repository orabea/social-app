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
const comment_repo_1 = require("./../../DB/model/comment/comment.repo");
const error_1 = require("../../utils/error");
const post_repository_1 = require("./../../DB/model/posts/post.repository");
const factory_1 = require("./factory");
class commentService {
    constructor() {
        this.postRepository = new post_repository_1.PostRepository();
        this.commentRepository = new comment_repo_1.CommentRepository();
        this.commentFactoryService = new factory_1.CommentFactoryService();
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            //get data from req
            const { postId, id } = req.params;
            const createCommentDTO = req.body;
            //exists check
            const postExists = yield this.postRepository.exist({ _id: postId });
            if (!postExists) {
                throw new error_1.notFoundError('Post not available');
            }
            ;
            //////////////////comment existence check
            let commentExists;
            if (id) {
                commentExists = yield this.commentRepository.exist({ _id: id });
                if (!commentExists) {
                    throw new error_1.notFoundError('Comment not available');
                }
            }
            ;
            //create comment
            const comment = this.commentFactoryService.createComment(createCommentDTO, req.user, postExists, commentExists);
            const createdComment = yield this.commentRepository.create(comment);
            return res.status(201).json({
                message: 'Comment created successfully',
                success: true,
                data: { createdComment }
            });
        });
        this.deleteComment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            //get data from req
            const { id } = req.params;
            //check if comment exists
            const commentExists = yield this.commentRepository.exist({ _id: id });
            if (!commentExists) {
                throw new error_1.notFoundError('Comment not available');
            }
            //delete comment
            yield this.commentRepository.delete({ _id: id });
            return res.status(200).json({
                message: 'Comment deleted successfully',
                success: true,
            });
        });
    }
}
;
exports.default = new commentService();
//# sourceMappingURL=comment.service.js.map