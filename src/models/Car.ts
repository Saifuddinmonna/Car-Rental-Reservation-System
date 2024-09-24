import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    role: 'user' | 'admin';
    password: string;
    phone: string;
    address: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
