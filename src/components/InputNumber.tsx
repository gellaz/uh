"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InputNumberProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  minValue?: number;
  maxValue?: number;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ className, minValue, maxValue, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || 0);

    const handleIncrement = () => {
      setValue((prevValue) => {
        const numericValue = Number(prevValue);
        const newValue = numericValue + 1;
        return maxValue !== undefined ? Math.min(maxValue, newValue) : newValue;
      });
    };

    const handleDecrement = () => {
      setValue((prevValue) => {
        const numericValue = Number(prevValue);
        const newValue = numericValue - 1;
        return minValue !== undefined ? Math.max(minValue, newValue) : newValue;
      });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value: newValue } = e.target;
      const numericValue = Number(newValue);
      // Controlla se il valore è un numero e non è NaN
      if (!isNaN(numericValue)) {
        setValue(numericValue);
      } else {
        // Mantieni il valore precedente se il nuovo valore non è un numero
        setValue((prevValue) => prevValue);
      }
    };

    return (
      <div className={cn("relative inline-flex items-center", className)}>
        <button
          type="button"
          className="absolute left-0 z-10 h-full rounded-l-md bg-slate-300 p-2 text-gray-900 hover:bg-slate-200 dark:bg-gray-700 dark:text-white"
          onClick={handleDecrement}
        >
          {/* Decrement Icon */}
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 12h12"
            />
          </svg>
        </button>
        <Input
          ref={ref}
          type="text"
          value={value.toString()}
          className="text-center"
          onChange={handleChange}
          {...props}
        />
        <button
          type="button"
          className="absolute right-0 z-10 h-full rounded-r-md bg-slate-300 p-2 text-gray-900 hover:bg-slate-200 dark:bg-gray-700 dark:text-white"
          onClick={handleIncrement}
        >
          {/* Increment Icon */}
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
    );
  }
);

InputNumber.displayName = "InputNumber";

export { InputNumber };
