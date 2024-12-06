import { Router } from "express";
import bodyParser from "body-parser";
import { clerkWebhook } from "../../controllers/clerkWebhook";

const router = Router();

router.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);

export default router;
