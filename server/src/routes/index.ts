import { Router } from "express";
import bodyParser from "body-parser";
import { clerkWebhook } from "../controllers/clerkWebhook";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
} from "../controllers";
import {
  createProductSchema,
  validateCreateProduct,
  validateDeleteProductQuery,
  deleteProductQuerySchema,
  validateGetProductQuery,
  getProductQuerySchema,
  validateUpdateProduct,
  updateProductSchema,
} from "../middleware";

const router = Router();

router.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);
router.post(
  "/admin/create-product",
  validateCreateProduct(createProductSchema),
  createProduct
);
router.get(
  "/admin/get-all-products",
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
