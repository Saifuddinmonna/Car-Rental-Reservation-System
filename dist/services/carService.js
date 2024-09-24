var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Car from '../models/car';
// Create a new car
export const createCar = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Car.create(data);
});
// Get all cars
export const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Car.find();
});
// Get a car by ID
export const getCarById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Car.findById(id);
});
// Update a car by ID
export const updateCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Car.findByIdAndUpdate(id, data, { new: true });
});
// Delete a car by ID
export const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Car.findByIdAndDelete(id);
});
//# sourceMappingURL=carService.js.map