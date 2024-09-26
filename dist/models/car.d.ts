export interface ICar extends Document {
    save(): unknown;
    _id: any;
    model: string;
    name: string;
    description: string;
    color: string;
    isElectric: boolean;
    features: string[];
    pricePerHour: number;
    status: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
declare const Car: import("mongoose").Model<ICar, {}, {}, {}, import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default Car;
