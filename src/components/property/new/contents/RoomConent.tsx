import { Bath, Bed, BedDouble, Utensils } from "lucide-react";

import InputRow from "@/components/property/new/inputRow";

export default function RoomsPage() {
  const formStyle = "col w-full h-full space-y-4 items-center justify-center";
  const inputStyle = "w-1/6";
  const iconSize = 20;

  return (
    <form className={formStyle}>
      <InputRow
        className={inputStyle}
        icon={<Bath size={iconSize} />}
        title={"Bagni"}
        subtitle={"(usa i decimali per identificare un bagno senda la doccia)"}
        type={"number"}
        placeholder="0"
      />
      <InputRow
        className={inputStyle}
        icon={<BedDouble size={iconSize} />}
        title={"Camere"}
        type={"number"}
        placeholder="0"
      />
      <InputRow
        className={inputStyle}
        icon={<Utensils size={iconSize} />}
        title={"Cucina"}
        type={"number"}
        placeholder="0"
      />
    </form>
  );
}
