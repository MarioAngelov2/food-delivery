import { Request, Response } from "express";
import {
  createProductService,
  getAllProductsService,
  getProductService,
  updateProductService,
  deleteProductService,
} from "../services/adminService";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const newProduct = await createProductService(data);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductsService();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await getProductService(id);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await updateProductService(data);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteProductService(id);

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
