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

    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to retrieve products");
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

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
