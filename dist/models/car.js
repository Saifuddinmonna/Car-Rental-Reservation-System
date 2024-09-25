import { Schema, model } from 'mongoose';
// Updated schema for Car
const carSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    isElectric: { type: Boolean, required: true },
    features: { type: [String], required: true }, // Array of strings
    pricePerHour: { type: Number, required: true },
}, { timestamps: true });
const Car = model('Car', carSchema);
export default Car;
//# sourceMappingURL=car.js.map