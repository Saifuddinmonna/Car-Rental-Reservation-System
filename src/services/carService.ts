import Car, { ICar } from '../models/car.js';

// Create a new car
export const createCar = async (data: ICar) => {
  return await Car.create(data);
};

// Get all cars
export const getCars = async () => {
  return await Car.find();
};

// Get a car by ID
export const getCarById = async (id: string) => {
  return await Car.findById(id);
};

// Update a car by ID
export const updateCar = async (id: string, data: ICar) => {
  return await Car.findByIdAndUpdate(id, data, { new: true });
};

// Delete a car by ID
export const deleteCar = async (id: string) => {
  return await Car.findByIdAndDelete(id);
};
