import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phoneNumber: String,
});

export const UserModel = model("User", userSchema);
