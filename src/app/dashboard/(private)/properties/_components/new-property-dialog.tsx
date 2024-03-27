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
import { useRouter } from "next/navigation";

interface PropertyCategoryItem {
  name: string;
  icon: string;
  href: string;
}

const propertyCategoryItems: PropertyCategoryItem[] = [
  {
    name: "Residential",
    icon: "🏠",
    href: "/dashboard/properties/new/residential",
  },
  {
    name: "Building",
    icon: "🏢",
    href: "/dashboard/properties/new/building",
  },
  {
    name: "Garage",
    icon: "🚘",
    href: "/dashboard/properties/new/garage",
  },
  {
    name: "Land",
    icon: "🌳",
    href: "/dashboard/properties/new/land",
  },
  {
    name: "Parking Space",
    icon: "🅿️",
    href: "/dashboard/properties/new/parking-space",
  },
  {
    name: "Other",
    icon: "🏬",
    href: "/dashboard/properties/new/other",
  },
];

export default function NewPropertyDialog() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<
    number | undefined
  >(undefined);
  const router = useRouter();

  function categoryCardTapped(index: number) {
    if (index == selectedItemIndex) {
      setSelectedItemIndex(undefined);
      return;
    }
    setSelectedItemIndex(index);
  }

  function continueTapped() {
    if (selectedItemIndex !== undefined) {
      router.push(propertyCategoryItems[selectedItemIndex].href);
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
        <div className="grid h-fit gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {propertyCategoryItems.map((item, index) => {
            return (
              <Card
                key={index}
                onClick={() => categoryCardTapped(index)}
                className={`flex h-full w-full cursor-pointer flex-row items-center justify-start space-x-2 px-4 py-2 transition-all duration-150 ease-in-out ${
                  selectedItemIndex == index
                    ? "ring ring-primary"
                    : "hover:ring hover:ring-primary"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border`}
                >
                  <h4 className="text-2xl font-bold">{item.icon}</h4>
                </div>
                <p className=" font-semibold">{item.name}</p>
              </Card>
            );
          })}
        </div>
        <DialogFooter className="mt-4">
          <Button
            className="w-full"
            disabled={selectedItemIndex === null}
            onClick={() => continueTapped()}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
