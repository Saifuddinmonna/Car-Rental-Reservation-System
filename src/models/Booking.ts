import mongoose, { Schema, model, Document, ObjectId } from 'mongoose';

// Define the Booking interface
export interface IBooking extends Document {
    _id: mongoose.Types.ObjectId;  // Explicitly define the _id type

    userId: Schema.Types.String |ObjectId;
    carId: Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date; // This can be either Date or null
    status:String;
    totalCost: number;
    createdAt: Date;    // Remove optional `?`, always require a date
    updatedAt: Date;    // Remove optional `?`, always require a date
    cost:number;
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

