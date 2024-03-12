"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export enum FormStepperStatusEnum {
  PENDING,
  ACTIVE,
  COMPLETED,
  ERROR,
}

export interface FormStep {
  id: string;
  title: string;
  description?: string;
  status: FormStepperStatusEnum;
}

const FormStepContext = createContext({
  currentStepId: "",
  currentStepIndex: 0,
  setCurrentStepId: (id: string) => {},
  setCurrentStepIndex: (index: number) => {},
  goToStep: (index: number) => {},
  nextStep: () => {},
  prevStep: () => {},
  steps: [] as FormStep[],
  totalSteps: 0,
});

export function FormStepProvider({
  children,
  steps,
}: {
  children: ReactNode;
  steps: FormStep[];
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentStepId, setCurrentStepId] = useState(steps[0]?.id || "");
  const totalSteps = steps.length;

  const nextStep = () =>
    setCurrentStepIndex((prev) => Math.min(prev + 1, totalSteps - 1));
  const prevStep = () => setCurrentStepIndex((prev) => Math.max(prev - 1, 0));

  const goToStep = useCallback(
    (index: number) => {
      const targetStepIndex = Math.min(Math.max(index, 0), totalSteps - 1); // Clamp the value between 0 and totalSteps - 1
      const previousStatus = steps[index].status;
      setCurrentStepIndex(targetStepIndex);
      setCurrentStepId(steps[targetStepIndex].id);

      // TO-DO:
      // here we should change the target step status to ACTIVE and update the previous step status to its previous status
      steps[targetStepIndex].status = FormStepperStatusEnum.ACTIVE;
      steps[index].status = previousStatus;
    },
    [steps, totalSteps]
  );

  return (
    <FormStepContext.Provider
      value={{
        currentStepId,
        currentStepIndex,
        setCurrentStepId,
        setCurrentStepIndex,
        goToStep,
        nextStep,
        prevStep,
        steps,
        totalSteps,
      }}
    >
      {children}
    </FormStepContext.Provider>
  );
}
export const useFormStep = () => {
  const context = useContext(FormStepContext);
  if (context === undefined) {
    throw new Error("useFormStep must be used within a FormStepProvider");
  }

  const {
    currentStepId,
    currentStepIndex,
    steps,
    setCurrentStepId,
    setCurrentStepIndex,
    goToStep,
    nextStep,
    prevStep,
    totalSteps,
  } = context;

  const currentStep = steps[currentStepIndex];

  // Return the corrected object without using ...rest
  return {
    currentStep,
    currentStepId,
    currentStepIndex,
    steps,
    setCurrentStepId,
    setCurrentStepIndex,
    goToStep,
    nextStep,
    prevStep,
    totalSteps,
  };
};
