import dotenv from "dotenv";
import { Request, Response } from "express";
import { Webhook } from "svix";
import { UserModel } from "../models/user.model";

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
      const firstName = attributes.first_name;
      const lastName = attributes.last_name;

      const user = new UserModel({
        clerkUserId: id,
        firstName: firstName,
        lastName: lastName,
      });

      await user.save();
      console.log("User is created");
    }

    res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (error) {
    console.log(error);
  }
};
