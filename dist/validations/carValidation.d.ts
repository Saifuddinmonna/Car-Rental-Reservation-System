import { z } from 'zod';
export declare const carSchema: z.ZodObject<{
    model: z.ZodString;
    brand: z.ZodString;
    year: z.ZodNumber;
    pricePerHour: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    model: string;
    brand: string;
    year: number;
    pricePerHour: number;
}, {
    model: string;
    brand: string;
    year: number;
    pricePerHour: number;
}>;
