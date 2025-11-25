import { ObjectId } from "mongoose";
import { IReaction } from "../../../utils/common/interface";


export class Post {
userId: ObjectId;
content: string;
reaction: IReaction[];

}