import { Router } from "express";
import bodyParser from "body-parser";
import { clerkWebhook } from "../controllers/clerkWebhook";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
} from "../controllers/adminController";
import {
  createProductSchema,
  validateCreateProduct
} from "../middleware/validateCreateProduct";
import {
  deleteProductQuerySchema,
  validateDeleteProductQuery,
} from "../middleware/validateDeleteProduct";
import {
  getProductQuerySchema,
  validateGetProductQuery,
} from "../middleware/validateGetProduct";
import {
  updateProductSchema,
  validateUpdateProduct
} from '../middleware/validateUpdateProduct'

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
