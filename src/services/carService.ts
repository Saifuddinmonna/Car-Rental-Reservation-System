import Car,{ICar} from '../models/car';

export const createCar = async (data: ICar) => {
  return await Car.create(data);
};

export const getCars = async () => {
  return await Car.find();
};

export const updateCar = async (id: string, data: ICar) => {
  return await Car.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCar = async (id: string) => {
  await Car.findByIdAndDelete(id);
};
