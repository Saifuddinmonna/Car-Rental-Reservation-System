import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { generateToken } from '../utils/jwt';

// User registration
export const register = async (req: Request, res: Response) => {
  const user = await registerUser(req.body);
  const token = generateToken(user);
  res.json({ user, token });
};

// User login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { user, token } = await loginUser(email, password);
  res.json({ user, token });
};
