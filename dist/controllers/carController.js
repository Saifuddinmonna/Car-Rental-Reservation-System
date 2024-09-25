import { createCar, getCars, getCarById, updateCar, deleteCar } from '../services/carService.js';
// Create a new car (Admin)
export const createCarController = async (req, res) => {
    try {
        const car = await createCar(req.body);
        res.status(201).json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating car', error });
    }
};
// Get all cars
export const getCarsController = async (req, res) => {
    try {
        const cars = await getCars();
        res.json(cars);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error });
    }
};
// Get a car by ID
export const getCarByIdController = async (req, res) => {
    try {
        const car = await getCarById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching car', error });
    }
};
// Update a car (Admin)
export const updateCarController = async (req, res) => {
    try {
        const car = await updateCar(req.params.id, req.body);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating car', error });
    }
};
// Delete a car (Admin)
export const deleteCarController = async (req, res) => {
    try {
        const car = await deleteCar(req.params.id);
        console.log('do I get car', req.body);
        console.log('for id check', req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const response = {
            success: true,
            statusCode: 200,
            message: "Car Deleted successfully",
            data: {
                _id: car._id,
                name: car.name,
                description: car.description,
                color: car.color,
                isElectric: car.isElectric,
                features: car.features,
                pricePerHour: car.pricePerHour,
                status: "available",
                isDeleted: true,
                createdAt: car.createdAt,
                updatedAt: car.updatedAt
            }
        };
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting car', error });
    }
};
//# sourceMappingURL=carController.js.map