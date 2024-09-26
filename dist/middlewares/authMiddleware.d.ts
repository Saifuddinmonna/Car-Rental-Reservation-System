import { Request, Response, NextFunction } from 'express';
interface AuthUser {
    userId: string;
    role: string;
}
export interface AuthRequest extends Request {
    user?: AuthUser;
}
export declare const isAuthenticated: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const isAdmin: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
