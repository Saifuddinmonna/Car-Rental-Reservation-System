import express from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../controllers/carController';
import { isAdmin, isAuthenticated } from '../middlewares/authMiddleware';

const router = express.Router();

// GET: /api/cars - Get all cars
router.get('/', getCars);

// GET: /api/cars/:id - Get a single car by ID
router.get('/:id', getCarById);

// POST: /api/cars - Create a new car (admin only)
router.post('/', isAuthenticated, isAdmin, createCar);

// PUT: /api/cars/:id - Update a car (admin only)
router.put('/:id', isAuthenticated, isAdmin, updateCar);

// DELETE: /api/cars/:id - Delete a car (admin only)
router.delete('/:id', isAuthenticated, isAdmin, deleteCar);

export default router;
