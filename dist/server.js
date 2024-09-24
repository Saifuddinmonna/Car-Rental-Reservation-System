import dotenv from 'dotenv';
import connectDB from './config/db';
import app from './app'; // Import the configured express app
dotenv.config();
// Connect to the database
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
//# sourceMappingURL=server.js.map