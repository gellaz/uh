import { Price } from "@/types/properties";
import Row from "@/components/property/detail/row";

export default function PriceContent(price: Price) {
  const mainStyle = "flex flex-col h-full w-full overflow-hidden p-4";
  const gridStyle = "grid grid-cols-2 gap-10 h-full w-full";
  const keys = price != null ? Object.keys(price) : [];
  const values = price != null ? Object.values(price) : [];
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
        <h1
          className={
            "flex flex-col space-y-1 items-center justify-center h-1/4 bg-primary/5 rounded-lg " +
            (price?.price == undefined ? "opacity-50" : "")
          }
        >
          {price?.price ? `€ ${price.price}` : emptyValue}
        </h1>

        {/* RIGHT SIDE */}
        <div className="flex flex-col space-y-4">
          {keys.map((item, i) => (
            <Row
              key={i}
              title={textCleaning(item)}
              value={values[i] != null ? values[i].toString() : emptyValue}
              emptyValue={emptyValue}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
