import { db } from "@/app/_lib/prisma";
import { TransactionsType } from "@prisma/client";
import { TransactionsPercentagePerType } from "./types";

export const getDashboard = async (month: string) => {
  const where = {
    date: {
      gte: new Date(`2025-${month}-01`),
      lt: new Date(`2025-${month}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transactions.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transactions.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transactions.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  const transactionsTotal = Number(
    (
      await db.transactions.aggregate({
        where,
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const typesPercentages: TransactionsPercentagePerType = {
    [TransactionsType.DEPOSIT]: Math.round(
      (Number(depositsTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionsType.EXPENSE]: Math.round(
      (Number(expensesTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionsType.INVESTMENT]: Math.round(
      (Number(investmentsTotal || 0) / Number(transactionsTotal)) * 100,
    ),
  };
  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentages,
  };
};
