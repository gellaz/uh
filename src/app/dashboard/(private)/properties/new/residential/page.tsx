"use client";

import { FormStepProvider } from "@/context/FormStepContext";
import NewPropertyResidentialForm from "./_components/NewPropertyResidentialForm";
import VerticalStepper from "@/app/dashboard/(private)/properties/new/_components/VerticalStepper";
import { formSteps } from "@/constants/newPropertyResidentialSteps";

export default function NewPropertyResidentialPage() {
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      <div>
        <h4>New residential property</h4>
        <p className="text-pretty">
          Please fill out the form below to add a new property
        </p>
      </div>
      <FormStepProvider steps={formSteps}>
        <div className="flex h-full w-full flex-row space-x-6">
          {/* LEFT SIDE */}
          <VerticalStepper className="flex h-full w-1/3 flex-col" />
          {/* RIGHT SIDE */}
          <NewPropertyResidentialForm />
        </div>
      </FormStepProvider>
    </div>
  );
}
