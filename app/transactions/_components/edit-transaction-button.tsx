"use client";

import { Button } from "@/app/_components/ui/button";
import UpserTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transactions } from "@prisma/client";
import { PencilIcon } from "lucide-react";

import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transactions;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setDialogIsOpen(true)}>
        <PencilIcon size="icon" className="text-muted-foreground" />
      </Button>
      <UpserTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  );
};
export default EditTransactionButton;
