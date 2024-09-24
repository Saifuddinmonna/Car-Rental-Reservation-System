var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../services/carService';
// Create a new car (Admin)
export const createCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield createCar(req.body);
        res.status(201).json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating car', error });
    }
});
// Get all cars
export const getCarsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield getCars();
        res.json(cars);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error });
    }
});
// Get a car by ID
export const getCarByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield getCarById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching car', error });
    }
});
// Update a car (Admin)
export const updateCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield updateCar(req.params.id, req.body);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating car', error });
    }
});
// Delete a car (Admin)
export const deleteCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteCar(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting car', error });
    }
});
//# sourceMappingURL=carController.js.map