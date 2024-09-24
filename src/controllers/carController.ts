import { Request, Response } from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../services/carService';

// Create a new car (Admin)
export const createCarController = async (req: Request, res: Response) => {
  try {
    const car = await createCar(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error creating car', error });
  }
};

// Get all cars
export const getCarsController = async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars', error });
  }
};

// Get a car by ID
export const getCarByIdController = async (req: Request, res: Response) => {
  try {
    const car = await getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car', error });
  }
};

// Update a car (Admin)
export const updateCarController = async (req: Request, res: Response) => {
  try {
    const car = await updateCar(req.params.id, req.body);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error updating car', error });
  }
};

// Delete a car (Admin)
export const deleteCarController = async (req: Request, res: Response) => {
  try {
    await deleteCar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting car', error });
  }
};
