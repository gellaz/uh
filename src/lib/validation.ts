import { z } from "zod";

export const buildingUsageEnumSchema = z.enum([
  "Industrial",
  "Residential",
  "Hotel",
  "Other",
  "Commercial",
  "Castel",
  "Office",
]);

export type BuildingUsageEnum = z.infer<typeof buildingUsageEnumSchema>;

export const propertyAirConditioningEnum = z.enum([
  "Autonomous",
  "Centralized",
  "Air conditioning system preparation",
  "None",
]);

export type PropertyAirConditioningEnum = z.infer<
  typeof propertyAirConditioningEnum
>;
