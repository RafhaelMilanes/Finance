import { TransactionsCategory, TransactionsType } from "@prisma/client";

export type TransactionsPercentagePerType = {
  [key in TransactionsType]: number;
};

export interface TotoalExpenseCategory {
  category: TransactionsCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
