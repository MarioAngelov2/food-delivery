import { ProductModel } from "../models/product.model";
import { Product } from "../types/index";

export const createProductService = async (data: Product) => {
  try {
    if (!data) {
      throw new Error("Data does not exist");
    }

    const { name, description, price, image, category } = data;

    const newProduct = new ProductModel({
      name,
      description,
      price,
      image,
      category,
    });

    const savedProduct = await newProduct.save();

    return savedProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Database update error");
  }
};

export const getAllProductsService = async () => {
  try {
    const result = await ProductModel.find();

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Database update error");
  }
};

export const getProductService = async (id: string) => {
  try {
    if (!id) {
      throw new Error("ID does not exist");
    }

    const product = await ProductModel.findById(id);

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Database update error");
  }
};

export const updateProductService = async (data: Product) => {
  try {
    if (!data) {
      throw new Error("Data does not exist");
    }

    const { name, description, price, image, category, id } = data;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        image,
        category,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      throw new Error("Product not found or could not be updated");
    }

    return updatedProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Database update error");
  }
};

export const deleteProductService = async (id: String) => {
  try {
    if (!id) throw new Error("Product does not exist");

    await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Database update error");
  }
};
