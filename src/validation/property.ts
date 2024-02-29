import { z } from "zod";

export const PropertyCategorySchema = z.enum([
  "Residential",
  "Commercial",
  "Garage",
  "Land",
  "Parking Space",
  "Other",
]);

export const PropertyTypeSchema = z.enum([
  "APARTMENT",
  "PENTHOUSE",
  "DETACHED_HOUSE",
  "VILLA",
  "TERRACED_HOUSE",
]);

export const EnergyClassSchema = z.enum([
  "PENDING",
  "EXEMPT",
  "UNCLASSIFIABLE",
  "A4",
  "A3",
  "A2",
  "A1",
  "A_PLUS",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
]);

export const HeatingTypeSchema = z.enum(["INDEPENDENT", "CENTRALIZED", "NONE"]);

export const AirConditioningSchema = z.enum([
  "COLD_ONLY",
  "HEAT_ONLY",
  "COLD_HEAT",
  "NONE",
]);

export const FurnishingSchema = z.enum([
  "FURNISHED",
  "UNFURNISHED",
  "PARTIALLY_FURNISHED",
  "KITCHEN_ONLY",
]);

export const ExternalFixturesSchema = z.enum([
  "GLASS_WOOD",
  "DOUBLE_GLASS_WOOD",
  "TRIPLE_GLASS_WOOD",
  "GLASS_METAL",
  "DOUBLE_GLASS_METAL",
  "TRIPLE_GLASS_METAL",
  "GLASS_PVC",
  "DOUBLE_GLASS_PVC",
  "TRIPLE_GLASS_PVC",
]);

export const PropertyConditionSchema = z.enum([
  "NEW_UNDER_CONSTRUCTION",
  "EXCELLENT_RENOVATED",
  "GOOD_LIVABLE",
  "TO_BE_RENOVATED",
]);

export const ExposureSchema = z.enum([
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
  "NORTH_SOUTH",
  "NORTH_EAST",
  "NORTH_WEST",
  "SOUTH_EAST",
  "SOUTH_WEST",
  "EAST_WEST",
  "NORTH_SOUTH_EAST",
  "NORTH_SOUTH_WEST",
  "NORTH_EAST_WEST",
  "SOUTH_EAST_WEST",
  "NORTH_SOUTH_EAST_WEST",
]);

export const PropertySchema = z.object({
  address: z.string(),
  type: PropertyTypeSchema,
  energyClass: EnergyClassSchema,
  constructionYear: z.coerce.number().optional(),
  area: z.coerce.number().optional(),
  floor: z.coerce.number().optional(),
  totalFloors: z.coerce.number().optional(),
  rooms: z.coerce.number().optional(),
  bedrooms: z.coerce.number().optional(),
  kitchens: z.coerce.number().optional(),
  bathrooms: z.coerce.number().optional(),
  elevators: z.coerce.number().optional(),
  pools: z.coerce.number().optional(),
  heating: HeatingTypeSchema.optional(),
  airConditioning: AirConditioningSchema.optional(),
  furnishing: FurnishingSchema.optional(),
  externalFixtures: ExternalFixturesSchema.optional(),
  condition: PropertyConditionSchema.optional(),
  exposure: ExposureSchema.optional(),
  photos: z.string().optional(),
  videos: z.string().optional(),
  floorPlans: z.string().optional(),
});

export type IProperty = z.infer<typeof PropertySchema>;
