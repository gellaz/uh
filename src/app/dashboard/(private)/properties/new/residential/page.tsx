"use client";

import { ChevronRight } from "lucide-react";
import { FormStepProvider } from "@/context/FormStepContext";
import PropertyResidentialForm from "@/components/forms/PropertyResidentialForm";
import VerticalStepper from "@/components/dashboard/property/new/VerticalStepper";
import { formSteps } from "@/constants/newPropertyResidentialSteps";
import { useState } from "react";

export default function NewPropertyPage() {
  const [step, setStep] = useState(0);

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
        <div className="row w-full h-full space-x-4">
          <div className="col w-[24%]">
            <VerticalStepper />
          </div>
          {/* RIGHT SIDE */}
          <div className="col flex-1">
            <PropertyResidentialForm />
          </div>
        </div>
      </FormStepProvider>
    </div>
  );

  // METHODS
  function getStatus(item: any) {
    if (item.status === 1) return "Completed".toUpperCase();

    return "Pending".toUpperCase();
  }

  function getStatusColor(item: any) {
    switch (item.status) {
      case 0:
        return "text-green-600";
      case 1:
        return "text-red-600";
      default:
        return "text-black";
    }
  }
}
