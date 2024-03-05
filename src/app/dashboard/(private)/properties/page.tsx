import PropertyCategoryDialog from "@/components/PropertyCategoryDialog";

export default function DashboardPropertiesPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4>Properties</h4>
          <p className="text-pretty">
            Here you can view and manage your properties
          </p>
        </div>
        <PropertyCategoryDialog />
      </div>
    </div>
  );
}
