import BreadcrumbStepper from "@/components/BreadcrumbStepper";
import { FormStep, FormStepProvider } from "@/context/FormStepContext";
import PropertyResidentialForm from "@/components/forms/PropertyResidentialForm";
import React from "react";
import { formSteps } from "@/constants/newPropertyResidentialSteps";


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
          <PropertyResidentialForm residentialSubcategories={["A", "B"]} />
        </div>
      </FormStepProvider>
    </div>
  );
}
