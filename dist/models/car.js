import { Schema, model } from 'mongoose';
// Updated schema for Car
const carSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    isElectric: { type: Boolean, required: true },
    features: { type: [String], required: true },
    pricePerHour: { type: Number, required: true },
    status: { type: String, default: 'available' }, // Set default status
    isDeleted: { type: Boolean, default: false }, // Set default to false
}, { timestamps: true });
const Car = model('Car', carSchema);
export default Car;
//# sourceMappingURL=car.js.map