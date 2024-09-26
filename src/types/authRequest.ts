// types.ts or authRequest.ts
import { Request } from 'express';
import { IUser } from '../models/user.js'; // Adjust the path based on your project structure

// Define a new type for user to match the expected structure
type AuthUser = {
  userId: string; // Required property
} & IUser;
// Define the AuthRequest interface
export interface AuthRequest extends Request {
    user?: AuthUser |IUser; // Ensure this type matches what you're using in your middleware
  }

