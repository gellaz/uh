"use client";

import React from "react";
import { useFormStep } from "@/context/FormStepContext";

export default function BreadcrumbStepper() {
  const { steps, currentStepIndex, goToStep } = useFormStep();

  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex items-center ${
            currentStepIndex === index
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-500"
          } cursor-pointer`}
          onClick={() => goToStep(index)}
        >
          <span
            className={`flex items-center justify-center w-6 h-6 me-2 text-xs border rounded-full shrink-0 ${
              currentStepIndex === index
                ? "border-blue-600 dark:border-blue-500"
                : "border-gray-500 dark:border-gray-400"
            }`}
          >
            {index + 1}
          </span>
          <div className="flex flex-col items-start ml-2">
            <p className="text-md font-semibold">{step.title}</p>
            <p className="text-xs">{step.description}</p>
          </div>

          {index < steps.length - 1 && (
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}
