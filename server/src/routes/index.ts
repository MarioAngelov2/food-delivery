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
  productValidation,
} from "../middleware/productMiddleware";

const router = Router();

router.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);
router.post(
  "/admin/create-product",
  productValidationMiddleware(productValidation),
  createProduct
);
router.get("/admin/get-all-products", getAllProducts);
router.get("/admin/get-product/:id", getProduct);
router.put("/admin/update-product", updateProduct);
router.delete("/admin/delete-product/:id", deleteProduct);

export default router;
