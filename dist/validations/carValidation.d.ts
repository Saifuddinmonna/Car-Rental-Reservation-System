import { z } from 'zod';
export declare const carSchema: z.ZodObject<{
    model: z.ZodString;
    brand: z.ZodString;
    year: z.ZodNumber;
    pricePerHour: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    model: string;
    pricePerHour: number;
    brand: string;
    year: number;
}, {
    model: string;
    pricePerHour: number;
    brand: string;
    year: number;
}>;
