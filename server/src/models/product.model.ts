import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
});

export const ProductModel = model("Product", productSchema);
