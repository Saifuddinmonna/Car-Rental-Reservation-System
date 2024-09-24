import { z } from 'zod';
export declare const bookingSchema: z.ZodObject<{
    userId: z.ZodString;
    carId: z.ZodString;
    startTime: z.ZodDate;
    endTime: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    userId: string;
    carId: string;
    startTime: Date;
    endTime: Date;
}, {
    userId: string;
    carId: string;
    startTime: Date;
    endTime: Date;
}>;
