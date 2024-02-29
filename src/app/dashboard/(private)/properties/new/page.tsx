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
    <div className="col space-y-6">
      <div>
        <h4>New property</h4>
        <p className="text-pretty">Please fill out the form below to add a new property</p>
      </div>
      <FormStepProvider steps={formSteps}>
        <div className="col space-y-6">
          <BreadcrumbStepper />
          <NewPropertyForm residentialSubcategories={["A", "B"]} />
        </div>
      </FormStepProvider>
    </div>
  );
}
