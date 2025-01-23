import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currancy";
import { Transactions } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transactions[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getPriceColor = (transaction: Transactions) => {
    if (transaction.type === "DEPOSIT") {
      return "text-primary";
    }
    if (transaction.type === "INVESTMENT") {
      return "text-white";
    }
    return "text-red-500";
  };

  const getTypePrefix = (transction: Transactions) => {
    if (transction.type === "DEPOSIT") {
      return "+ ";
    }
    if (transction.type === "INVESTMENT") {
      return "";
    }
    if (transction.type === "EXPENSE") {
      return "- ";
    }
  };

  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas Transações</CardTitle>
        <Button variant="outline" className="rounded-full font-bold" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white bg-opacity-[5%] p-3">
                <Image
                  src={
                    TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]
                  }
                  height={20}
                  width={20}
                  alt="payment method"
                />
              </div>
              <div>
                <p className="text-sm font-bold"> {transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <p
              className={`mr-1 text-sm font-bold ${getPriceColor(transaction)}`}
            >
              {getTypePrefix(transaction)}
              {formatCurrency(Number(transaction.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default LastTransactions;
