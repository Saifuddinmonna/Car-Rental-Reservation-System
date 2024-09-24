import bcrypt from 'bcryptjs';
import User, { IUser } from '../models/user';
import { generateToken } from '../utils/jwt';

// JwtPayload interface
interface JwtPayload {
  userId: string;
  role: 'user' | 'admin';
}

class AuthService {
  // Register User
  public static async registerUser(data: IUser) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hashedPassword });
    return user;
  }

  // Login User
  public static async loginUser(email: string, password: string) {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    // Extracting the required fields for JWT
    const payload: JwtPayload = {
      userId: user._id.toString(),  // Extracting userId from the Mongoose document
      role: user.role,              // Extracting role from the user document
    };

    const token = generateToken(payload);  // Passing the payload to the generateToken function
    return { user, token };
  }
}

export const { loginUser, registerUser } = AuthService;

