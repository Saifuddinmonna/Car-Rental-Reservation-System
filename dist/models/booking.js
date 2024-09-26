import { Schema, model } from 'mongoose';
// Create the booking schema
const bookingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, default: null }, // Set to null initially
    totalCost: { type: Number, default: 0 }, // Will be updated later
}, { timestamps: true });
// Create and export the Booking model
const Booking = model('Booking', bookingSchema);
export { Booking, bookingSchema };
//# sourceMappingURL=booking.js.map