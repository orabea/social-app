import { Schema } from "mongoose";
import { IPost, IReaction } from "../../../utils/common/interface";
import { POST_REACTION } from "../../../utils/common/enum";

export const reactionSchema = new Schema({
    reaction: {
        type: Number,
        enum: Object.values(POST_REACTION).map((value) => value as unknown as number),
        default: POST_REACTION.like
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true }
);

export const PostSchema = new Schema<IPost>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    // required : function() {
    //     if(this.attachments.length) return false;
    //     return true;
    // }
  },
  reactions: [reactionSchema],

}, { timestamps: true }
);
