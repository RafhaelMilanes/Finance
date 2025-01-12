import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  // acessar as transaçoes do bando de dados
  const transactions = await db.transactions.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TITULO E BOTAO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transaçães</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
