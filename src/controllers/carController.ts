import { Request, Response } from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../services/carService.js';
import { returnCar } from '../services/bookingService.js';
import { z } from 'zod';
import errorHandler from '../utils/errorHandler.js';

// Zod schema for user validation
const carSchema = z.object({
  name: z.string().nonempty("Car name is required"),
  description: z.string().nonempty("Description is required"),
  color: z.string().nonempty("Color is required"),
  isElectric: z.boolean().optional(),
  features: z.array(z.string()).optional(),
  pricePerHour: z.number().positive("Price must be positive"),
  status: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

// Create a new car (Admin)
export const createCarController = async (req: Request, res: Response) => {
  try {
    // Validate car data using Zod
    carSchema.parse(req.body);

    const car = await createCar(req.body);
    res.json({
      success: true,
      statusCode: 200,
      message: "Car created successfully",
      data: {
          _id: car._id,
          name: car.name,
          description: car.description,
          color: car.color,
          isElectric: car.isElectric,
          features: car.features,
          pricePerHour: car.pricePerHour,
          status: "available",
          isDeleted: false,
          createdAt: car.createdAt,
          updatedAt: car.updatedAt
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const erro=errorHandler;
      console.log(erro)
      res.status(400).json({ message: error.errors });
    } else {
      res.status(500).json({ message: 'Error creating car', error });
    }
  }
};


// Get all cars
export const getCarsController = async (req: Request, res: Response) => {
  try {
    
    const cars = await getCars();
    res.json({"success": true,
      "statusCode": 200,
      "message": "Cars retrieved successfully",'data':cars});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars', error });
  }
};

// Get a car by ID
export const getCarByIdController = async (req: Request, res: Response) => {
  try {
    
    const car = await getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
  
    res.json({"success": true,
  "statusCode": 200,
  "message": "Cars retrieved successfully",'data':car});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car', error });
  }
};


// Update a car (Admin)
export const updateCarController = async (req: Request, res: Response) => {
  try {
    // Validate car data using Zod
    carSchema.partial().parse(req.body);

    const car = await updateCar(req.params.id, req.body);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.errors });
    } else {
      res.status(500).json({ message: 'Error updating car', error });
    }
  }
};

// Delete a car (Admin)
export const deleteCarController = async (req: Request, res: Response) => {
  try {
      const car = await deleteCar(req.params.id);
      console.log('do I get car',req.body);
      console.log('for id check',req.params.id);
      if (!car) {
          return res.status(404).json({ message: 'Car not found' });
      }

      const response = {
          success: true,
          statusCode: 200,
          message: "Car Deleted successfully",
          data: {
              _id: car._id,
              name: car.name,
              description: car.description,
              color: car.color,
              isElectric: car.isElectric,
              features: car.features,
              pricePerHour: car.pricePerHour,
              status: "available",
              isDeleted: true,
              createdAt: car.createdAt,
              updatedAt: car.updatedAt
          }
      };

      res.status(200).json(response);
  }
  catch (error) {
      res.status(500).json({ message: 'Error deleting car', error });
  }
};
export const returnCarController = async (req: Request, res: Response) => {
  try {
      const { bookingId, endTime } = req.body;
      const result = await returnCar(bookingId, endTime);  // This calls the service
      res.json(result);
  } catch (error) {
      res.status(500).json({
          message: 'Error processing car return',
          error: error instanceof Error ? error.message : error
      });
  }
};

