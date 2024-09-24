import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = express.Router();

// POST: /api/auth/register - Register a new user
router.post('/register', registerUser);

// POST: /api/auth/login - Login an existing user
router.post('/login', loginUser);

export default router;
