import mongoose from 'mongoose';
export declare const createBooking: (data: unknown) => Promise<(mongoose.Document<unknown, {}, import("../models/booking").IBooking> & import("../models/booking").IBooking & {
    _id: mongoose.Types.ObjectId;
})[]>;
export declare const completeBooking: (id: string) => Promise<{
    booking: mongoose.Document<unknown, {}, import("../models/booking").IBooking> & import("../models/booking").IBooking & {
        _id: mongoose.Types.ObjectId;
    };
    cost: number;
}>;
export declare const getAllBookings: () => Promise<(mongoose.Document<unknown, {}, import("../models/booking").IBooking> & import("../models/booking").IBooking & {
    _id: mongoose.Types.ObjectId;
})[]>;
export declare const getBookingById: (id: string) => Promise<(mongoose.Document<unknown, {}, import("../models/booking").IBooking> & import("../models/booking").IBooking & {
    _id: mongoose.Types.ObjectId;
}) | null>;
