import { Types } from 'mongoose';
export interface IBooking {
    userId: Types.ObjectId;
    carId: Types.ObjectId;
    startTime: Date;
    endTime: Date;
    cost: number;
    status: 'Pending' | 'Completed';
}
declare const Booking: import("mongoose").Model<IBooking, {}, {}, {}, import("mongoose").Document<unknown, {}, IBooking> & IBooking & {
    _id: Types.ObjectId;
}, any>;
export default Booking;
