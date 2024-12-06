import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const generateToken = (payload: {}, expiresIn = "1h") => {
  if (!SECRET_KEY) {
    throw new Error("JWT secret key not found");
  }

  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};
