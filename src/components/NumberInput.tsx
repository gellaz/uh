import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function NumberInput() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <div className="relative flex items-center max-w-[8rem]">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-l-lg rounded-r-none h-11 bg-slate-200 hover:bg-slate-200/80"
          onClick={decrement}
        >
          <MinusIcon size={20} className="m-2" />
        </Button>
        <Input
          type="text"
          className="h-11 text-center focus-visible:ring-0 rounded-r-none rounded-l-none focus-visible:border-primary"
          required
          value={value}
          readOnly
        />
        <Button
          variant="secondary"
          size="icon"
          className="rounded-r-lg rounded-l-none h-11 bg-slate-200 hover:bg-slate-200/80"
          onClick={increment}
        >
          <PlusIcon size={20} className="m-2" />
        </Button>
      </div>
    </>
  );
}
