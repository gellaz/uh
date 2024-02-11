import type { Database as DB } from "@/lib/database.types";

/**
 * This file is used to declare global types that are used across the app.
 */
declare global {
  export type Database = DB;
  export type Profile = DB["public"]["Tables"]["profiles"]["Row"];
  export type Property = DB["public"]["Tables"]["properties"]["Row"];
  export type PropertyCategory =
    DB["public"]["Tables"]["property_categories"]["Row"];
  export type PropertySubCategory =
    DB["public"]["Tables"]["property_subcategories"]["Row"];
  export type AirConditioning = DB["public"]["Enums"]["air_conditioning"];
  export type Condition = DB["public"]["Enums"]["condition"];
  export type Elevator = DB["public"]["Enums"]["elevator"];
  export type EnergyClass = DB["public"]["Enums"]["energy_class"];
  export type Exposure = DB["public"]["Enums"]["exposure"];
  export type ExternalFixturesGlassType =
    DB["public"]["Enums"]["external_fixtures_glass_type"];
  export type ExternalFixturesMaterial =
    DB["public"]["Enums"]["external_fixtures_material"];
  export type Furnishing = DB["public"]["Enums"]["furnishing"];
  export type Heating = DB["public"]["Enums"]["heating"];
  export type HeatingFuel = DB["public"]["Enums"]["heating_fuel"];
  export type HeatingType = DB["public"]["Enums"]["heating_type"];
  export type Sex = DB["public"]["Enums"]["sex"];
}
