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
import Image from "next/image";

interface ResidentialPropertyCardProps {
  property: PropertyResidential;
}

export default function ResidentialPropertyCard({
  property,
}: ResidentialPropertyCardProps) {
  return (
    <Card key={property.id} className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={"/image1.jpg"}
          alt="image"
          width={28}
          height={28}
          className="h-28 w-full rounded-none"
          layout="cover"
          objectFit="cover"
        />
      </CardHeader>
      <CardContent className="space-y-3 p-4">
        <CardTitle className="text-xl font-black">
          {property.subcategory}
        </CardTitle>
        <div className="flex items-center gap-4">
          <CardDescription className="flex flex-wrap space-x-2">
            {`${property.street_name} ${property.street_number}, ${property.city} (${property.country})`}
          </CardDescription>
          <Icon icon="lucide:map-pinned" width={16} />
        </div>

        <section className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex space-x-2 px-2 py-1">
            <Icon icon="teenyicons:floorplan-outline" width={14} />
            <span>{property.rooms}</span>
          </Badge>
          <Badge variant="outline" className="flex space-x-2 px-2 py-1">
            <Icon icon="mdi:bathroom" width={14} />
            <span>{property.bathrooms}</span>
          </Badge>
          <Badge variant="outline" className="flex space-x-2 px-2 py-1">
            <Icon icon="tabler:tools-kitchen-2" width={14} />
            <span>{property.kitchens}</span>
          </Badge>
          <Badge variant="outline" className="flex space-x-2 px-2 py-1">
            <Icon icon="material-symbols:floor" width={14} />
            <span>{property.floor}</span>
          </Badge>
        </section>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4 ">
        <Button variant={"secondary"} className="flex gap-2">
          <Icon icon="lucide:edit-2" width={18} />
          <span>Edit</span>
        </Button>
        <Button variant={"destructive"} className="flex gap-2">
          <Icon icon="lucide:trash" width={18} />
          <span>Delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
