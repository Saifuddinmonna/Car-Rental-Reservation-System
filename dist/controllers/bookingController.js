var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createBooking, completeBooking, getAllBookings, getBookingById } from '../services/bookingService';
// Create a booking (User)
export const createBookingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield createBooking(req.body);
        res.status(201).json(booking);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
});
// Complete booking and calculate rental cost (Admin)
export const completeBookingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield completeBooking(id);
        res.json(result);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
});
// Get all bookings (Admin)
export const getBookingsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield getAllBookings();
        res.json(bookings);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
});
// Get a specific booking by ID (Admin)
export const getBookingByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield getBookingById(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
});
//# sourceMappingURL=bookingController.js.map