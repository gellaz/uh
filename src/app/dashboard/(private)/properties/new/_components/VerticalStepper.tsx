"use client";

import { AlertTriangle, Check, ChevronRight } from "lucide-react";
import React from "react";
import { FormStepperStatusEnum, useFormStep } from "@/context/FormStepContext";

export default function VerticalStepper({ className = "" }) {
  const { steps, currentStepIndex, goToStep } = useFormStep();
  const liStyle =
    "row px-2 py-4 h-fit justify-between items-center hover:bg-orange-50 hover:cursor-pointer border-b-[1px] ";
  const liStyleActive = "bg-white hover:bg-orange-50";
  const getStatusColor = (status: FormStepperStatusEnum) => {
    switch (status) {
      case FormStepperStatusEnum.PENDING:
        return <ChevronRight size={16} color="gray" />;
      case FormStepperStatusEnum.ACTIVE:
        return <ChevronRight className="text-primary" size={16} />;
      case FormStepperStatusEnum.COMPLETED:
        return <Check size={18} color="green" />;
      case FormStepperStatusEnum.ERROR:
        return <AlertTriangle size={18} color="red" />;
      default:
        return <ChevronRight size={16} color="gray" />;
    }
  };

  return (
    <ol className={className}>
      {steps.map((item, index) => {
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
      })}
    </ol>
  );
}
