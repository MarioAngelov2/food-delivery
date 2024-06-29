import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  id: String,
});

export const UserModel = model("User", userSchema);
