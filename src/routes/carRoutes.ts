import express from 'express';
import { createCarController, getCarsController, getCarByIdController, updateCarController, deleteCarController } from '../controllers/carController.js';
import { isAdmin, isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

// GET: /api/cars - Get all cars
router.get('/', getCarsController);

// GET: /api/cars/:id - Get a single car by ID
router.get('/:id', getCarByIdController);

// POST: /api/cars - Create a new car (admin only)
router.post('/', isAuthenticated, isAdmin, createCarController);

// PUT: /api/cars/:id - Update a car (admin only)
router.put('/:id', isAuthenticated, isAdmin, updateCarController);

// DELETE: /api/cars/:id - Delete a car (admin only)
router.delete('/:id', isAuthenticated, isAdmin, deleteCarController);

export default router;

