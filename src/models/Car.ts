import { Schema, model } from 'mongoose';

// Updated interface ICar
export interface ICar extends Document {
  save(): unknown;
  _id: any;
  model: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
  status: string;  // Add the status field (e.g., "available", "unavailable")
  isDeleted: boolean; // Add the isDeleted field
  createdAt: Date;
  updatedAt: Date;
}

// Updated schema for Car
const carSchema = new Schema<ICar>({
  name: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    isElectric: { type: Boolean, required: true },
    features: { type: [String], required: true },
    pricePerHour: { type: Number, required: true },
    status: { type: String, default: 'available' }, // Set default status
    isDeleted: { type: Boolean, default: false },   // Set default to false
}, { timestamps: true });

const Car = model<ICar>('Car', carSchema);

export default Car;
