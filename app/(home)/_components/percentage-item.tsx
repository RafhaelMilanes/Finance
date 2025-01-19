import { TrendingUpIcon } from "lucide-react";
import React from "react";

interface PercentageItemProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="ml-1 text-sm font-bold"> {value}%</p>
    </div>
  );
};

export default PercentageItem;