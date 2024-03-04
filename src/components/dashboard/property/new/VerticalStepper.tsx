"use client";

<<<<<<< Updated upstream
import { FormStep, useFormStep } from "@/context/FormStepContext";

import { ChevronRight } from "lucide-react";
import React from "react";
import { Separator } from "@radix-ui/react-separator";

interface ListItemProps {
  item: FormStep;
  index: number;
  isActive: boolean;
  goToStep: (index: number) => void;
}

function ListItem({ item, index, isActive, goToStep }: ListItemProps) {
  return (
    <li
      key={item.title}
      onClick={() => goToStep(index)}
      className={`row px-4 py-4 h-fit justify-between items-center hover:bg-primary/10 hover:cursor-pointer border-b-[1px] rounded-lg shadow-md ${
        isActive && "bg-white ring-2 ring-primary"
      }`}
    >
      <div className="flex items-center">
        <span
          className={`mr-2 font-bold text-md text-black rounded-full w-8 h-8 flex items-center justify-center border ${
            isActive && "border-primary"
          }`}
        >
          {index + 1}
        </span>
        <Separator orientation="vertical" />
        <p
          className={isActive ? "font-semibold text-primary" : "text-slate-400"}
        >
          {item.title}
        </p>
      </div>
      <div className="row w-fit space-x-1 opacity-50">
        <p className={"text-xs font-medium"}>{item.description}</p>
        <ChevronRight size={16} />
      </div>
    </li>
  );
}
=======
import { AlertTriangle, Check, ChevronRight } from "lucide-react";
import React from "react";
import { FormStepperStatusEnum, useFormStep } from "@/context/FormStepContext";

>>>>>>> Stashed changes

export default function VerticalStepper({ className = "" }) {
  const { steps, currentStepIndex, goToStep } = useFormStep();
<<<<<<< Updated upstream

  return (
    <ol className="space-y-2">
      {steps.map((item, index) => {
        const isActive = index === currentStepIndex;
        return (
          <ListItem
            item={item}
            index={index}
            isActive={isActive}
            goToStep={goToStep}
          />
        );
      })}
=======
  const liStyle =
    "row px-2 py-4 h-fit justify-between items-center hover:bg-orange-50 hover:cursor-pointer border-b-[1px] ";
  const liStyleActive = "bg-white hover:bg-orange-50";
  const getStatusColor = (status: FormStepperStatusEnum) => {
    switch (status) {
      case FormStepperStatusEnum.PENDING:
        return <ChevronRight size={16} color="gray" />
      case FormStepperStatusEnum.ACTIVE:
        return <ChevronRight className="text-primary" size={16} />
      case FormStepperStatusEnum.COMPLETED:
        return <Check size={18} color="green" />
      case FormStepperStatusEnum.ERROR:
        return <AlertTriangle size={18} color="red" />
      default:
        return <ChevronRight size={16} color="gray" />

    }
  };

  return (
    <ol className={className}>
      {
        steps.map((item, index) => {
          const isActive = index === currentStepIndex;
          console.log("currentStepIndex", currentStepIndex);

          return (
            <li
              key={item.title}
              onClick={() => goToStep(index)}
              className={liStyle + (isActive ? liStyleActive : null)}
            >
              <p className={isActive ? "text-primary" : "text-black"}>
                {item.title}
              </p>
              <div className="row w-fit space-x-1">
                {getStatusColor(item.status)}
              </div>
            </li>
          );
        })
      }
>>>>>>> Stashed changes
    </ol>
  );
}
