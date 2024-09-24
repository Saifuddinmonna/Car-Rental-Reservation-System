import Car from '../models/car';

export const createCar = async (data: any) => {
  return await Car.create(data);
};

export const getCars = async () => {
  return await Car.find();
};

export const updateCar = async (id: string, data: any) => {
  return await Car.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCar = async (id: string) => {
  await Car.findByIdAndDelete(id);
};
