"use client";

import * as React from "react";

import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
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
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          className="absolute left-0 z-10 h-full rounded-l-md rounded-r-none p-2"
        >
          <MinusIcon className="h-4 w-4" />
        </Button>
        <Input
          ref={ref}
          type="text"
          value={value.toString()}
          className="text-center"
          onChange={handleChange}
          {...props}
        />
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          className="absolute right-0 z-10 h-full rounded-l-none rounded-r-md p-2"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    );
  }
);

InputNumber.displayName = "InputNumber";

export { InputNumber };
