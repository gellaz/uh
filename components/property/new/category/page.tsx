import React, { useContext, useState } from "react";

import { Input } from "@/components/ui/input";
import { newPropertyContext } from "../../../../app/(home)/properties/new/page";
import { propertyCategoryTypeItems } from "@/constast/propertyTypeItems";

export default function CategoryPage() {
  // STATE MANAGMENT
  const sharedContext = useContext(newPropertyContext);

  const columnStyle = "flex flex-col h-full w-1/2 space-y-4";
  const scrollColumnStyle =
    "flex flex-col w-full h-full space-y-2 overflow-scroll pr-1";
  const olStyle =
    "flex flex-row p-3 justify-between items-center border rounded-md hover:bg-slate-50 hover:border-black";
  const [categorySelection, setCategorySeltion] = useState<number>(1);
  const [typeSelection, setTypeSeltion] = useState<number>();
  const [typesLenght, setTypeLenght] = useState<number>(0);

  return (
    <div className="flex flex-row space-x-4 w-full h-[74%] p-4">
      {/* LEFT SIDE */}
      <div className={columnStyle}>
        <div>
          <p className="font-medium">Categoria</p>
          <p className="text-sm">
            Seleziona la categoria che più si addice al tuo immobile
          </p>
        </div>
        <Input className="p-4" placeholder="Cerca per categoria..." />
        <div className={scrollColumnStyle}>
          {propertyCategoryTypeItems.map((item, i) => (
            <ol
              key={i}
              className={olStyle}
              onClick={() => {
                setCategorySeltion(i);
                setTypeSeltion(undefined);
                sharedContext.category = i;
                sharedContext.subcategory = -1;
                setTypeLenght(
                  propertyCategoryTypeItems[i].types != null
                    ? propertyCategoryTypeItems[i].types!.length
                    : 0
                );
              }}
              onChange={() => {}}
            >
              <p>{item.category}</p>
              <input
                type="checkbox"
                checked={sharedContext.category == i ? true : false}
                onChange={() => {}}
                readOnly={true}
              />
            </ol>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={columnStyle}>
        <div>
          <p className="font-medium">Tipologia</p>
          <p className="text-sm">
            Seleziona la tipologia che più si addice al tuo immobile
          </p>
        </div>
        <Input className="p-4" placeholder="Cerca per tipologia..." />
        <div className={scrollColumnStyle}>
          {propertyCategoryTypeItems[categorySelection].types != null
            ? propertyCategoryTypeItems[categorySelection].types!.map(
                (item, i) => (
                  <ol
                    key={i}
                    className={olStyle}
                    onClick={() => {
                      setTypeSeltion(i);
                      sharedContext.subcategory = i;
                    }}
                  >
                    <p>{item.title}</p>
                    <input
                      type="checkbox"
                      checked={sharedContext.subcategory == i ? true : false}
                      onChange={() => {}}
                    />
                  </ol>
                )
              )
            : null}
        </div>
      </div>
    </div>
  );
}
