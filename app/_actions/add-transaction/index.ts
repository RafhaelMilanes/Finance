"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionsType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionsParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionsType;
  category: TransactionsCategory;
  paymentMethod: TransactionsPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: AddTransactionsParams) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transactions.upsert({
    update: {
      ...params,
      userId,
    },
    create: {
      ...params,
      userId,
    },
    where: {
      id: params?.id ?? "",
    },
  });
  revalidatePath("/transactions");
};
