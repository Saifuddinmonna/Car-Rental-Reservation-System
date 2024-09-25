import Booking from '../models/booking.js';
import mongoose from 'mongoose';
// Create a booking (User)
export const createBooking = async (data) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const booking = await Booking.create([data], { session });
        await session.commitTransaction();
        session.endSession();
        return booking;
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
};
// Complete a booking and calculate the cost (Admin)
export const completeBooking = async (id) => {
    const booking = await Booking.findById(id);
    if (!booking)
        throw new Error('Booking not found');
    const cost = calculateCost(booking.startTime, booking.endTime);
    booking.cost = cost;
    booking.status = 'Completed'; // Mark booking as completed
    await booking.save();
    return { booking, cost };
};
// Get all bookings (Admin)
export const getAllBookings = async () => {
    return await Booking.find(); // Fetch all bookings
};
// Get a booking by ID (Admin)
export const getBookingById = async (id) => {
    return await Booking.findById(id);
};
// Helper function to calculate rental cost
const calculateCost = (start, end) => {
    const hours = Math.abs(end.getTime() - start.getTime()) / 36e5;
    return hours * 20; // Assume $20/hour rate
};
//# sourceMappingURL=bookingService.js.map