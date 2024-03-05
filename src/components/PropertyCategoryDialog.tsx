"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify-icon/react";
import { propertyCategorySchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

export default function PropertyCategoryDialog() {
  const categoriesZod = Object.values(propertyCategorySchema.Values);
  const emoji = ["🏠", "🏢", "🚘", "🌳", "🅿️", "🏬"];
  const cardStyle =
    "row px-4 py-2 items-center justify-start space-x-2 cursor-pointer transition-all duration-150 ease-in-out ";
  const emojiDivStyle =
    "flex items-center justify-center w-12 h-12 rounded-full ";
  const [selection, setSelection] = useState<number>();
  const router = useRouter();

  function categoryCardTapped(index: number) {
    console.log("category card tapped");

    if (index == selection) {
      setSelection(undefined);
      return;
    }

    setSelection(index);
  }

  function continueTapped() {
    console.log("continue tapped");

    switch (selection) {
      case 0:
        router.push("/dashboard/properties/new/residential");
        break;
      case 1:
        router.push("/dashboard/properties/new/building");
        break;
      case 2:
        router.push("/dashboard/properties/new/garage");
        break;
      case 3:
        router.push("/dashboard/properties/new/land");
        break;
      case 4:
        router.push("/dashboard/properties/new/parking-space");
        break;
      default:
        break;
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icon
            icon={"material-symbols:add"}
            height={20}
            width={20}
            className="mr-2"
          />
          Add property
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[48%]">
        <DialogHeader className="mb-4">
          <DialogTitle>New property category</DialogTitle>
          <DialogDescription>
            Choose the category that best describe your property
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2 h-fit">
          {categoriesZod.map((category, index) => {
            return (
              <Card
                key={category}
                onClick={() => categoryCardTapped(index)}
                className={
                  cardStyle +
                  (selection === index
                    ? "bg-orange-500 text-white"
                    : "bg-white  hover:bg-orange-100")
                }
              >
                <div
                  className={
                    emojiDivStyle +
                    (selection == index ? "bg-orange-300" : "bg-orange-100")
                  }
                >
                  <h4>{emoji[index]}</h4>
                </div>
                <p>{category}</p>
              </Card>
            );
          })}
        </div>
        <DialogFooter className="mt-4">
          <Button
            className="w-full"
            disabled={selection === undefined}
            onClick={() => continueTapped()}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
