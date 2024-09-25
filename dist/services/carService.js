import Car from '../models/car.js';
// Create a new car
export const createCar = async (data) => {
    return await Car.create(data);
};
// Get all cars
export const getCars = async () => {
    return await Car.find();
};
// Get a car by ID
export const getCarById = async (id) => {
    return await Car.findById(id);
};
// Update a car by ID
export const updateCar = async (id, data) => {
    return await Car.findByIdAndUpdate(id, data, { new: true });
};
// Delete a car by ID
export const deleteCar = async (id) => {
    await Car.findByIdAndDelete(id);
};
//# sourceMappingURL=carService.js.map