import { reactionSchema } from './../../../DB/model/posts/post.schema';
import { IUser } from '../../../utils/common/interface';
import { Post } from '../entity';
import { CreatePostDTO } from './../post.dto';


export class PostFactoryService {
  public createPost(createPostDTO: CreatePostDTO, user: IUser) {
        const newPost = new Post;

        newPost.content = createPostDTO.content;
        newPost.userId = user._id;
        newPost.reaction = [];
        return newPost;
    }

    
    }
