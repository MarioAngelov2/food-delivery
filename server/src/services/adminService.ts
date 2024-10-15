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

export const getAllProductsService = async (limit = 10, page = 1) => {
  try {
    const totalCount = await ProductModel.countDocuments();

    const result = await ProductModel.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      totalCount,
      totalPages,
      currentPage: page,
      results: result,
    };
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

    const product = await ProductModel.findById(id);

    if (!product) {
      throw new Error("Product not found");
    }

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
    const product = await ProductModel.findById(id);

    if (!product) throw new Error("Product not found");

    await product.deleteOne();
  } catch (error) {
    console.log(error);
    throw new Error("Database update error");
  }
};
