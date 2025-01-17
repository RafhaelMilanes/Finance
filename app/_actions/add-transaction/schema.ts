import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionsType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  nome: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionsType),
  category: z.nativeEnum(TransactionsCategory),
  paymentMethod: z.nativeEnum(TransactionsPaymentMethod),
  date: z.date(),
});
