import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("JWT secret key not found");
}

export const generateAccessToken = (payload: {}, expiresIn = "15m") => {
  return jwt.sign(payload, SECRET_KEY);
};

export const generateRefreshToken = (payload: {}, expiresIn = "7d") => {
  return jwt.sign(payload, SECRET_KEY);
};
