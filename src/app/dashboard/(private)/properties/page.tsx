import NewPropertyCategoryDialog from "./new/_components/NewPropertyCategoryDialog";

export default function DashboardPropertiesPage() {
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
    </div>
  );
}
