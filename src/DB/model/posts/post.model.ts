import { model, Model } from "mongoose";
import { PostSchema } from "./post.schema";
import { IPost } from "../../../utils/common/interface";


export const Post = model<IPost>("Post", PostSchema);