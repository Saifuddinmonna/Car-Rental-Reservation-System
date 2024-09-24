import { Schema, model } from 'mongoose';
const bookingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    cost: { type: Number, default: 0 },
}, { timestamps: true });
const Booking = model('Booking', bookingSchema);
export default Booking;
//# sourceMappingURL=booking.js.map