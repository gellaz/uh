import { Input } from "@/src/components/ui/input";
import { ReactElement } from "react";
import { title } from "process";

interface props {
  className?: string;
  icon?: ReactElement;
  title: string;
  subtitle?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  price_pattern?: boolean;
  onChange?: () => {};
}

export default function InputRow(props: props) {
  const rowStyle =
    "flex flex-row w-2/4 items-center space-x-4 justify-between border-b-[0.4px] border-black py-4";
  const innerRowStyle = "flex flex-row items-center space-x-2";
  const pricePattern = "€ d{3}.d{3},d{2}";

  // FUNCTIONS
  function validateInput(input: EventTarget & HTMLInputElement) {
    const pattern = new RegExp("€ d{3}.d{3},d{2}");
    if (!pattern.test(input.value)) {
      alert("Invalid input. Please enter price in format: € xxx.xxx,xx");
      input.focus();
    }
  }

  return (
    <div className={rowStyle}>
      <div className={innerRowStyle}>
        {props.icon ?? null}
        <p>{props.title}</p>
        {props.subtitle ? (
          <p className="text-sm opacity-50">{props.subtitle}</p>
        ) : null}
      </div>
      <Input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        pattern={props.price_pattern ? pricePattern : undefined}
        // onChange={(event) => validateInput(event.target)}
      />
    </div>
  );
}
