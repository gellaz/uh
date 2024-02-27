import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export default function DashboardPropertiesPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-3 px-4">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-3xl mb-2">Properties</h1>
        </div>
        <Button asChild>
          <Link href="/dashboard/properties/new">
            <Icon
              icon={"material-symbols:add"}
              height={20}
              width={20}
              className="mr-2"
            />
            Add Property
          </Link>
        </Button>
      </div>
    </div>
  );
}
