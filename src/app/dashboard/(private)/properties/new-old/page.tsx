"use client";

import { createContext, useContext, useState } from "react";

import AccessibilityContent from "@/components/property/new/contents/AccessibilityContent";
import { Button } from "@/components/ui/button";
import FeaturesContent from "@/components/property/new/contents/FeaturesContent";
import HeatingContent from "@/components/property/new/contents/HeatingContent";
import LocationContent from "@/components/property/new/contents/LocationContent";
import MediaContent from "@/components/property/new/contents/MediaContent";
import PriceContent from "@/components/property/new/contents/PriceContent";
import RoomsContent from "@/components/property/new/contents/RoomConent";
import TabController from "@/components/tabController";
import { z } from "zod";

// CREATE CONTEXT - STATE MANAGAMANET
export const newPropertyContext = createContext({
  category: -1,
  subcategory: -1,
});

export default function NewPropertyPage() {
  const [tabSelected, setTabSelected] = useState(0);
  const tabs = [
    "Locali",
    "Caratteristiche",
    "Riscaldamento",
    "Accessibilità",
    "Prezzo",
    "Media & planimetria",
    "Locazione",
    "Descrizione",
  ];
  const contentViews = [
    <RoomsContent />,
    <FeaturesContent />,
    <HeatingContent />,
    <AccessibilityContent />,
    <PriceContent />,
    <MediaContent />,
    <LocationContent />,
  ];
  const context = useContext(newPropertyContext);
  // const [formData, setFormData] = useFormState();
  const formSchema = z.object({});

  return (
    <div className="w-full h-full flex flex-col p-4 bg-white">
      {/* <NavBarNewProperty /> */}
      <TabController
        className="pt-0"
        tabs={tabs}
        selected={tabSelected}
        onTabChange={handleOnTabChange}
      />

      <form className="h-full w-full p-6">
        {
          // CONTENT VIEW
          contentViews[tabSelected]
        }
      </form>
      <footer className="row w-full h-fit items-center justify-center px-56 py-10 space-x-4 ">
        <Button
          className="flex-1 "
          variant={"outline"}
          onClick={() => {
            if (tabSelected != 0) {
              setTabSelected(tabSelected - 1);
            }
          }}
        >
          {tabSelected == 0 ? "Cancella" : "Indietro"}
        </Button>
        <Button
          className="flex-1"
          onClick={() => {
            if (tabSelected != contentViews.length) {
              setTabSelected(tabSelected + 1);
            }
          }}
        >
          {tabSelected != contentViews.length ? "Avanti" : "Crea"}
        </Button>
      </footer>
    </div>
  );

  // FUNCTIONS
  function handleOnTabChange(index: number) {
    setTabSelected(index);
  }
}
