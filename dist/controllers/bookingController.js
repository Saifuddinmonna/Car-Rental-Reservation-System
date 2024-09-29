import { createBooking, completeBooking, getAllBookings, getBookingById, returnCar } from '../services/bookingService.js';
// Import Zod
import { z } from 'zod';
// Zod schema for booking validation
const bookingSchema = z.object({
    carId: z.string().nonempty("Car ID is required"),
    startTime: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid start time"),
    endTime: z.string().optional(),
    totalCost: z.number().optional(),
    status: z.string().optional(),
});
// Create a booking (User)
export const createBookingController = async (req, res) => {
    try {
        // Validate req.body using Zod schema
        bookingSchema.parse(req.body);
        const booking = await createBooking(req.body, req.user.userId); // req.user comes from authentication middleware
        res.status(201).json(booking);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: error.errors });
        }
        else if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};
// Complete booking and calculate rental cost (Admin)
export const completeBookingController = async (req, res) => {
    try {
        const { id } = req.params;
        z.string().parse(id); // Validate ID using Zod
        const result = await completeBooking(id);
        res.json(result);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: error.errors });
        }
        else if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
// Get all bookings (Admin)
export const getBookingsController = async (req, res) => {
    try {
        const bookings = await getAllBookings();
        res.json(bookings);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ message: error.message });
    }
};
// Get a specific booking by ID (Admin)
export const getBookingByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await getBookingById(id);
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
// Return the car (PUT /api/cars/return)
export const returnCarController = async (req, res) => {
    try {
        console.log('data hit from booking controller');
        const { bookingId, endTime } = req.body;
        const result = await returnCar(bookingId, endTime);
        res.json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};
// function returnCar(bookingId: any, endTime: any) {
//   throw new Error('Function not implemented.');
// }
//# sourceMappingURL=bookingController.js.map