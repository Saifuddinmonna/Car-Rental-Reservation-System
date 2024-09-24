import bcrypt from 'bcryptjs';
import User from '../models/user';
import { generateToken } from '../utils/jwt';

export const registerUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hashedPassword });
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken(user);
  return { user, token };
};
