import { Router } from "express";
import bodyParser from "body-parser";
import { clerkWebhook } from "../controllers/clerkWebhook";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProduct,
} from "../controllers/adminController";

const router = Router();

router.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);
router.post("/admin/create-product", createProduct);
router.get("/admin/get-all-products", getAllProducts);
router.get("/admin/get-product/:id", getProduct);
router.put("/admin/update-product", updateProduct);

export default router;
