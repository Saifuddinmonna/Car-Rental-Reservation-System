import { Booking } from '../models/booking.js';
// Create a booking (User)
import Car from '../models/car.js';
import User from '../models/user.js';
// Return a car and calculate the rental cost
// Return a car and calculate the rental cost
export const returnCar = async (bookingId, endTime) => {
    // Find the booking by ID and populate associated car and user details
    const booking = await Booking.findById(bookingId).populate('car user');
    if (!booking) {
        throw new Error('Booking not found');
    }
    // Check if the booking is already completed
    if (booking.status === 'Completed') {
        throw new Error('This booking has already been completed');
    }
    // Parse endTime to a Date object
    const endDate = new Date(endTime);
    const startDate = booking.startTime;
    // Check if the return time is valid (must be after the start time)
    if (endDate <= startDate) {
        throw new Error('Return time must be after the start time');
    }
    // Calculate the total cost
    const totalCost = calculateCost(startDate, endDate);
    // Update the booking details
    booking.endTime = endDate; // Assuming endTime field exists in IBooking model
    booking.totalCost = totalCost; // Add total cost to the booking
    booking.status = 'Completed'; // Mark booking as completed
    await booking.save();
    // Update the car's availability
    const car = await Car.findById(booking.carId);
    if (car) {
        car.status = 'available'; // Set car status to available
        await car.save();
    }
    // Return details about the completed booking
    return {
        success: true,
        statusCode: 200,
        message: 'Car returned successfully',
        data: {
            bookingId: booking._id.toString(),
            carId: booking.carId,
            userId: booking.userId,
            totalCost,
            startTime: booking.startTime,
            endTime: booking.endTime,
        },
    };
};
// Define the function with proper types
export const createBooking = async (bookingData, userId) => {
    const { carId, date, startTime } = bookingData;
    // Check if the car exists and is available
    const car = await Car.findById(carId);
    if (!car || car.status !== 'available') {
        throw new Error('Car is not available for booking');
    }
    // Create a new booking
    const booking = new Booking({
        userId,
        carId,
        startTime: new Date(`${date}T${startTime}:00`), // Format start time
    });
    await booking.save();
    // Update the car's availability
    car.status = 'unavailable';
    await car.save();
    // Get the user details
    const user = await User.findById(userId);
    return {
        success: true,
        statusCode: 200,
        message: "Car booked successfully",
        data: {
            _id: booking._id.toString(), // Convert to string if necessary
            date,
            startTime,
            endTime: booking.endTime, // Ensure `endTime` is handled correctly
            user: {
                _id: user?._id.toString(), // Handle null case
                name: user?.name || '', // Default to empty string if null
                email: user?.email || '',
                role: user?.role || '',
                phone: user?.phone,
                address: user?.address,
            },
            car: {
                _id: car._id.toString(),
                name: car.model, // Use car's model name
                description: car.description || 'No description provided',
                color: car.color,
                isElectric: car.isElectric || false,
                features: car.features || [],
                pricePerHour: car.pricePerHour,
                status: car.status,
                isDeleted: car.isDeleted || false,
                createdAt: car.createdAt,
                updatedAt: car.updatedAt,
            },
            totalCost: booking.totalCost, // Ensure totalCost is defined in your model
            createdAt: booking.createdAt,
            updatedAt: booking.updatedAt,
        }
    };
};
// Complete a booking and calculate the cost (Admin)
export const completeBooking = async (id) => {
    const booking = await Booking.findById(id);
    if (!booking)
        throw new Error('Booking not found');
    const cost = calculateCost(booking.startTime, booking.endTime);
    booking.cost = cost;
    booking.status = 'Completed'; // Mark booking as completed
    await booking.save();
    return { booking, cost };
};
// Get all bookings (Admin)
export const getAllBookings = async () => {
    return await Booking.find(); // Fetch all bookings
};
// Get a booking by ID (Admin)
export const getBookingById = async (id) => {
    return await Booking.findById(id);
};
// Helper function to calculate rental cost
const calculateCost = (start, end) => {
    const hours = Math.abs(end.getTime() - start.getTime()) / 36e5;
    return hours * 20; // Assume $20/hour rate
};
//# sourceMappingURL=bookingService.js.map