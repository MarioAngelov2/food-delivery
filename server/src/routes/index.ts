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
  productValidationMiddleware,
  createProductValidation,
  updateProductValidation,
} from "../middleware/productMiddleware";
import {
  queryValidationMiddleware,
  deleteProductQueryValidation,
} from "../middleware/deleteProductMiddleware";

const router = Router();

router.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);
router.post(
  "/admin/create-product",
  productValidationMiddleware(createProductValidation),
  createProduct
);
router.get("/admin/get-all-products", getAllProducts);
router.get("/admin/get-product/:id", getProduct);
router.put(
  "/admin/update-product",
  productValidationMiddleware(updateProductValidation),
  updateProduct
);
router.delete(
  "/admin/delete-product/:id",
  queryValidationMiddleware(deleteProductQueryValidation),
  deleteProduct
);

export default router;
