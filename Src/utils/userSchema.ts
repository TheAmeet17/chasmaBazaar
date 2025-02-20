import { z } from 'zod';

// User Validation Schema
export const createUserSchema = z.object({
  // Name validation
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .nonempty('Name is required'),

  // Email validation
  email: z
    .string()
    .email('Invalid email format')
    .transform((value) => value.toLowerCase()) ,// Convert email to lowercase
   

  // Password validation
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long')
    .regex(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    )
    .nonempty('Password is required'),

  // Address validation (optional)
  address: z
    .string()
    .max(200, 'Address must be at most 200 characters long')
    .optional(),

  // Role validation (optional, default to 'user')
  role: z.enum(['user', 'admin'], { errorMap: () => ({ message: 'Role must be either "user" or "admin"' }) })
    .optional(),

  // Phone Number validation (optional)
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format') // E.164 format (international format)
    .optional(),

  // Profile Picture URL validation (optional)
  profilePicture: z
    .string()
    .url('Invalid URL format for profile picture')
    .optional(),

  // Date of Birth validation (optional)
  dateOfBirth: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/, // Date format YYYY-MM-DD
      'Invalid date format, should be YYYY-MM-DD'
    )
    .optional(),
});

// Export schema
export default createUserSchema;
