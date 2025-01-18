"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionsType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionsParams {
  name: string;
  amount: number;
  type: TransactionsType;
  category: TransactionsCategory;
  paymentMethod: TransactionsPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionsParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transactions.create({
    data: { ...params, userId },
  });
  revalidatePath("/transactions");
};
