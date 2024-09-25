import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/user.js';
interface AuthRequest extends Request {
    user?: IUser;
}
export declare const isAuthenticated: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const isAdmin: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
