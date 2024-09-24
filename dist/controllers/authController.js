var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { registerUser, loginUser } from '../services/authService';
import { generateToken } from '../utils/jwt';
// User registration
export const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield registerUser(req.body);
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
});
// User login
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { user, token } = yield loginUser(email, password);
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
});
//# sourceMappingURL=authController.js.map