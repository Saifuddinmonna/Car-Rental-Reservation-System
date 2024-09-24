import { Request, Response } from 'express';
import { createCar, getCars, updateCar, deleteCar } from '../services/carService';

// Create a car (Admin)
export const createCarController = async (req: Request, res: Response) => {
  const car = await createCar(req.body);
  res.status(201).json(car);
};

// Get all cars
export const getAllCarsController = async (req: Request, res: Response) => {
  const cars = await getCars();
  res.json(cars);
};

// Update a car (Admin)
export const updateCarController = async (req: Request, res: Response) => {
  const car = await updateCar(req.params.id, req.body);
  res.json(car);
};

// Delete a car (Admin)
export const deleteCarController = async (req: Request, res: Response) => {
  await deleteCar(req.params.id);
  res.status(204).send();
};
