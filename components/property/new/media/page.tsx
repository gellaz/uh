import React, { useContext } from "react";

import UploadMediaDiv from "@/components/uploadMediaDiv";
import { newPropertyContext } from "../../../../app/(home)/properties/new/page";
import { propertyCategoryTypeItems } from "@/constast/propertyTypeItems";

export default function MediaPage() {
  const sharedContext = useContext(newPropertyContext);
  const media =
    sharedContext.category != null
      ? propertyCategoryTypeItems[sharedContext.category]?.media
      : null;
  const pictures = media != null ? media[0] : null;

  return (
    <div className="w-full h-full flex flex-col space-y-10">
      {/* PICTURE DIV */}
      <div className="flex flex-col space-y-1 ">
        <p className="text-sm">Foto</p>
        <div className="grid grid-cols-4 gap-2 overflow-scroll">
          {Array.from({ length: 12 }, (_, index) => {
            return (
              <button
                key={index}
                className="flex flex-col h-[100px] w-full p-2 items-center justify-center border rounded-sm text-sm font-medium space-y-1  hover:border-black"
              >
                <p>{`Foto ${index + 1}`}</p>
                <p className="text-xs font-normal ">Carica immagine</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* VIDEO DIV */}
      <div className="flex flex-col space-y-1">
        <p className="text-sm">Video</p>
        <div className="grid grid-cols-4 gap-2 overflow-scroll">
          {Array.from({ length: 4 }, (_, index) => (
            <UploadMediaDiv key={index} type={1} index={index} />
          ))}
        </div>
      </div>

      {/* TEST DIV */}
      <div className="flex flex-col space-y-1">
        <p className="text-sm">Test</p>
        <div className="grid grid-cols-4 gap-2 overflow-scroll">
          {Array.from({ length: 4 }, (_, index) => (
            <UploadMediaDiv key={index} type={1} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
