"use server";

import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";

export const createStripeCheckout = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    subscription_data: {
      metadata: {
        clark_user_id: userId,
      },
    },
    line_items: [
      {
        price: process.env.STRIPE_PRO_PLAN_ID,
        quantity: 1,
      },
    ],
  });
  return { sessionId: session.id };
};
