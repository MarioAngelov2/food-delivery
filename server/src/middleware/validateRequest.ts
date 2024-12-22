import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateRequest =
  (schema: Joi.ObjectSchema, source: "body" | "query" | "params" = "query") =>
  (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errorMessage = error.details.map((detail) => detail.message);
      return res
        .status(400)
        .json({ error: "Validation failed", message: errorMessage });
    }

    req[source] = value;

    next();
  };
