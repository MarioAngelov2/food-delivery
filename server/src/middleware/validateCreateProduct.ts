import { Request, Response, NextFunction } from "express";
import Joi from "joi";

type Schema = Joi.ObjectSchema;

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  category: Joi.string().required(),
});

export const validateCreateProduct =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
