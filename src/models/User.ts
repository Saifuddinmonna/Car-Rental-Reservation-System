import { Schema, model } from 'mongoose';

export interface IUser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id: any;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  phone?: string;   // Optional phone property, just type it as `string`
  address?: string; // Optional address property, typed as `string`
}
export interface IUser {
  userId: string; // Add this line
  // ... other properties
}
class UserModel {
  private static userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  }, { timestamps: true });

  public static User = model<IUser>('User', this.userSchema);
}

export default  UserModel.User;
