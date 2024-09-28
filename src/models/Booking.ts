import mongoose, { Schema, model, Document, ObjectId } from 'mongoose';

// Define the Booking interface
export interface  IBooking extends Document {
    [x: string]: any;
    
    _id: mongoose.Types.ObjectId;  // Explicitly define the _id type

    userId: Schema.Types.String |ObjectId;
    carId: Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date; // This can be either Date or null
    status:String;
    totalCost: number;
    createdAt: Date;    
    updatedAt: Date;    // Remove optional `?`, always require a date
    cost:number;
}

// Create the booking schema
const bookingSchema = new Schema<IBooking>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to user
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },   // Reference to car
    startTime: { type: Date, required: true },
    endTime: { type: Date, default: null },
    totalCost: { type: Number, default: 0 },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

// Create and export the Booking model
const Booking = model<IBooking>('Booking', bookingSchema);
export { Booking,bookingSchema};

