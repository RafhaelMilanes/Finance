import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { TrendingDownIcon } from "lucide-react";

interface SumaryCardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SumaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SumaryCardProps) => {
  return (
    <Card className={`${size === "large" ? "bg-white bg-opacity-5" : ""}`}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p className="text-muted-foreground opacity-70">{title}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"} font-bold`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SumaryCard;
