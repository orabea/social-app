import { IReaction } from './../../../utils/common/interface/index';
import { IComment, IPost, IUser } from "../../../utils/common/interface";
import { CreateCommentDTO } from "../comment.dto";
import { Comment } from "../entity";
import { ObjectId } from 'mongodb';


export class CommentFactoryService {
    createComment(createCommentDTO: CreateCommentDTO, user : IUser, post : IPost, comment?: IComment){

        const newComment = new Comment();
        newComment.content = createCommentDTO.content;
        newComment.userId = user._id;
        newComment.postId = post._id || comment?.postId;

        newComment.parentId = comment?._id ? [comment._id] : [];

        newComment.reactions= [];

        return newComment;


    }
}