import dotenv from "dotenv";
import { Request, Response } from "express";
import { Webhook } from "svix";

dotenv.config();

const secret = process.env.CLERK_WEBHOOK_SECRET;

if (!secret) {
  throw new Error("Invalid webhook secret");
}

export const clerkWebhook = async (req: Request, res: Response) => {
  try {
    const payloadString = req.body.toString();
    const svixHeaders: any = req.headers;

    const wh = new Webhook(secret);
    const evt: any = wh.verify(payloadString, svixHeaders);

    const { id, ...attributes } = evt.data;

    const eventType = evt.type;

    if (eventType === "user.created") {
      console.log(`User created: ${id} is ${eventType}`);
      console.log(attributes);
    }

    res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (error) {
    console.log(error);
  }
};
