"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCarController = exports.updateCarController = exports.getCarByIdController = exports.getCarsController = exports.createCarController = void 0;
const carService_1 = require("../services/carService");
// Create a new car (Admin)
const createCarController = async (req, res) => {
    try {
        const car = await (0, carService_1.createCar)(req.body);
        res.status(201).json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating car', error });
    }
};
exports.createCarController = createCarController;
// Get all cars
const getCarsController = async (req, res) => {
    try {
        const cars = await (0, carService_1.getCars)();
        res.json(cars);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error });
    }
};
exports.getCarsController = getCarsController;
// Get a car by ID
const getCarByIdController = async (req, res) => {
    try {
        const car = await (0, carService_1.getCarById)(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching car', error });
    }
};
exports.getCarByIdController = getCarByIdController;
// Update a car (Admin)
const updateCarController = async (req, res) => {
    try {
        const car = await (0, carService_1.updateCar)(req.params.id, req.body);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating car', error });
    }
};
exports.updateCarController = updateCarController;
// Delete a car (Admin)
const deleteCarController = async (req, res) => {
    try {
        await (0, carService_1.deleteCar)(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting car', error });
    }
};
exports.deleteCarController = deleteCarController;
