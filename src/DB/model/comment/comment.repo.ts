import { IComment } from "../../../utils/common/interface";
import { AbstractRepository } from "../../abstract.repo";
import { Comment } from "./comment.model";


export class CommentRepository extends AbstractRepository<IComment> {

    constructor() {
        super(Comment);
    }
}