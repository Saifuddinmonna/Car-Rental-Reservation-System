import express from 'express';
import { createBookingController, getBookingByIdController, getBookingsController, completeBookingController } from '../controllers/bookingController.js';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware.js';
import { AuthRequest } from '../types/authRequest.js';
import { Response, NextFunction } from 'express';
const router = express.Router();
import { IUser } from '../models/user.js';
// POST: /api/bookings - Create a new booking (user)
router.post('/', isAuthenticated, createBookingController);

// GET: /api/bookings - Get all bookings (admin only)
router.get('/', isAuthenticated, isAdmin, getBookingsController);


router.get('/my-bookings', isAuthenticated,  getBookingsController);

// GET: /api/bookings/:id - Get a specific booking by ID (admin only)
router.get('/:id', isAuthenticated, isAdmin, getBookingByIdController);

// PUT: /api/bookings/:id/complete - Complete a booking and calculate the cost (admin only)
router.put('/:id/complete', isAuthenticated, isAdmin, completeBookingController);

export default router;
