import { Schema } from "mongoose";
import { IComment } from "../../../utils/common/interface";
import { reactionSchema } from "../posts/post.schema";



export const CommentSchema = new Schema<IComment>({

userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },

  content: {
    type: String,
  },

  parentId: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },

  reactions: [reactionSchema]
},


{ timestamps: true })