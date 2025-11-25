import { Model, MongooseUpdateQueryOptions, ProjectionType, QueryOptions, RootFilterQuery } from 'mongoose';
export abstract class AbstractRepository<T> {
    constructor(protected model: Model<T>){};

    async create(item: Partial <T>): Promise<InstanceType<Model<T>>> {
        const doc = new this.model(item);
        await doc.save();
        return doc;
    }
    
    async exist(filter: RootFilterQuery<T>,
         Projection?:ProjectionType<T>,
         Options?: QueryOptions){
      return await this.model.findOne(filter, Projection, Options)
    }

    
    async getOne(filter: RootFilterQuery<T>
        , Projection?:ProjectionType<T>
         , Options?: QueryOptions)
         : Promise<InstanceType<Model<T>> | null> {

      return await this.model.findOne(filter, Projection, Options)
    }

   async update(filter: RootFilterQuery<T>, update: Partial<T>, options: MongooseUpdateQueryOptions<T>) {
 await this.model.updateOne(filter, update, options);}


    async delete(filter: RootFilterQuery<T>) {
        await this.model.deleteOne(filter);
    }}