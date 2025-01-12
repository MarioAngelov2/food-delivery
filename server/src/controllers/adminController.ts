import dotenv from "dotenv";
import { Request, Response } from "express";
import {
  createProductService,
  getAllProductsService,
  getProductService,
  updateProductService,
  deleteProductService,
} from "../services";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";

dotenv.config();

const ADMIN_NAME = process.env.ADMIN_NAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const newProduct = await createProductService(data);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create product");
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const page = req.query.page ? Number(req.query.page) : 1;

    if (isNaN(limit) || isNaN(page)) {
      return res.status(400).json({ message: "Invalid page or limit values" });
    }

    const result = await getAllProductsService(limit, page);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to retrieve products");
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await getProductService(id);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to retrieve product");
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await updateProductService(data);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update product");
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteProductService(id);

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete product");
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (username === ADMIN_NAME && password === ADMIN_PASSWORD) {
      const accessToken = generateAccessToken({ role: "admin" });
      const refreshToken = generateRefreshToken({ role: "admin" });

      // Set refreshToken in HttpOnly cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // Enable in production
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      // Send accessToken in JSON
      res.json({ success: true, accessToken });
    } else {
      return res
        .status(403)
        .json({ success: false, messsage: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Admin login failed", error);
    res.status(500).send("Inrernal server error");
  }
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }

  if (!JWT_SECRET) {
    throw new Error("JWT secret key not found");
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    const newAccessToken = generateAccessToken(decoded);
    const newRefreshToken = generateRefreshToken(decoded);

    // Update refreshToken
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false, // Enable in production
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({ accessToken: newAccessToken });
  } catch (error: any) {
    console.error("Refresh token error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Refresh token expired" });
    }

    return res.status(403).json({ message: "Invalid token" });
  }
};
