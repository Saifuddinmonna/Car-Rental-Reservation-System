var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcryptjs';
import User from '../models/user';
import { generateToken } from '../utils/jwt';
class AuthService {
    // Register User
    static registerUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt.hash(data.password, 10);
            const user = yield User.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
            return user;
        });
    }
    // Login User
    static loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.findOne({ email });
            if (!user || !(yield bcrypt.compare(password, user.password))) {
                throw new Error('Invalid credentials');
            }
            // Extracting the required fields for JWT
            const payload = {
                userId: user._id.toString(), // Extracting userId from the Mongoose document
                role: user.role, // Extracting role from the user document
            };
            const token = generateToken(payload); // Passing the payload to the generateToken function
            return { user, token };
        });
    }
}
export const { loginUser, registerUser } = AuthService;
//# sourceMappingURL=authService.js.map