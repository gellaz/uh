import { ReactElement } from "react";

interface IllustrationCardProps {
  title: string;
  message: string;
  element?: ReactElement;
}
export default function IllustrationCard(prop: IllustrationCardProps) {
  return (
    <div className="border rounded-md p-4 flex flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <p className="text-base font-medium">{prop.title}</p>
        <p className="text-sm font-normal">{prop.message}</p>
      </div>
      {prop.element}
    </div>
  );
}
