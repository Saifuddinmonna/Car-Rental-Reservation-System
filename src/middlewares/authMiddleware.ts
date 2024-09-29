import { Request, Response , NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.js';


interface AuthUser {
  userId: string;
  role: string ;
}

// Update AuthRequest to include the user field in the Request object
export interface AuthRequest extends Request {
  user: AuthUser;
}

// Rename `authMiddleware` to `isAuthenticated`
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as IUser;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid token.' });
    console.log(err);
  }
};

// Rename `adminMiddleware` to `isAdmin`
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).send({ message: 'Access denied. Admins only.' });
  }
  next();
};
