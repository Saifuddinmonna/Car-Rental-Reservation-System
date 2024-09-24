import { Schema, model } from 'mongoose';
const carSchema = new Schema({
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },
    pricePerHour: { type: Number, required: true },
    available: { type: Boolean, default: true },
}, { timestamps: true });
const Car = model('Car', carSchema);
export default Car;
//# sourceMappingURL=car.js.map