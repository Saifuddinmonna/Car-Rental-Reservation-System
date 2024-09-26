// auth.d.ts
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string; // Adjust this based on your user object structure
        // You can add more user properties here if needed
      };
    }
  }
}
