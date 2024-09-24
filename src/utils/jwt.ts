import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables

// The secret key should be stored in your .env file
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d'; // Example: 1 day

// Interface for the payload structure
interface JwtPayload {
  userId: string;
  role: 'user' | 'admin';
}

// Generate a new JWT token
export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
};

// Verify a JWT token
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (err) {
    // const errorMessage= (err  as Error).message;
    // console.error('Invalid Token:', errorMessage);
    console.error('invalid token', (err as Error).message)
    return null;
  }
};
