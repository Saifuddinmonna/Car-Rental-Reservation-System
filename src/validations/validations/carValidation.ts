import { z } from 'zod';

export const carSchema = z.object({
  model: z.string().min(1),
  brand: z.string().min(1),
  year: z.number().min(1886),
  pricePerHour: z.number().min(1),
});
