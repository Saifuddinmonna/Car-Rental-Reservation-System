import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import carRoutes from './routes/carRoutes';
import bookingRoutes from './routes/bookingRoutes';
import { errorHandler } from './utils/errorHandler'; // Assuming you have a custom error handler
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);
// Error handling middleware
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map