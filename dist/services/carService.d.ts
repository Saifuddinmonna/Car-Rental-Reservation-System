import { ICar } from '../models/car.js';
export declare const createCar: (data: ICar) => Promise<import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const getCars: () => Promise<(import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare const getCarById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare const updateCar: (id: string, data: ICar) => Promise<(import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare const deleteCar: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICar> & ICar & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
