"use client"

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card";


export default function DashboardPropertiesPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4>Properties</h4>
          <p className="text-pretty">Here you can view and manage your properties</p>
        </div>
        {
          buildCategoryOptions()
        }
        {/* <Button asChild>
          <Link href="/dashboard/properties/new">
            <Icon
              icon={"material-symbols:add"}
              height={20}
              width={20}
              className="mr-2"
            />
            Add Property
          </Link>
        </Button> */}
      </div>
    </div>
  );
}


// METHODS 

function buildCategoryOptions() {
  return <Dialog>
    <DialogTrigger asChild>
      <Button>
        <Icon
          icon={"material-symbols:add"}
          height={20}
          width={20}
          className="mr-2"
        />
        Add property
      </Button>
    </DialogTrigger>
    <DialogContent className="min-w-[48%]">
      <DialogHeader className="mb-4">
        <DialogTitle>New property category</DialogTitle>
        <DialogDescription>Choose the category that best describe your property</DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-3 gap-2 h-fit">
        {
          ["Apartment", "House", "Land", "Commercial", "Industrial", "Office", "Retail", "Other"].map((category) => {
            return <Card key={category} className="w-full h-[80px] p-4 hover:bg-orange-100">
              {category}
            </Card>
          })
        }
      </div>
      <DialogFooter className="mt-4">
        <Button className="w-full">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

}