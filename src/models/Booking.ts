import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { ICar } from './Car';

export interface IBooking extends Document {
    date: Date;
    user: IUser['_id'];
    car: ICar['_id'];
    startTime: string;
    endTime?: string;
    totalCost: number;
}

const BookingSchema: Schema = new Schema({
    date: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, default: null },
    totalCost: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model<IBooking>('Booking', BookingSchema);
