import { registerUser, loginUser } from '../services/authService';
import { generateToken } from '../utils/jwt';
// User registration
export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        // Generate token with userId from _id
        const token = generateToken({
            userId: user._id.toString(), // Ensure _id is converted to string
            role: user.role || 'user' // Ensure role is from the user model
        });
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'User registration failed', error });
    }
};
// User login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { user, token } = await loginUser(email, password);
        // Ensure the user object is valid
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate token with userId from _id
        const newToken = generateToken({
            userId: user._id.toString(), // Ensure _id is converted to string
            role: user.role || 'user' // Ensure role is from the user model
        });
        res.status(200).json({ user, token: newToken });
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid credentials', error });
    }
};
//# sourceMappingURL=authController.js.map