import Joi from "joi";

// Define the user schema interface
interface IUserSchema {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgotPasswordToken?: string; // Make these fields optional
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
}

// Define the Joi schema
export const userSchema = Joi.object<IUserSchema>({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  isVerified: Joi.boolean().default(false),
  isAdmin: Joi.boolean().default(false),
  forgotPasswordToken: Joi.string().allow(null), // Allow null for optional fields
  forgotPasswordTokenExpiry: Joi.date().allow(null), // Allow null for optional fields
  verifyToken: Joi.string().allow(null), // Allow null for optional fields
  verifyTokenExpiry: Joi.date().allow(null), // Allow null for optional fields
});

// Export the user schema
export default userSchema;
