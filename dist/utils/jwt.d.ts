export interface JwtPayload {
    userId: string;
    role: 'user' | 'admin';
}
export declare const generateToken: (payload: JwtPayload) => string;
export declare const verifyToken: (token: string) => JwtPayload | null;
