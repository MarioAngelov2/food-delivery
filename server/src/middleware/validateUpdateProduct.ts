import { Request, Response, NextFunction } from "express";
import Joi from "joi";

type Schema = Joi.ObjectSchema;

export const updateProductSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  image: Joi.string().optional(),
  category: Joi.string().optional(),
});

export const validateUpdateProduct =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
