import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  category: Joi.string().required(),
});

export const getProductQuerySchema = Joi.object({
  limit: Joi.number().integer().min(1).default(10),
  page: Joi.number().integer().min(1).default(1),
});

export const idQuerySchema = Joi.object({
  id: Joi.string().required(),
});

export const updateProductSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  image: Joi.string().optional(),
  category: Joi.string().optional(),
});
