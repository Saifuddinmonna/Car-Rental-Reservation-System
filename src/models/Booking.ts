import { Schema, model, Document } from 'mongoose';

// Define the Booking interface
export interface IBooking extends Document {
    userId: Schema.Types.ObjectId;
    carId: Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date | null; // This can be either Date or null
    totalCost: number;
}

// Create the booking schema
const bookingSchema = new Schema<IBooking>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, default: null }, // Set to null initially
    totalCost: { type: Number, default: 0 }, // Will be updated later
}, { timestamps: true });

// Create and export the Booking model
const Booking = model<IBooking>('Booking', bookingSchema);
export { Booking,bookingSchema};

