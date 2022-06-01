import {
  getModelForClass, prop,
} from '@typegoose/typegoose';
import databaseInstance from '../database/connector';

// allow typescript to make his checking on the type of the model
class UserModel {
  @prop()
  public name!: string;

  @prop({ required: true })
  public commissions!: number;
}

const User = getModelForClass(UserModel, {
  existingMongoose: databaseInstance(),
});

export default User;
