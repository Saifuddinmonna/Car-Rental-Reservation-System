import express from 'express';
import { createCarController, getCarsController, getCarByIdController, updateCarController, deleteCarController } from '../controllers/carController.js';
import { isAdmin, isAuthenticated } from '../middlewares/authMiddleware.js';
import { returnCarController } from '../controllers/bookingController.js';
const router = express.Router();
router.put('/return', isAuthenticated, isAdmin, returnCarController);
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
// PUT: /api/cars/return - Admin only can return cars
export default router;
//# sourceMappingURL=carRoutes.js.map