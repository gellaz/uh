import NewPropertyForm from "@/components/property/new/NewPropertyForm";
import { fetchPropertyCategories } from "@/actions/property";

export default async function NewPropertyPage() {
  const propertyCategories = await fetchPropertyCategories();
  // Get all residential property categories
  const residentialSubcategories = propertyCategories
    .filter((item) => item.category === "Residential")
    .map((item) => item.subcategory);

  return (
    <NewPropertyForm residentialSubcategories={residentialSubcategories} />
  );
}
