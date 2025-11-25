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
const index_1 = require("./../../utils/error/index");
const post_repository_1 = require("./../../DB/model/posts/post.repository");
const factory_1 = require("./factory");
// declare global {
//     namespace Express {
//         interface Request {
//             user?: string | any;
//         }
//     }
// }
class PostService {
    constructor() {
        this.postFactoryService = new factory_1.PostFactoryService();
        this.postRepository = new post_repository_1.PostRepository();
        // Post service methods here
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const createPostDTO = req.body;
            const newPost = this.postFactoryService.createPost(createPostDTO, req.user);
            const createdPost = yield this.postRepository.create(newPost);
            return res.status(201).json({
                message: 'Post created successfully',
                success: true,
                data: { createdPost }
            });
        });
        this.addReaction = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { reactions } = req.body;
            const userId = req.user._id;
            const postExists = yield this.postRepository.exist({ _id: id });
            if (!postExists)
                throw new index_1.notFoundError('Post not found');
            yield this.postRepository.update({ _id: id }, { reactions: [{ reactions, userId }] }, {});
            return res.sendStatus(204);
        });
        this.specificPost = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield this.postRepository.getOne({ _id: id });
            if (!post)
                throw new index_1.notFoundError('Post not found');
            return res.status(200).json({
                message: 'Post fetched successfully',
                success: true,
                data: { post }
            });
        });
    }
}
exports.default = new PostService();
//# sourceMappingURL=post.service.js.map