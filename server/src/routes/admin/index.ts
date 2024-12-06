import { Router } from "express";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
} from "../../controllers";
import {
  createProductSchema,
  validateCreateProduct,
  validateDeleteProductQuery,
  deleteProductQuerySchema,
  validateGetProductQuery,
  getProductQuerySchema,
  validateUpdateProduct,
  updateProductSchema,
} from "../../middleware";

const router = Router();

router.post(
  "/admin/create-product",
  validateCreateProduct(createProductSchema),
  createProduct
);
router.get(
  "/get-all-products",
  validateGetProductQuery(getProductQuerySchema),
  getAllProducts
);
router.get("/admin/get-product/:id", getProduct);
router.put(
  "/admin/update-product",
  validateUpdateProduct(updateProductSchema),
  updateProduct
);
router.delete(
  "/admin/delete-product/:id",
  validateDeleteProductQuery(deleteProductQuerySchema),
  deleteProduct
);

export default router;
