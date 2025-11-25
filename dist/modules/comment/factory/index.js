"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFactoryService = void 0;
const entity_1 = require("../entity");
class CommentFactoryService {
    createComment(createCommentDTO, user, post, comment) {
        const newComment = new entity_1.Comment();
        newComment.content = createCommentDTO.content;
        newComment.userId = user._id;
        newComment.postId = post._id || (comment === null || comment === void 0 ? void 0 : comment.postId);
        newComment.parentId = (comment === null || comment === void 0 ? void 0 : comment._id) ? [comment._id] : [];
        newComment.reactions = [];
        return newComment;
    }
}
exports.CommentFactoryService = CommentFactoryService;
//# sourceMappingURL=index.js.map