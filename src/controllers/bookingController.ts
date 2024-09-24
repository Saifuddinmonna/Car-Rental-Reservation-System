import { Request, Response } from 'express';
import { createBooking, completeBooking } from '../services/bookingService';

// Create a booking (User)
export const createBookingController = async (req: Request, res: Response) => {
  const booking = await createBooking(req.body);
  res.status(201).json(booking);
};

// Complete booking and calculate rental cost (Admin)
export const completeBookingController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await completeBooking(id);
  res.json(result);
};

