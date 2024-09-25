import { Request, Response } from 'express';
export declare const createCarController: (req: Request, res: Response) => Promise<void>;
export declare const getCarsController: (req: Request, res: Response) => Promise<void>;
export declare const getCarByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCarController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCarController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
