import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

import { db } from "../_lib/prisma";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});
  const serializedTransactions = JSON.parse(JSON.stringify(transactions));

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>

      <DataTable columns={transactionColumns} data={serializedTransactions} />
    </div>
  );
}
