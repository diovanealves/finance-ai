import { Badge } from "@/app/_components/ui/badge";
import { Transaction } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transactionType: Transaction;
}

export default function TransactionTypeBadge({
  transactionType,
}: TransactionTypeBadgeProps) {
  switch (transactionType.type) {
    case "DEPOSIT":
      return (
        <Badge className="bg-muted font-bold text-primary hover:bg-muted">
          <CircleIcon className="mr-2 fill-primary" size={10} />
          Depósito
        </Badge>
      );
    case "EXPENSE":
      return (
        <Badge className="bg-danger bg-opacity-10 font-bold text-danger">
          <CircleIcon className="mr-2 fill-danger" size={10} />
          Despesa
        </Badge>
      );
    default:
      return (
        <Badge className="bg-white bg-opacity-10 font-bold text-white">
          <CircleIcon className="mr-2 fill-white" size={10} />
          Investimento
        </Badge>
      );
  }
}
