import { z } from "zod";

export const propertyCategorySchema = z.enum([
  "Residential",
  "Commercial",
  "Garage",
  "Land",
  "Parking Space",
  "Other",
]);

/**
 * Profile sex enum schema
 */
export const profileSexEnumSchema = z.enum(["Male", "Female", "Other"]);

/**
 * Login form schema
 */
export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

/**
 * Register form schema
 */
export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be maximum 100 characters long" }),
  confirmPassword: z.string(),
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  taxId: z.string().trim().min(1, { message: "Tax ID is required" }),
  birthDate: z.coerce
    .date()
    .min(new Date(1920, 0, 1), {
      message: "Birth date cannot go past January 1 1920",
    })
    .max(new Date(), { message: "Date must be in the past" })
    .refine(
      (date) => {
        const ageDifMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDifMs);

        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        return age >= 18;
      },
      { message: "You must be 18 years or older" }
    ),
  sex: profileSexEnumSchema,
  secondaryEmail: z
    .string()
    .email({ message: "Invalid secondary email address" })
    .optional()
    .or(z.literal("")),
  phoneNumber: z.string().optional(),
});

// ENUMS

export const propertyResidentialSubcategoryEnum = z.enum([
  "Apartment",
  "Penthouse",
  "Mansard",
  "Single-family Townhouse",
  "Multi-family Townhouse",
  "Loft",
  "Open Space",
  "Attic",
  "Courtyard House",
  "Cabin",
  "Farmhouse",
  "Country House",
  "Chalet",
  "Dammuso",
  "Farmstead",
  "Large Farmhouse",
  "Nuraghe",
  "Refuge",
  "Rustic",
  "Stone House",
  "Trullo",
  "Detached Villa",
  "Semi-detached Villa",
  "Multi-family Villa",
  "Row Villa",
  "Apartment In Villa",
]);

export const propertyConditionEnum = z.enum([
  "New under construction",
  "Excellent renovated",
  "Good livable",
  "To be renovated",
]);

export const buildingUsageEnumSchema = z.enum([
  "Industrial",
  "Residential",
  "Hotel",
  "Other",
  "Commercial",
  "Castel",
  "Office",
]);

export const propertyFloorEnum = z.enum([
  "underground (-5)",
  "underground (-4)",
  "underground (-3)",
  "underground (-2)",
  "underground (-1)",
  "basement",
  "ground floor",
  "mezzanine",
  "raised floor",
  "1",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
]);

export const propertyGardenEnum = z.enum([
  "None",
  "Shared",
  "Private",
  "Shared and Private",
]);

export const propertyGarageEnum = z.enum([
  "None",
  "Single",
  "Double",
  "Triple",
  "Quadruple",
  "Box",
  "Carport",
  "Parking space",
]);

export const propertyFurnishingEnum = z.enum([
  "Furnished",
  "Semi-furnished",
  "Semi-furnished with kitchen",
  "Unfurnished",
]);

export const propertyClassEnum = z.enum([
  "Luxury",
  "Elengant",
  "Medium",
  "Economy",
]);

export const propertyExternalFixturesMaterialEnum = z.enum([
  "Wood",
  "Metal",
  "PVC",
]);

export const propertyExternalFixturesGlassTypeEnum = z.enum([
  "Single",
  "Double",
  "Triple",
]);

export const propertyTvSystemEnum = z.enum([
  "Single",
  "Centralized",
  "satellite dish",
]);

export const propertyConciergeServiceEnum = z.enum([
  "None",
  "Full day",
  "half day",
]);

export const propertyFreeSidesEnum = z.enum([
  "One",
  "Two parallel",
  "Two at an angle",
  "Three",
  "Four",
]);

export const propertyFacingEnum = z.enum(["Internal", "External", "Double"]);

export const propertyExposureEnum = z.enum([
  "North",
  "South",
  "East",
  "West",
  "North South",
  "North East",
  "North West",
  "South East",
  "South West",
  "East West",
  "North South East",
  "North South West",
  "North East West",
  "South East West",
  "North South East West",
]);

export const propertyCountryEnum = z.enum(["Italy", "Spain"]);

export const propertyHeatingEnum = z.enum([
  "Independent",
  "Centralized",
  "None",
]);

export const propertyHeatingTypeEnum = z.enum([
  "Floor",
  "Radiator",
  "Air",
  "Stove",
]);

export const propertyAirConditioningEnum = z.enum([
  "Autonomous",
  "Centralized",
  "Air conditioning system preparation",
  "None",
]);

export const propertyAirConditioningTypeEnum = z.enum([
  "Autonomous",
  "Centralized",
  "Air conditioning system preparation",
  "None",
]);

export const propertyEnergyClassEnum = z.enum([
  "Pending",
  "Exempt",
  "Unclassifiable",
  "2005_A+",
  "2005_A",
  "2005_B",
  "2005_C",
  "2005_D",
  "2005_E",
  "2005_F",
  "2005_G",
  "2013_A4",
  "2013_A3",
  "2013_A2",
  "2013_A1",
  "2013_B",
  "2013_C",
  "2013_D",
  "2013_E",
  "2013_F",
  "2013_G",
]);

