import { Request, Response } from 'express';
export declare const createBookingController: (req: Request, res: Response) => Promise<void>;
export declare const completeBookingController: (req: Request, res: Response) => Promise<void>;
export declare const getBookingsController: (req: Request, res: Response) => Promise<void>;
export declare const getBookingByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const returnCarController: (req: Request, res: Response) => Promise<void>;
