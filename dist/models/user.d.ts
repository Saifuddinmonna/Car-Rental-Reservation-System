export interface IUser {
    _id: any;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}
declare const _default: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
