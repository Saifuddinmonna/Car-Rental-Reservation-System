import { Request, Response } from 'express';
import { createBooking, completeBooking, getAllBookings, getBookingById } from '../services/bookingService.js';

// Create a booking (User)
export const createBookingController = async (req: Request, res: Response) => {
  try {
    const booking = await createBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    if (error instanceof Error)
    res.status(400).json({ message: error.message });
  }
};

// Complete booking and calculate rental cost (Admin)
export const completeBookingController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await completeBooking(id);
    res.json(result);
  } catch (error) {

    if (error instanceof Error)
    res.status(400).json({ message: error.message });
  }
};

// Get all bookings (Admin)
export const getBookingsController = async (req: Request, res: Response) => {
  try {
    const bookings = await getAllBookings();
    res.json(bookings);
  } catch (error) {
    if (error instanceof Error)
    res.status(400).json({ message: error.message });
  }
};

// Get a specific booking by ID (Admin)
export const getBookingByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking = await getBookingById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    if (error instanceof Error)
    res.status(400).json({ message: error.message });
  }
};
