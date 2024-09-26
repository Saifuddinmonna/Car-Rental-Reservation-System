import { Request, Response } from 'express';
import { createBooking, completeBooking, getAllBookings, getBookingById } from '../services/bookingService.js';
import { object } from 'zod';

// Create a booking (User)
export const createBookingController = async (req: Request, res: Response): Promise<void> => {
  try {
      // Ensure req.body is typed correctly if you have a specific interface for booking data
      const booking = await createBooking(req.body, req.user.userId); // req.user comes from authentication middleware
      res.status(201).json(booking);
  } catch (error) {
      if (error instanceof Error) {
          res.status(400).json({ message: error.message });
      } else {
          res.status(500).json({ message: 'An unexpected error occurred' });
      }
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

// Return the car (PUT /api/cars/return)
export const returnCarController = async (req: Request, res: Response) => {
  try {
    const { bookingId, endTime } = req.body; // Get booking ID and endTime from request body
    const result = await returnCar(bookingId, endTime); // Call the service to handle the car return
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};
function returnCar(bookingId: any, endTime: any) {
  throw new Error('Function not implemented.');
}

