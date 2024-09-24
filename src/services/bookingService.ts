import Booking from '../models/booking';
import mongoose from 'mongoose';

export const createBooking = async (data: unknown) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const booking = await Booking.create([data], { session });
    await session.commitTransaction();
    session.endSession();
    return booking;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const completeBooking = async (id: string) => {
  const booking = await Booking.findById(id);
  if (!booking) throw new Error('Booking not found');

  const cost = calculateCost(booking.startTime, booking.endTime);
  booking.cost = cost;
  await booking.save();
  return { booking, cost };
};

const calculateCost = (start: Date, end: Date) => {
  const hours = Math.abs(end.getTime() - start.getTime()) / 36e5;
  return hours * 20; // Assume $20/hour rate
};
