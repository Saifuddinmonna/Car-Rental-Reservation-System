import { Schema, model } from 'mongoose';

export interface ICar {
  model: string;
  brand: string;
  year: number;
  pricePerHour: number;
  available: boolean;
}

const carSchema = new Schema<ICar>({
  model: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  pricePerHour: { type: Number, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true });

const Car = model<ICar>('Car', carSchema);

export default Car;
