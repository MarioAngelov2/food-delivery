import { Request, Response, NextFunction } from "express";
import Joi from "joi";

type Schema = Joi.ObjectSchema;

export const deleteProductQuerySchema = Joi.object({
  id: Joi.string().required(),
});

export const validateDeleteProductQuery =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };