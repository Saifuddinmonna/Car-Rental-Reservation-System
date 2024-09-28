import { Schema, model } from 'mongoose';
// Create the booking schema
const bookingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to user
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true }, // Reference to car
    startTime: { type: Date, required: true },
    endTime: { type: Date, default: null },
    totalCost: { type: Number, default: 0 },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });
// Create and export the Booking model
const Booking = model('Booking', bookingSchema);
export { Booking, bookingSchema };
//# sourceMappingURL=booking.js.map