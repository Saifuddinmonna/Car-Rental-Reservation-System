// express.d.ts
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string; // Adjust based on your actual user structure
                // Add other user properties if needed
            };
        }
    }
}
