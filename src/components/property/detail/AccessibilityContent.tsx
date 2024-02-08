import { Accessibility } from "@/types/properties";
import Row from "@/components/property/detail/row";
// import { MdOutlineElevator } from "react-icons/md";
import { Accessibility as Wheelchair } from "lucide-react";

export default function AccesibilityConent(accessibility: Accessibility) {
  const mainStyle = "flex flex-col h-full w-full p-4 items-center";
  const dataStyle = "flex flex-col w-[48%] space-y-4 overflow-scroll";
  const iconSize = 20;
  const icons = [
    <Wheelchair key={1} size={iconSize} />,
    <Wheelchair key={2} size={iconSize} />,
  ];
  const keys = accessibility != null ? Object.keys(accessibility) : [];
  const values = accessibility != null ? Object.values(accessibility) : [];
  const emptyValue = "No data available";

  // CAPITALIZED AND CLEAN STRING
  const textCleaning = (value: string) => {
    const cleanned = value.replaceAll("_", " ");
    const letter = cleanned.charAt(0).toUpperCase();
    const slice = cleanned.slice(1);
    return letter + slice;
  };

  return (
    <div className={mainStyle}>
      <div className={dataStyle}>
        {keys.map((item, i) => (
          <Row
            key={item}
            icon={icons[i]}
            title={textCleaning(item)}
            value={values[i] ?? emptyValue}
            emptyValue={emptyValue}
          />
        ))}
      </div>
    </div>
  );
}
