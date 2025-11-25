
import { CommentRepository } from './../../DB/model/comment/comment.repo';
import { notFoundError } from '../../utils/error';
import { PostRepository } from './../../DB/model/posts/post.repository';
import { NextFunction, Request, Response } from "express";

import { CommentFactoryService } from './factory';
import { CreateCommentDTO } from './comment.dto';
import { IComment } from '../../utils/common/interface';


class commentService {
    private readonly postRepository = new PostRepository()
    private readonly commentRepository = new CommentRepository();
    private readonly commentFactoryService = new CommentFactoryService();
public create = async (req : Request, res: Response, next: NextFunction) => {
//get data from req
const {postId , id}= req.params;
const createCommentDTO: CreateCommentDTO = req.body;
//exists check
const postExists = await this.postRepository.exist({_id: postId});
if (!postExists) {
    throw new notFoundError('Post not available')};
  //////////////////comment existence check
let commentExists: IComment | any;
if (id) {
     commentExists = await this.commentRepository.exist({_id: id})
if (!commentExists) {
    throw new notFoundError('Comment not available')}
};
//create comment
const comment = this.commentFactoryService.createComment(
    createCommentDTO,
    req.user,
    postExists,
    commentExists,

);
const createdComment = await this.commentRepository.create(comment);

return res.status(201).json({
    message: 'Comment created successfully',
    success: true,
    data: {createdComment}
})};

public deleteComment = async (req : Request, res: Response, next: NextFunction) => {
    //get data from req
    const {id}= req.params;

    //check if comment exists
    const commentExists = await this.commentRepository.exist({_id: id});
    if (!commentExists) {
        throw new notFoundError('Comment not available');
    }
    //delete comment
    await this.commentRepository.delete({_id: id});
    return res.status(200).json({
        message: 'Comment deleted successfully',
        success: true,
    })


}

};

export default new commentService();