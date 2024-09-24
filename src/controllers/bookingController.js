"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingByIdController = exports.getBookingsController = exports.completeBookingController = exports.createBookingController = void 0;
const bookingService_1 = require("../services/bookingService");
// Create a booking (User)
const createBookingController = async (req, res) => {
    try {
        const booking = await (0, bookingService_1.createBooking)(req.body);
        res.status(201).json(booking);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
};
exports.createBookingController = createBookingController;
// Complete booking and calculate rental cost (Admin)
const completeBookingController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await (0, bookingService_1.completeBooking)(id);
        res.json(result);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
};
exports.completeBookingController = completeBookingController;
// Get all bookings (Admin)
const getBookingsController = async (req, res) => {
    try {
        const bookings = await (0, bookingService_1.getAllBookings)();
        res.json(bookings);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
};
exports.getBookingsController = getBookingsController;
// Get a specific booking by ID (Admin)
const getBookingByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await (0, bookingService_1.getBookingById)(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
};
exports.getBookingByIdController = getBookingByIdController;
