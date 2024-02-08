import InputRow from "@/src/components/property/new/inputRow";

export default function PricePage() {
  const formStyle = "col w-full h-full space-y-4 items-center justify-center";
  const inputStyle = "w-1/3";
  const iconSize = 20;
  // const [formData, setFormData] = useState<PriceFormState>()

  return (
    <form className={formStyle}>
      <InputRow
        className={inputStyle}
        title={"Prezzo"}
        type={"number"}
        price_pattern={true}
      />
      <InputRow className={inputStyle} title={"Prezzo a mq"} type={"number"} />
      <InputRow
        className={inputStyle}
        title={"Spese condominiali"}
        type={"number"}
      />
      <InputRow className={"w-4"} title={"Prezzo REA"} type={"checkbox"} />
    </form>
  );
}
