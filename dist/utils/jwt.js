import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
// Generate a new JWT token
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};
// Verify a JWT token
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    }
    catch (err) {
        console.error('Invalid Token:', err.message);
        return null;
    }
};
//# sourceMappingURL=jwt.js.map