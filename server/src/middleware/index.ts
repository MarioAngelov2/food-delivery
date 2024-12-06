import {
  createProductSchema,
  validateCreateProduct,
} from "./validateCreateProduct";
import {
  validateDeleteProductQuery,
  deleteProductQuerySchema,
} from "./validateDeleteProduct";
import {
  validateGetProductQuery,
  getProductQuerySchema,
} from "./validateGetProduct";
import {
  validateUpdateProduct,
  updateProductSchema,
} from "./validateUpdateProduct";
import { authenticateAdmin } from "./authenticateAdmin";

export {
  createProductSchema,
  validateCreateProduct,
  validateDeleteProductQuery,
  deleteProductQuerySchema,
  validateGetProductQuery,
  getProductQuerySchema,
  validateUpdateProduct,
  updateProductSchema,
  authenticateAdmin
};
