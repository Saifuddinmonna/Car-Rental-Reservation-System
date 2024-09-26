import { Schema, Document } from 'mongoose';
export interface IBooking extends Document {
    userId: Schema.Types.ObjectId;
    carId: Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date | null;
    totalCost: number;
}
declare const bookingSchema: Schema<IBooking, import("mongoose").Model<IBooking, any, any, any, Document<unknown, any, IBooking> & IBooking & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IBooking, Document<unknown, {}, import("mongoose").FlatRecord<IBooking>> & import("mongoose").FlatRecord<IBooking> & Required<{
    _id: unknown;
}>>;
declare const Booking: import("mongoose").Model<IBooking, {}, {}, {}, Document<unknown, {}, IBooking> & IBooking & Required<{
    _id: unknown;
}>, any>;
export { Booking, bookingSchema };
