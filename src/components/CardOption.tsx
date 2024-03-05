import { Zap } from "lucide-react";
import { Card } from "./ui/card";
import { JsxElement } from "typescript";
import { ReactElement } from "react";

interface CardOptionProps {
    item: string;
    color: string;
    icon: ReactElement;
}

export default function CardOption({ item, color, icon }: CardOptionProps) {
    const iconStyle = "flex items-center justify-center w-12 h-12 rounded-full ";


    return (<Card
        key={item}
        className="col w-full h-fit p-2 items-center space-y-2 justify-between cursor-pointer transition-all duration-150 ease-in-out shadow-none hover:border-primary"
    >
        <div
            className={iconStyle + color}>
            {icon}
        </div>
        <p className="text-pretty">{item}</p>
    </Card >);
}