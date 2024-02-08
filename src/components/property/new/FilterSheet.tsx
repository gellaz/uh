"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { Filter } from "lucide-react";

export default function FilterSheet() {
  const triggerStyle =
    "flex w-9 h-9 p-2 rounded-md items-center justify-center hover:bg-primary hover:bg-primary/10 hover:text-primary";

  return (
    <Sheet>
      <SheetTrigger className={triggerStyle}>
        <Filter />
      </SheetTrigger>
      <SheetContent className="min-w-[544px]">
        <SheetHeader>
          <SheetTitle>Filtri</SheetTitle>
          <SheetDescription>
            Applica filtri per trovare la proprietà che fa per te e clicca su
            applica per salvare le modifiche
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
