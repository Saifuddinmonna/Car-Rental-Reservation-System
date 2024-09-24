export interface ICar {
    model: string;
    brand: string;
    year: number;
    pricePerHour: number;
    available: boolean;
}
declare const Car: import("mongoose").Model<ICar, {}, {}, {}, import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default Car;
