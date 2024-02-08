import { ChevronRight } from "lucide-react";
import { Property } from "@/types/properties";

interface DashboardPropertyProps {
  property: Property;
}

export default function DashboardProperty(props: DashboardPropertyProps) {
  return (
    <ol className="flex flex-row items-center justify-between space-x-2 px-4 py-3 hover:bg-slate-50">
      <div className="w-8 h-8 rounded-full bg-primary/10" />
      <p className="w-[28%] text-sm font-medium">Property Name</p>
      <p className="flex-1 text-sm">
        {props.property.street_name + " " + props.property.street_number}
      </p>
      <p className="w-[24%] text-sm">{props.property.city}</p>
      <ChevronRight color="gray" />
    </ol>
  );
}
