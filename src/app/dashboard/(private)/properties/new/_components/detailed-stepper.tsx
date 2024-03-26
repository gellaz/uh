import React from "react";
import { useFormStep } from "@/context/FormStepContext";

export default function DetailedStepper() {
  const { steps, currentStepIndex, goToStep } = useFormStep();
  return (
    <ol className="w-full items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
      {steps.map((item, index) => {
        const isActive = index === currentStepIndex;

        return (
          <li
            key={item.title}
            onClick={() => goToStep(index)}
            className={`flex items-center space-x-2.5 ${
              isActive
                ? "text-primary dark:text-primary"
                : "text-gray-500 dark:text-gray-400"
            } rtl:space-x-reverse`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                isActive
                  ? "border-primary dark:border-primary"
                  : "border-gray-500 dark:border-gray-400"
              }`}
            >
              {index + 1}
            </span>
            <span>
              <p className="font-medium leading-tight">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
