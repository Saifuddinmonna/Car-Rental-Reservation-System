import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js'; // Import the configured express app
dotenv.config();
// Connect to the database
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map