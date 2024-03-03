'use client'

import { formSteps } from "@/constants/newPropertyResidentialSteps";
import { ChevronRight } from "lucide-react";
import { useState } from "react";


export default async function NewPropertyPage() {
  const [step, setStep] = useState(0);
  
  const liStyle = "row px-2 py-4 h-fit justify-between items-center hover:bg-orange-50 border-b-[1px] ";
  const liStyleActive = "bg-white hover:bg-orange-50";

  return (
    <div className="col space-y-4">
      <div >
        <h4>New residential property</h4>
        <p className="text-pretty">
          Please fill out the form below to add a new property
        </p>
      </div>

      {/* LEFT SIDE */}
      <div className="row w-full h-full space-x-4">
        <div className="col w-[28%]">
          {/* <ol>
            {
              formSteps.map((item, index) => {
                return (
                  <li key={item.title}
                    onSelect={() => setStep(index)}
                    className={liStyle + (index === step ? liStyleActive : null)}>
                    <p className={(index === step ? "text-primary" : "text-black")}>{item.title}</p>
                    <div className="row w-fit space-x-1 opacity-50">
                      <p className={"text-xs font-medium" + getStatusColor(item)}>{getStatus(item)}</p>
                      <ChevronRight size={16} />
                    </div>
                  </li>
                )
              }
              )
            }
          </ol> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-yellow-100 col flex-1"></div>
      </div>
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
