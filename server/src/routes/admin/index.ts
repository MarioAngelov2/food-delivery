import { Router } from "express";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  adminLogin,
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
  authenticateAdmin,
} from "../../middleware";

const router = Router();

router.post(
  "/create-product",
  validateCreateProduct(createProductSchema),
  createProduct
);
router.get(
  "/get-all-products",
  validateGetProductQuery(getProductQuerySchema), authenticateAdmin,
  getAllProducts
);
router.get("/admin/get-product/:id", getProduct);
router.put(
  "/update-product",
  validateUpdateProduct(updateProductSchema),
  updateProduct
);
router.delete(
  "/delete-product/:id",
  validateDeleteProductQuery(deleteProductQuerySchema),
  deleteProduct
);
router.post("/login", adminLogin);

export default router;
