import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    unique: [true, 'User with this name already exists'],
    required: [true, 'Name is required field'],
  })
  name: string;

  @Prop({
    unique: [true, 'Duplicate email entered'],
    required: [true, 'Email is required field'],
  })
  email: string;

  @Prop({ required: [true, 'Password is required field'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
