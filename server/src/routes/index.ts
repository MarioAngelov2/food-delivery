import { Router } from "express";
import adminRouter from "./admin";
import webhookRouter from "./webhooks";

const router = Router();

router.use("/admin", adminRouter);
router.use(webhookRouter);

export default router;
