"use client";

import { FormStepProvider, useFormStep } from "@/context/FormStepContext";
import PropertyResidentialForm from "@/components/forms/PropertyResidentialForm";
import VerticalStepper from "@/components/dashboard/property/new/VerticalStepper";

export const formSteps = [
  {
    title: "Subcategory",
    status: 0,
  },
  {
    title: "Composition",
    status: 0,
  },
  {
    title: "Location",
    status: 0,
  },
  {
    title: "Heating and AC",
    status: 0,
  },
  {
    title: "Energy certification",
    status: 0,
  },
  {
    title: "Amenities",
    status: 0,
  },
  {
    title: "Features",
    status: 0,
  },
  {
    title: "Cadastral",
    status: 0,
  },
  {
    title: "Media",
    status: 0,
  },
];

export default function NewPropertyPage() {
  return (
    <div className="col space-y-4">
      <div>
        <h4>New residential property</h4>
        <p className="text-pretty">
          Please fill out the form below to add a new property
        </p>
      </div>
      <FormStepProvider steps={formSteps}>
        {/* LEFT SIDE */}
<<<<<<< Updated upstream
        <div className="row w-full h-full space-x-4">
          <div className="col w-1/4">
            <VerticalStepper />
          </div>
=======
        <div className="row w-full h-full space-x-6">
          <VerticalStepper className="col w-[32%] bg-yellow-100" />

>>>>>>> Stashed changes
          {/* RIGHT SIDE */}
          <PropertyResidentialForm />
        </div>
      </FormStepProvider>
    </div>
  );
}
