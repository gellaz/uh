"use client";

import { FormStepProvider } from "@/context/FormStepContext";
import PropertyResidentialForm from "@/components/forms/PropertyResidentialForm";
import VerticalStepper from "@/components/dashboard/property/new/VerticalStepper";
import { formSteps } from "@/constants/newPropertyResidentialSteps";

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
        <div className="row w-full h-full space-x-4">
          <div className="col w-[24%]">
            <VerticalStepper />
          </div>
          {/* RIGHT SIDE */}
          <div className="col flex-1 border rounded p-4 overflow-auto">
            <PropertyResidentialForm />
          </div>
        </div>
      </FormStepProvider>
    </div>
  );
}
