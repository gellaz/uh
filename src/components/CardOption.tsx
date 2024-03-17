import { Card } from "./ui/card";
import { JsxElement } from "typescript";
import { ReactElement } from "react";
import { Zap } from "lucide-react";

interface CardOptionProps {
  item: string;
  color: string;
  icon: ReactElement;
}

export default function CardOption({ item, color, icon }: CardOptionProps) {
  const iconStyle = "flex items-center justify-center w-12 h-12 rounded-full ";

  return (
    <Card
      key={item}
      className="flex h-fit w-full cursor-pointer flex-col items-center justify-between space-y-2 p-2 shadow-none transition-all duration-150 ease-in-out hover:border-primary"
    >
      <div className={iconStyle + color}>{icon}</div>
      <p className="text-pretty">{item}</p>
    </Card>
  );
}
