import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import NewPropertyCategoryDialog from "./new/_components/NewPropertyCategoryDialog";
import { getProperties } from "@/actions/property";

export default async function DashboardPropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h4>Properties</h4>
          <p className="text-pretty">
            Here you can view and manage your properties
          </p>
        </div>
        <NewPropertyCategoryDialog />
      </div>
      <div className="grid gap-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="">
            <CardHeader className="p-4">
              <div className="w-full bg-secondary"></div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>{property.subcategory}</CardTitle>
              <CardDescription className="flex flex-wrap space-x-2">
                <Badge variant="secondary" className="flex space-x-2">
                  <Icon icon="teenyicons:floorplan-outline" width={18} />
                  <span>{property.rooms}</span>
                </Badge>
                <Badge variant="secondary" className="flex space-x-2">
                  <Icon icon="mdi:bathroom" width={18} />
                  <span>{property.bathrooms}</span>
                </Badge>
                <Badge variant="secondary" className="flex space-x-2">
                  <Icon icon="tabler:tools-kitchen-2" width={18} />
                  <span>{property.kitchens}</span>
                </Badge>
                <Badge variant="secondary" className="flex space-x-2">
                  <Icon icon="material-symbols:floor" width={18} />
                  <span>{property.floor}</span>
                </Badge>
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full">View</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
