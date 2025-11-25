import { IPost } from "../../../utils/common/interface";
import { AbstractRepository } from "../../abstract.repo";
import { Post } from "./post.model";


export class PostRepository extends AbstractRepository<IPost> {
// [x: string]: any;
constructor() {
    super(Post);
  }

}