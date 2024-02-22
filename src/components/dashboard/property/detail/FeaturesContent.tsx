import { Flame, ParkingSquare, Trees } from "lucide-react";

import { Features } from "@/types/properties";
import Row from "@/components/dashboard/property/detail/row";

export default function FeaturesContent(features: Features) {
  const mainStyle = "flex flex-col h-full w-full p-4 items-center";
  const dataStyle = "flex flex-col w-[48%] space-y-4 overflow-scroll";
  const emptyValue = "No data available";
  const iconSize = 20;
  const icons = [
    <Trees key={1} size={iconSize} color="white" />,
    <Trees key={2} size={iconSize} />,
    <ParkingSquare key={3} size={iconSize} />,
    <Flame key={4} size={iconSize} color={"white"} />,
  ];
  const keys = features != null ? Object.keys(features) : [];
  const values = features != null ? Object.values(features) : [];

  // CAPITALIZED AND CLEAN STRING
  const textCleaning = (value: string) => {
    const cleanned = value.replaceAll("_", " ");
    const letter = cleanned.charAt(0).toUpperCase();
    const slice = cleanned.slice(1);
    return letter + slice;
  };

  return (
    <main className={mainStyle}>
      <div className={dataStyle}>
        {keys.map((item, i) => {
          return (
            <Row
              key={item}
              icon={icons[i]}
              title={textCleaning(item)}
              value={values[i] ?? emptyValue}
              emptyValue={emptyValue}
            />
          );
        })}
      </div>
    </main>
  );
}
