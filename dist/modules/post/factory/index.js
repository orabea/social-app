"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFactoryService = void 0;
const entity_1 = require("../entity");
class PostFactoryService {
    createPost(createPostDTO, user) {
        const newPost = new entity_1.Post;
        newPost.content = createPostDTO.content;
        newPost.userId = user._id;
        newPost.reaction = [];
        return newPost;
    }
}
exports.PostFactoryService = PostFactoryService;
//# sourceMappingURL=index.js.map