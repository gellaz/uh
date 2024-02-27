import type { Database as DB } from "@/lib/database.types";

/**
 * This file is used to declare global types that are used across the app.
 */
declare global {
  export type Database = DB;

  export type Profile = DB["public"]["Tables"]["profiles"]["Row"];
  export type Sex = DB["public"]["Enums"]["profile_sex_enum"];

  export type PropertyCategory =
    DB["public"]["Tables"]["property_categories"]["Row"];
  export type PropertyResidential =
    DB["public"]["Tables"]["properties_residential"]["Row"];
  export type PropertyResidentialSubcategory =
    DB["public"]["Enums"]["property_residential_subcategory_enum"];

  export type PropertyAirConditioning =
    DB["public"]["Enums"]["property_air_conditioning_enum"];
  export type PropertyAirConditioningType =
    DB["public"]["Enums"]["property_air_conditioning_type_enum"];
  export type PropertyCadestralCategory =
    DB["public"]["Enums"]["property_cadestral_category_enum"];
  export type PropertyClass = DB["public"]["Enums"]["property_class_enum"];
  export type PropertyConciergeService =
    DB["public"]["Enums"]["property_concierge_service_enum"];
  export type PropertyCondition =
    DB["public"]["Enums"]["property_condition_enum"];
  export type PropertyCountry = DB["public"]["Enums"]["property_country_enum"];
  export type PropertyEnergyClass =
    DB["public"]["Enums"]["property_energy_class_enum"];
  export type PropertyExposure =
    DB["public"]["Enums"]["property_exposure_enum"];
  export type PropertyExternalFixturesGlassType =
    DB["public"]["Enums"]["property_external_fixtures_glass_type_enum"];
  export type PropertyExternalFixturesMaterial =
    DB["public"]["Enums"]["property_external_fixtures_material_enum"];
  export type PropertyFacing = DB["public"]["Enums"]["property_facing_enum"];
  export type PropertyFloor = DB["public"]["Enums"]["property_floor_enum"];
  export type PropertyFreeSides =
    DB["public"]["Enums"]["property_free_sides_enum"];
  export type PropertyFurnishingFurnishing =
    DB["public"]["Enums"]["property_furnishing_enum"];
  export type PropertyGarage = DB["public"]["Enums"]["property_garage_enum"];
  export type PropertyGarden = DB["public"]["Enums"]["property_garden_enum"];
  export type PropertyHeating = DB["public"]["Enums"]["property_heating_enum"];
  export type PropertyHeatingFuel =
    DB["public"]["Enums"]["property_heating_fuel_enum"];
  export type PropertyHeatingType =
    DB["public"]["Enums"]["property_heating_type_enum"];
  export type PropertyTVSystem =
    DB["public"]["Enums"]["property_tv_system_enum"];
}