export const propertyHeatingFuelEnum = z.enum([
  "Gas",
  "Methane",
  "LPG",
  "Diesel",
  "Pellets",
  "Wood",
  "Solar",
  "Photovoltaic",
  "District Heating",
  "Heat Pump",
  "Electric",
]);

export const propertyCadastralCategoryEnum = z.enum([
  "A/1",
  "A/2",
  "A/3",
  "A/4",
  "A/5",
  "A/6",
  "A/7",
  "A/8",
  "A/9",
  "A/10",
  "A/11",
  "B/1",
  "B/2",
  "B/3",
  "B/4",
  "B/5",
  "B/6",
  "B/7",
  "B/8",
  "C/1",
  "C/2",
  "C/3",
  "C/4",
  "C/5",
  "C/6",
  "C/7",
  "D/1",
  "D/2",
  "D/3",
  "D/4",
  "D/5",
  "D/6",
  "D/7",
  "D/8",
  "D/9",
  "D/10",
  "D/11",
  "D/12",
  "E/1",
  "E/2",
  "E/3",
  "E/4",
  "E/5",
  "E/6",
  "E/7",
  "E/8",
  "E/9",
  "F/1",
  "F/2",
  "F/3",
  "F/4",
  "F/5",
  "F/6",
  "T",
]);

export const buildingUsageEnum = z.enum([
  "Industrial",
  "Residential",
  "Hotel",
  "Other",
  "Commercial",
  "Castel",
  "Office",
]);

export const propertyGarageSubcategoryEnum = z.enum([
  "Indipendent box",
  "Shared box",
]);

export const propertyParkingSpaceSubcategoryEnum = z.enum([
  "Shared garage",
  "Covered (external)",
  "Uncovered (external)",
]);

export const propertyLocationSchema = z.object({
  street_name: z.string(),
  street_number: z.string(),
  city: z.string(),
  zip_code: z.string(),
  province: z.string(),
  region: z.string(),
  country: propertyCountryEnum,
});

export const propertyCadastralSchema = z.object({
  cadastral_section: z.string(),
  cadastral_sheet: z.string(),
  cadastral_particle: z.string(),
  cadastral_subaltern: z.string(),
  cadastral_category: propertyCadastralCategoryEnum,
  cadastral_income: z.number(),
  cadastral_quote: z.string(),
  cadastral_other: z.string(),
});

export const propertyDescriptionSchema = z.object({
  description: z.string(),
  title: z.string(),
  notes: z.string(),
});

export const propertyResidentialSchema = z
  .object({
    // Subcategory
    subcategory: propertyResidentialSubcategoryEnum,
    // Composition
    mq: z.number(),
    rooms: z.number(),
    bathrooms: z.number(),
    kitchens: z.number(),
    garden: propertyGardenEnum,
    garage: propertyGarageEnum,
    parking_spaces: z.number(),
    terraces: z.number(),
    balcony: z.number(),
    cantina: z.number(),
    mansarda: z.number(),
    taverna: z.number(),
    floor: propertyFloorEnum,
    multiple_floors: z.boolean(),
    // Features
    furnishing: propertyFurnishingEnum.optional(),
    wall_waredrobes: z.boolean().optional(),
    external_fixtures_material: propertyExternalFixturesMaterialEnum.optional(),
    external_fixtures_glass_type:
      propertyExternalFixturesGlassTypeEnum.optional(),
    tv_system: propertyTvSystemEnum.optional(),
    concierge_service: propertyConciergeServiceEnum.optional(),
    reinforced_door: z.boolean().optional(),
    alarm: z.boolean().optional(),
    electric_gate: z.boolean().optional(),
    video_intercom: z.boolean().optional(),
    optic_fiber: z.boolean().optional(),
    chimney: z.boolean().optional(),
    hot_tub: z.boolean().optional(),
    pool: z.boolean().optional(),
    sports_facility: z.number(),
    condition: propertyConditionEnum.optional(),
    class: propertyClassEnum.optional(),
    exposure: propertyExposureEnum.optional(),
    heating: propertyHeatingEnum,
    heating_type: propertyHeatingTypeEnum.optional(),
    heating_fuel: propertyHeatingFuelEnum.optional(),
    air_conditioning: propertyAirConditioningEnum.optional(),
    air_conditioning_type: propertyAirConditioningTypeEnum.optional(),
    energy_class: propertyEnergyClassEnum,
    // Building
    construction_year: z.number().optional(),
    total_floors_building: z.number().optional(),
    elevators: z.number().optional(),
    wheelchair_access: z.boolean().optional(),
    free_sides: propertyFreeSidesEnum.optional(),
    facing: propertyFacingEnum.optional(),
  })
  .merge(propertyLocationSchema)
  .merge(propertyCadastralSchema)
  .merge(propertyDescriptionSchema);

export type PropertyResidentialInput = z.input<
  typeof propertyResidentialSchema
>;
export type PropertyResidentialOutput = z.output<
  typeof propertyResidentialSchema
>;
