"use client"

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { PropertyCategorySchema } from "@/validation/property";
import { useRouter } from "next/navigation";


export default function DashboardPropertiesPage() {
  const router = useRouter();
  const [selection, setSelection] = useState<number>();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4>Properties</h4>
          <p className="text-pretty">Here you can view and manage your properties</p>
        </div>
        {
          buildCategoryOptions()
        }
      </div>
    </div>
  );

  // METHODS 
  function buildCategoryOptions() {

    const categoriesZod = Object.values(PropertyCategorySchema.Values);
    const emoji = ['🏠', '🏢', '🚘', '🌳', '🅿️', '🏬'];
    const cardStyle = "row p-4 items-center justify-start space-x-2 cursor-pointer transition-all duration-150 ease-in-out ";
    const emojiDivStyle = "flex items-center justify-center w-12 h-12 rounded-full ";

    return <Dialog>
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
          <DialogDescription>Choose the category that best describe your property</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2 h-fit">
          {
            categoriesZod.map((category, index) => {
              return <Card
                key={category}
                onClick={() => categoryCardTapped(index)}
                className={cardStyle + (selection === index ? "bg-orange-500 text-white" : "bg-white  hover:bg-orange-100")}
              >
                <div className={emojiDivStyle + (selection == index ? "bg-orange-300" : "bg-orange-100")}>
                  <h4>
                    {emoji[index]}
                  </h4>
                </div>
                <p>
                  {category}
                </p>
              </Card>
            })
          }
        </div>
        <DialogFooter className="mt-4">
          <Button className="w-full" disabled={selection === undefined} onClick={() => continueTapped()}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >

  }

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
    router.push("/dashboard/properties/new");
  }

}


