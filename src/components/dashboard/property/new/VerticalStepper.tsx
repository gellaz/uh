"use client"

import { useFormStep } from '@/context/FormStepContext';
import { ChevronRight } from 'lucide-react';
import React from 'react'

enum VerticalStepperItemStatus {
    PENDING,
    COMPLETED,
    ERROR,
}

interface VerticalStepperItem {
    title: string;
    status: VerticalStepperItemStatus;
}


export default function VerticalStepper() {
    const { steps, currentStepIndex, goToStep } = useFormStep();
    const liStyle = "row px-2 py-4 h-fit justify-between items-center hover:bg-orange-50 border-b-[1px] ";
    const liStyleActive = "bg-white hover:bg-orange-50";

    return (
        <ol>
            {
                steps.map((item, index) => {
                    const isActive = index === currentStepIndex;
                    console.log("currentStepIndex", currentStepIndex);

                    return (
                        <li key={item.title}
                            onClick={() => goToStep(index)}
                            className={liStyle + (isActive ? liStyleActive : null)}>
                            <p className={(isActive ? "text-primary" : "text-black")}>
                                {item.title}</p>
                            <div className="row w-fit space-x-1 opacity-50">
                                <p className={"text-xs font-medium"}>
                                    {/* //+ getStatusColor(item) */}
                                    {item.description}
                                </p>
                                <ChevronRight size={16} />
                            </div>
                        </li>
                    )
                }
                )
            }
        </ol>
    )
}
