import mongoose, { Schema, Document, ObjectId } from 'mongoose';
export interface IBooking extends Document {
    _id: mongoose.Types.ObjectId;
    userId: Schema.Types.String | ObjectId;
    carId: Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date;
    status: String;
    totalCost: number;
    createdAt: Date;
    updatedAt: Date;
    cost: number;
}
declare const bookingSchema: mongoose.Schema<IBooking, mongoose.Model<IBooking, any, any, any, mongoose.Document<unknown, any, IBooking> & IBooking & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IBooking, mongoose.Document<unknown, {}, mongoose.FlatRecord<IBooking>> & mongoose.FlatRecord<IBooking> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
declare const Booking: mongoose.Model<IBooking, {}, {}, {}, mongoose.Document<unknown, {}, IBooking> & IBooking & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>;
export { Booking, bookingSchema };
