import NewPropertyDialog from "./_components/new-property-dialog";
import ResidentialPropertyCard from "./_components/residential-property-card";
import { getProperties } from "@/actions/property";

export default async function DashboardPropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-black">Properties</h1>
          <p className="text-sm font-light text-slate-400">
            Here you can view and manage your properties
          </p>
        </div>

        <NewPropertyDialog />
      </div>
      <div className="grid gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <ResidentialPropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
