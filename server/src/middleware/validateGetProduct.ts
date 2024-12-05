import { Request, Response, NextFunction } from "express";
import Joi from "joi";

type Schema = Joi.ObjectSchema;

export const getProductQuerySchema = Joi.object({
  limit: Joi.number().integer().min(1).default(10),
  page: Joi.number().integer().min(1).default(1),
});

export const validateGetProductQuery =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
