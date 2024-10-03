import { Request } from 'express';
import { IUser } from '../models/user.js';
type AuthUser = {
    userId: string;
    role: "user" | "admin";
} & IUser;
export interface AuthRequest extends Request {
    user?: AuthUser | IUser;
}
export {};
