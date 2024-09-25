import express from 'express';
import { register, login } from '../controllers/authController.js';
const router = express.Router();
// POST: /api/auth/register - Register a new user
router.post('/signup', register);
// POST: /api/auth/login - Login an existing user
router.post('/signin', login);
export default router;
//# sourceMappingURL=authRoutes.js.map