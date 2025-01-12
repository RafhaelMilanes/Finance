import { Badge } from "@/app/_components/ui/badge";
import { Transactions, TransactionsType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProp {
  transaction: Transactions;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProp) => {
  if (transaction.type === TransactionsType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 w-2 fill-primary" />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionsType.EXPENSE) {
    return (
      <Badge className="text-danger bg-danger hover:bg-opacity bg-opacity-10 font-bold">
        <CircleIcon className="fill-danger mr-2 w-2" />
        Despesa
      </Badge>
    );
  }
  if (transaction.type === TransactionsType.INVESTMENT) {
    return (
      <Badge className="font bold bg-opacity hover:bg-opacity bg-white bg-opacity-10 text-white">
        <CircleIcon className="mr-2 w-2 fill-white" />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;
