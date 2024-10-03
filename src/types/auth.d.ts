// auth.d.ts
import { Request } from 'express';
import AuthUser from '../types/authRequest.ts'

declare global {
  namespace Express {
    interface Request {
      user?: IUser| AuthUser; // Adjust this based on your user object structure
        // You can add more user properties here if needed
      };
    }
  }

