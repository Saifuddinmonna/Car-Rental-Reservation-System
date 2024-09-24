import { Schema, model, Types } from 'mongoose';

export interface IBooking {
  userId: Types.ObjectId;
  carId: Types.ObjectId;
  startTime: Date;
  endTime: Date;
  cost: number;
}

const bookingSchema = new Schema<IBooking>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  cost: { type: Number, default: 0 },
}, { timestamps: true });

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;
