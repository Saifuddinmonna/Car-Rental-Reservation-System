import { Schema, model } from 'mongoose';

// Updated interface ICar
export interface ICar {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[]; // Array of strings for features
  pricePerHour: number;
}

// Updated schema for Car
const carSchema = new Schema<ICar>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true },
  features: { type: [String], required: true }, // Array of strings
  pricePerHour: { type: Number, required: true },
}, { timestamps: true });

const Car = model<ICar>('Car', carSchema);

export default Car;
