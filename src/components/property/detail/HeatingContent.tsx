import { Heating } from "@/types/properties";
import Row from "@/components/property/detail/row";

export default function HeatingContent(heating: Heating) {
  const mainStyle = "flex flex-col h-full w-full p-4 items-center";
  const dataStyle = "flex flex-col w-[48%] space-y-4 overflow-scroll";
  const keys = heating != null ? Object.keys(heating) : [];
  const values = heating != null ? Object.values(heating) : [];
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
        {keys.map((item, i) => {
          return (
            <Row
              key={item}
              title={textCleaning(item)}
              value={values[i] ?? emptyValue}
              className="border-b-[0.4px] border-black"
              emptyValue={emptyValue}
            />
          );
        })}
      </div>
    </div>
  );
}
