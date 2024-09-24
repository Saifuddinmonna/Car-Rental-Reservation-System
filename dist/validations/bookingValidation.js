import { z } from 'zod';
export const bookingSchema = z.object({
    userId: z.string(),
    carId: z.string(),
    startTime: z.date(),
    endTime: z.date(),
});
//# sourceMappingURL=bookingValidation.js.map