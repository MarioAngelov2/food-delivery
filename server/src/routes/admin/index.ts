import { Router } from "express";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  adminLogin,
  refreshAccessToken,
} from "../../controllers";
import { authenticateAdmin, validateRequest } from "../../middleware";
import {
  createProductSchema,
  getProductQuerySchema,
  updateProductSchema,
  idQuerySchema,
} from "../../schemas/productSchema";

const router = Router();

router.post(
  "/create-product",
  validateRequest(createProductSchema, "body"),
  createProduct
);
router.get(
  "/get-all-products",
  validateRequest(getProductQuerySchema),
  getAllProducts
);
router.get("/get-product/:id", getProduct);
router.put(
  "/update-product",
  validateRequest(updateProductSchema),
  updateProduct
);
router.delete(
  "/delete-product/:id",
  validateRequest(idQuerySchema, "params"),
  deleteProduct
);
router.post("/login", adminLogin);
router.post("/refresh-token", refreshAccessToken);

export default router;
