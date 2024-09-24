import { z } from 'zod';
export declare const userSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<["user", "admin"]>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}, {
    name: string;
    email: string;
    password: string;
    role?: "user" | "admin" | undefined;
}>;
