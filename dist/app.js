import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import carRoutes from './routes/carRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import { errorHandler } from './utils/errorHandler.js'; // Assuming you have a custom error handler
import dotenv from 'dotenv';
const app = express();
dotenv.config;
// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// Basic Health Check Route
app.get('/', (req, res) => {
    res.send('API is running...');
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);
// Error handling middleware
app.use(errorHandler);
// connectDB();
// // Start the server
// const PORT = process.env.PORT || 3000; // Use environment variable or default to 5000
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
export default app;
//# sourceMappingURL=app.js.map