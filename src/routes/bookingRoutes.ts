import express from 'express';
import { createBooking, getBookingById, getBookings, completeBooking } from '../controllers/bookingController';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

// POST: /api/bookings - Create a new booking (user)
router.post('/', isAuthenticated, createBooking);

// GET: /api/bookings - Get all bookings (admin only)
router.get('/', isAuthenticated, isAdmin, getBookings);

// GET: /api/bookings/:id - Get a specific booking by ID (admin only)
router.get('/:id', isAuthenticated, isAdmin, getBookingById);

// PUT: /api/bookings/:id/complete - Complete a booking and calculate the cost (admin only)
router.put('/:id/complete', isAuthenticated, isAdmin, completeBooking);

export default router;
