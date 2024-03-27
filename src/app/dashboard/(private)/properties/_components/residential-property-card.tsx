"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Image from "next/image";
import { deletePropertyResidential } from "@/actions/property";
import { toast } from "sonner";

interface ResidentialPropertyCardProps {
  property: PropertyResidential;
}

export default function ResidentialPropertyCard({
  property,
}: ResidentialPropertyCardProps) {
  const handleDelete = async (id: string) => {
    toast.promise(deletePropertyResidential(id), {
      loading: "Loading...",
      success: (data) => {
        return "Property deleted successfully";
      },
      error: "Error creating residential property",
    });
  };

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
        <CardDescription className="flex flex-wrap space-x-2 text-xs">
          {`${property.street_name} ${property.street_number}, ${property.city} (${property.country})`}
        </CardDescription>
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
        <AlertDialog>
          <AlertDialogTrigger
            className={buttonVariants({ variant: "destructive" })}
          >
            <div className="flex gap-2">
              <Icon icon="lucide:trash" width={18} className="mr-2" />
              <span>Delete</span>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "destructive" })}
                onClick={async () => {
                  await handleDelete(property.id);
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
