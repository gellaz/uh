import BreadcrumbStepper from "@/components/BreadcrumbStepper";
import { FormStepProvider } from "@/context/FormStepContext";
import NewPropertyForm from "@/components/dashboard/property/new/NewPropertyForm";
import React from "react";

const formSteps = [
  {
    title: "General Info",
  },
  {
    title: "Location",
  },
  {
    title: "Features",
  },
  {
    title: "Additional Info",
  },
  {
    title: "Media",
  },
];

export default function NewPropertyPage() {
  return (
    <FormStepProvider steps={formSteps}>
      <div className="flex flex-col">
        <BreadcrumbStepper />
        <NewPropertyForm residentialSubcategories={["A", "B"]} />
      </div>
    </FormStepProvider>
  );
}
