import { registerUser, loginUser } from '../services/authService.js';
import { generateToken } from '../utils/jwt.js';
import { z } from 'zod';
// Zod schema for user validation
const userSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z.enum(['user', 'admin']),
    phone: z.string().optional(), // Add phone field as optional
    address: z.string().optional(), // Add address field as optional
});
// User registration
export const register = async (req, res) => {
    try {
        // Validate user registration data using Zod
        userSchema.parse(req.body);
        const user = await registerUser(req.body);
        const token = generateToken({
            userId: user._id.toString(),
            role: user.role || 'user',
        });
        res.status(201).json({ success: true, statusCode: 201, message: "User registered successfully", _id: user._id, data: user, token });
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: error.errors });
        }
        else {
            res.status(500).json({ message: 'User registration failed', error });
        }
    }
};
// User login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate login data using Zod
        z.object({
            email: z.string().email("Invalid email address"),
            password: z.string().min(6, "Password must be at least 6 characters long"),
        }).parse({ email, password });
        const { user, token } = await loginUser(email, password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const newToken = generateToken({
            userId: user._id.toString(),
            role: user.role || 'user'
        });
        res.status(200).json({ success: true, statusCode: 200, message: "User logged in successfully", _id: user._id, data: user, token: newToken });
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: error.errors });
        }
        else {
            res.status(401).json({ message: 'Invalid credentials', error });
        }
    }
};
//# sourceMappingURL=authController.js.map