import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const authenticateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    if (!SECRET_KEY) {
      throw new Error("Secret key is missing");
    }

    const decoded = jwt.verify(token, SECRET_KEY) as TokenPayload;

    if (decoded.role === "admin") {
      next();
    } else {
      return res.status(403).json({ message: "Forbidden" });
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
