import { notFoundError } from './../../utils/error/index';
import { PostRepository } from './../../DB/model/posts/post.repository';
import { PostFactoryService } from './factory';
import { CreatePostDTO } from './post.dto';
import { NextFunction, Request, Response } from "express";

// declare global {
//     namespace Express {
//         interface Request {
//             user?: string | any;
//         }
//     }
// }


class PostService {
    private readonly postFactoryService = new PostFactoryService();
    private readonly postRepository = new PostRepository();
    // Post service methods here
   public create = async (req: Request, res: Response, next: NextFunction) => {

 const createPostDTO: CreatePostDTO = req.body;

 const newPost = this.postFactoryService.createPost(createPostDTO, req.user);
 const createdPost = await this.postRepository.create(newPost);

 return res.status(201).json({
     message: 'Post created successfully',
     success: true,
     data:{ createdPost}
 });}



  public addReaction = async (req: Request, res: Response, next: NextFunction) => {
        const {id} = req.params;
        const {reactions }= req.body;
        const userId = req.user._id;
  const postExists = await this.postRepository.exist({_id: id});
  if (!postExists) throw new notFoundError('Post not found');
await this.postRepository.update(
    { _id: id },
    { reactions: [{ reactions, userId }] },{}
);

return res.sendStatus(204);
}

public  specificPost = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const post = await this.postRepository.getOne({_id: id});
    if (!post) throw new notFoundError('Post not found');
    return res.status(200).json({
        message: 'Post fetched successfully',
        success: true,
        data: {post}
    });
}



}


export default new PostService();
