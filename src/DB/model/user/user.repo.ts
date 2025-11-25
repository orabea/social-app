import { IUser } from "../../../utils/common/interface";
import { AbstractRepository } from "../../abstract.repo";
import { User } from "./user.model";



export class UserRepository extends AbstractRepository<IUser> {
    constructor() {
        super(User);
    }
    async getAllUsers() {
        return this.model.find();
    }

}
