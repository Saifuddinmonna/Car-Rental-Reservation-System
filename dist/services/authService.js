import bcrypt from 'bcryptjs';
import User from '../models/user';
import { generateToken } from '../utils/jwt';
class AuthService {
    // Register User
    static async registerUser(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await User.create({ ...data, password: hashedPassword });
        return user;
    }
    // Login User
    static async loginUser(email, password) {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }
        // Extracting the required fields for JWT
        const payload = {
            userId: user._id.toString(), // Extracting userId from the Mongoose document
            role: user.role, // Extracting role from the user document
        };
        const token = generateToken(payload); // Passing the payload to the generateToken function
        return { user, token };
    }
}
export const { loginUser, registerUser } = AuthService;
//# sourceMappingURL=authService.js.map