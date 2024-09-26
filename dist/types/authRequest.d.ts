import { Request } from 'express';
import { IUser } from '../models/user.js';
type AuthUser = {
    userId: string;
} & IUser;
export interface AuthRequest extends Request {
    user?: AuthUser | IUser;
}
export {};
