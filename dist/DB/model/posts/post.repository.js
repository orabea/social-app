"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const abstract_repo_1 = require("../../abstract.repo");
const post_model_1 = require("./post.model");
class PostRepository extends abstract_repo_1.AbstractRepository {
    // [x: string]: any;
    constructor() {
        super(post_model_1.Post);
    }
}
exports.PostRepository = PostRepository;
//# sourceMappingURL=post.repository.js.map