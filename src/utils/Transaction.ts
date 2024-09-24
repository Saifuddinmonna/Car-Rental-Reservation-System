const session = await mongoose.startSession();
session.startTransaction();

try {
  const booking = await Booking.create([bookingData], { session });
  await Car.findByIdAndUpdate(carId, { status: 'unavailable' }, { session });
  
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw new Error('Booking failed');
} finally {
  session.endSession();
}
