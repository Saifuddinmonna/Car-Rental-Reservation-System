import { IUser } from '../models/user';
declare class AuthService {
    static registerUser(data: IUser): Promise<import("mongoose").Document<unknown, {}, IUser> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static loginUser(email: string, password: string): Promise<{
        user: import("mongoose").Document<unknown, {}, IUser> & IUser & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
}
export declare const loginUser: typeof AuthService.loginUser, registerUser: typeof AuthService.registerUser;
export {};
