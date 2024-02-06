'use client'

import { useEffect, useState } from "react";
import { Property } from "@/types/properties";
import PropertyCard from "@/components/property/propertyCard";
import TabController from "@/components/tabController";
import { getProperties } from "@/actions/property/propertyActions";
import CategoryDialog from "@/components/property/new/CategoryDialog";
import FilterSheet from "@/components/property/new/FilterSheet";

export default function PropertyPage() {
  const [error, setError] = useState<string | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);

  // DATA FETCHING
  async function fetchProperties() {
    try {
      const response = await getProperties();
      setProperties(response as Property[]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="flex flex-col h-full w-full p-4 space-y-4">
      <div className="flex flex-row space-x-4 w-full items-center justify-between">
        <TabController
          className="flex-1"
          tabs={["Tutti", "Affitto", "Vendita"]}
          selected={0}
          onTabChange={() => { }}
        />
        <CategoryDialog />
        <FilterSheet />
      </div>
      <div className="flex grid-cols-4 gap-4 w-full h-full">
        {error != null ? (
          <p>{error}</p>
        ) : properties != null ? (
          properties.map(
            (item) => <PropertyCard property={item} />
            // <PropertyTile key={item.id} data={item} isEditing={false} />
          )
        ) : (
          <div className="flex flex-col w-full h-full items-center justify-center opacity-60">
            <p className="text-sm font-normal">
              {"Non hai ancora caricato una proprietà"}
            </p>
            <span className="text-sm font-normal">
              {'Clicca il sul pulsante "Nuova proprietà"'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
