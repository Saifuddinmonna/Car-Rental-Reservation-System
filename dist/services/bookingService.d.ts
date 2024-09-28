import { IBooking } from '../models/booking.js';
import mongoose from 'mongoose';
interface IBookingData {
    carId: string;
    date: string;
    startTime: string;
}
export declare const createBooking: (bookingData: IBookingData, userId: string) => Promise<{
    success: boolean;
    statusCode: number;
    message: string;
    data: {
        _id: string;
        date: string;
        startTime: string;
        endTime?: Date;
        user: {
            _id: string;
            name: string;
            email: string;
            role: string;
            phone?: string;
            address?: string;
        };
        car: {
            _id: string;
            name: string;
            description: string;
            color?: string;
            isElectric?: boolean;
            features?: string[];
            pricePerHour: number;
            status: string;
            isDeleted?: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        totalCost: number;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
export declare const returnCar: (bookingId: string, endTime: string) => Promise<{
    success: boolean;
    statusCode: number;
    message: string;
    data: {
        _id: string;
        date: string;
        startTime: string;
        endTime: string;
        user: any;
        car: {
            _id: any;
            name: string;
            description: string;
            color: string;
            isElectric: boolean;
            features: string[];
            pricePerHour: number;
            status: string;
            isDeleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        totalCost: number;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
export declare const completeBooking: (id: string) => Promise<{
    booking: mongoose.Document<unknown, {}, IBooking> & IBooking & Required<{
        _id: mongoose.Types.ObjectId;
    }>;
    cost: number;
}>;
export declare const getAllBookings: () => Promise<(mongoose.Document<unknown, {}, IBooking> & IBooking & Required<{
    _id: mongoose.Types.ObjectId;
}>)[]>;
export declare const getBookingById: (id: string) => Promise<(mongoose.Document<unknown, {}, IBooking> & IBooking & Required<{
    _id: mongoose.Types.ObjectId;
}>) | null>;
export {};
