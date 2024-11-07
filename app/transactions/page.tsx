import { ArrowDownUpIcon } from "lucide-react";

import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

import { db } from "../_lib/prisma";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowDownUpIcon className="ml-1" />
        </Button>
      </div>

      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}