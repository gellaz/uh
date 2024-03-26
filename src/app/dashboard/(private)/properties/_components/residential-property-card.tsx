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
        <CardTitle>{property.subcategory}</CardTitle>
        <CardDescription className="flex flex-wrap space-x-2">
          {property.street_name + property.street_number + ", " + property.city}
        </CardDescription>
        <section className="flex space-x-2">
          <Badge variant="secondary" className="flex space-x-2 px-2 py-1">
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
        </section>
      </CardContent>
      <CardFooter className="space-x-2 p-4">
        <Button asChild className="w-full">
          <section>
            <Icon icon={"ph:megaphone-bold"} width={16} className="mr-2" />
            {"Promote"}
          </section>
        </Button>
        <Button asChild variant={"outline"} className="w-1/4">
          <Icon icon="mdi:heart-outline" width={18} />
        </Button>
      </CardFooter>
    </Card>
  );
}
