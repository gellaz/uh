import { Bath, BedDouble, Ruler, Utensils } from "lucide-react";

import { Property } from "@/src/types/properties";
import Row from "@/src/components/property/detail/row";

export default function GeneralContent(property: Property) {
  const mainStyle =
    "flex flex-col h-[1000px] w-full overflow-hidden space-y-10 p-4";
  const gridStyle = "grid grid-cols-2 gap-10";
  const iconSize = 18;
  const keys = property != null ? Object.keys(property) : [];
  const values = property != null ? Object.values(property) : [];
  const keysLeft = keys.slice(3, 8);
  const valuesLeft = values.slice(3, 8);
  const iconsRight = [
    <Ruler key={1} size={iconSize} />,
    <BedDouble key={2} size={iconSize} />,
    <Bath key={3} size={iconSize} />,
    <Utensils key={4} size={iconSize} />,
  ];
  const keysRight = keys.slice(9, 13);
  const valuesRight = values.slice(9, 13);

  const emptyValue = "No data available";

  // CAPITALIZED AND CLEAN STRING
  const textCleaning = (value: string) => {
    const cleanned = value.replaceAll("_", " ");
    const letter = cleanned.charAt(0).toUpperCase();
    const slice = cleanned.slice(1);
    return letter + slice;
  };

  return (
    <main className={mainStyle}>
      <div className={gridStyle}>
        {/* LEFT SIDE */}
        <div className="flex-col space-y-4">
          {keysLeft.map((item, i) => {
            return (
              <Row
                key={i}
                title={textCleaning(item)}
                value={valuesLeft[i]?.toString() ?? emptyValue}
              />
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-col space-y-4">
          {keysRight.map((item, i) => {
            return (
              <Row
                key={i}
                icon={iconsRight[i]}
                title={textCleaning(item)}
                value={valuesRight[i]?.toString() ?? emptyValue}
                emptyValue={emptyValue}
              />
            );
          })}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col space-y-2 h-fit">
        <p className="text-sm text-medium opacity-50">Descrizione</p>
        <p className={property?.description == null ? "opacity-50" : ""}>
          {property?.description ?? emptyValue}
        </p>
      </div>
    </main>
  );
}
