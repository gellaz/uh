import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BreadcrumbStepper from "@/components/BreadcrumbStepper";
import { FormStepProvider } from "@/context/FormStepContext";
import NewPropertyForm from "@/components/property/new/NewPropertyForm";
import { fetchPropertyCategories } from "@/actions/property";

const formSteps = [
  {
    title: "General Info",
    description: "Property general information",
  },
  {
    title: "Features",
    description: "Property features and amenities",
  },
  {
    title: "Additional Info",
    description: "Additional property details",
  },
];

export default async function NewPropertyPage() {
  const propertyCategories = await fetchPropertyCategories();
  // Get all residential property categories
  const residentialSubcategories = propertyCategories
    .filter((item) => item.category === "Residential")
    .map((item) => item.subcategory);

  return (
    <FormStepProvider steps={formSteps}>
      <div className="p-4 flex flex-col space-y-4">
        <BreadcrumbStepper />
        <Card className="w-30">
          <CardContent className="p-8 h-fit">
            <NewPropertyForm
              residentialSubcategories={residentialSubcategories}
            />
          </CardContent>
        </Card>
      </div>
    </FormStepProvider>
  );
}
