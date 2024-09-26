import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// JwtPayload interface (define it here)
export interface JwtPayload {
  userId: string;
  role: 'user' | 'admin';
}

// Generate a new JWT token
export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

// Verify a JWT token
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (err) {
    console.error('Invalid Token:', (err as Error).message);
    return null;
  }
};
