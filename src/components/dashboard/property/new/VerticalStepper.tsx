"use client";

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

export default function VerticalStepper() {
  const { steps, currentStepIndex, goToStep } = useFormStep();

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
    </ol>
  );
}
