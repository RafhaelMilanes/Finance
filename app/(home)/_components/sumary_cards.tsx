import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumaryCard from "./sumary_card";
import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SummaryCards) => {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}

      <SumaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SumaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentsTotal}
        />
        <SumaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SumaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;