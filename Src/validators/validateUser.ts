import { Request, Response, NextFunction } from 'express';
import createUserSchema from '../utils/userSchema'; // Import the schema you created

// Validation middleware for user creation
export const validateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Validate the request body using the createUserSchema
    await createUserSchema.parse(req.body); 
    next(); // If valid, move on to the next middleware or route handler
  } catch (error: any) {
    // If validation fails, respond with a 400 status and error messages
    res.status(400).json({
      error: error.errors ?? error.message, // Sends validation error details
    });
  }
};
