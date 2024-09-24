import { Request, Response, NextFunction } from 'express';
declare class CustomError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare const errorHandler: (err: CustomError, req: Request, res: Response, next: NextFunction) => void;
export default CustomError;
