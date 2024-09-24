var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Booking from '../models/booking';
import mongoose from 'mongoose';
// Create a booking (User)
export const createBooking = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose.startSession();
    session.startTransaction();
    try {
        const booking = yield Booking.create([data], { session });
        yield session.commitTransaction();
        session.endSession();
        return booking;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw error;
    }
});
// Complete a booking and calculate the cost (Admin)
export const completeBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield Booking.findById(id);
    if (!booking)
        throw new Error('Booking not found');
    const cost = calculateCost(booking.startTime, booking.endTime);
    booking.cost = cost;
    booking.status = 'Completed'; // Mark booking as completed
    yield booking.save();
    return { booking, cost };
});
// Get all bookings (Admin)
export const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Booking.find(); // Fetch all bookings
});
// Get a booking by ID (Admin)
export const getBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Booking.findById(id);
});
// Helper function to calculate rental cost
const calculateCost = (start, end) => {
    const hours = Math.abs(end.getTime() - start.getTime()) / 36e5;
    return hours * 20; // Assume $20/hour rate
};
//# sourceMappingURL=bookingService.js.map