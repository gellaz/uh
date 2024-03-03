"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  propertyResidentialSchema,
  propertyResidentialSubcategoryEnum,
} from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useFormStep } from "@/context/FormStepContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* const formSchema = z.object({
  category: z.literal("Residential"),
  subcategory: z.string().min(1, "Subcategory must be not empty"),
  street_name: z.string().min(1, "Street name must be no"),
  street_number: z.string().min(1, "s"),
  postal_code: z.string().min(1, "s"),
  city: z.string().min(1, "s"),
  state: z.string().min(1, "s"),
  country: z.string().min(1, "s"),
  mq: z.string().min(1, "s"),
  floor: z.number().min(0),
  total_floors: z.number().min(0),
  rooms: z.number().min(0),
  kitchens: z.number().min(0, { message: "" }),
  bathrooms: z.number().min(0, { message: "" }),
  heating: z.enum(["None", "Independent", "Centralized"]),
  heating_fuel: z.enum([
    "GPL",
    "Gas",
    "Elettrico",
    "Ibrido",
    "Metano",
    "Geo-termico",
  ]),
  heating_type: z.enum(["A Pavimento", "A Pannelli", "A Parete"]),
  air_conditioning: z.enum(["Cold only", "Hot only", "Cold and hot", "None"]),
  energy_class: z.enum([
    "Pending",
    "Exempt",
    "Unclassifiable",
    "A4",
    "A3",
    "A2",
    "A1",
    "A+",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]),
  furnishing: z.enum([
    "Furnished",
    "Unfurnished",
    "Partially furnished",
    "Kitchen only",
  ]),
  external_fixtures_material: z.enum(["Wood", "Metal", "PVC", "Hybrid"]),
  external_fixtures_glass_type: z.enum(["Single", "Double", "Triple"]),
  condition: z.enum([
    "New under construction",
    "Excellent renovated",
    "Good livable",
    "To be renovated",
  ]),
  exposure: z.enum([
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
  ]),
  elevator: z.enum(["None", "Elevator", "Goods Lift"]),
  pool: z.boolean(),
  construction_year: z.number().min(0),
});
 */
/* interface NewPropertyFormSchema {
  residentialSubcategories: string[];
} */

export default function PropertyResidentialForm() {
  const { currentStepIndex, nextStep, prevStep, totalSteps } = useFormStep();

  const form = useForm<z.infer<typeof propertyResidentialSchema>>({
    resolver: zodResolver(propertyResidentialSchema),
    defaultValues: {
      subcategory: undefined,
      mq: undefined,
      rooms: undefined,
      bathrooms: undefined,
      kitchens: undefined,
      garden: undefined,
      garage: undefined,
      parking_spaces: undefined,
      terraces: undefined,
      balcony: undefined,
      cantina: undefined,
      mansarda: undefined,
      taverna: undefined,
      floor: undefined,
      multiple_floors: undefined,
      furnishing: undefined,
      wall_waredrobes: undefined,
      external_fixtures_material: undefined,
      external_fixtures_glass_type: undefined,
      tv_system: undefined,
      concierge_service: undefined,
      reinforced_door: undefined,
      alarm: undefined,
      electric_gate: undefined,
      video_intercom: undefined,
      optic_fiber: undefined,
      chimney: undefined,
      hot_tub: undefined,
      pool: undefined,
      sports_facility: undefined,
      condition: undefined,
      class: undefined,
      exposure: undefined,
      heating: undefined,
      heating_type: undefined,
      heating_fuel: undefined,
      air_conditioning: undefined,
      air_conditioning_type: undefined,
      energy_class: undefined,
      construction_year: undefined,
      total_floors_building: undefined,
      elevators: undefined,
      wheelchair_access: undefined,
      free_sides: undefined,
      facing: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof propertyResidentialSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        {currentStepIndex === 0 && (
          <>
            {/** Subcategory */}
            <FormField
              control={form.control}
              name="subcategory"
              render={({ field }) => (
                <FormItem className="row h-fit space-x-4 items-center justify-center">
                  <FormLabel className="text-base">Subcategory</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a property subcategory" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(
                        propertyResidentialSubcategoryEnum.Values
                      ).map((subcategory) => (
                        <SelectItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-2">
              {/** Street name */}
              <FormField
                control={form.control}
                name="street_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street name</FormLabel>
                    <FormControl>
                      <Input placeholder="Via Giuseppe Verdi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Street number */}
              <FormField
                control={form.control}
                name="street_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street number</FormLabel>
                    <FormControl>
                      <Input placeholder="Via Giuseppe Verdi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/** City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Insert city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-4 gap-2">
              {/** ZIP code */}
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP code</FormLabel>
                    <FormControl>
                      <Input placeholder="40100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Province */}
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Province</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert province" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Region */}
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Region</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert region" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
        {currentStepIndex === 1 && (
          <>
            <div className="grid grid-cols-4 gap-2">
              {/** Mq */}
              <FormField
                control={form.control}
                name="mq"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area (mq)</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert area" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Floor */}
              <FormField
                control={form.control}
                name="floor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Floor</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert floor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Total floors */}
              <FormField
                control={form.control}
                name="total_floors_building"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total floors</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert total floors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Rooms */}
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rooms</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Number of rooms"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Kitchens */}
              <FormField
                control={form.control}
                name="kitchens"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kitchens</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Number of kitchens"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Bathrooms */}
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Number of bathrooms"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Heating */}
              <FormField
                control={form.control}
                name="heating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heating</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select heating" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["None", "Independent", "Centralized"].map((item) => (
                          <SelectItem value={item}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Heating fuel */}
              <FormField
                control={form.control}
                name="heating_fuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heating fuel</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select heating fuel" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="GPL">GPL</SelectItem>
                        <SelectItem value="Gas">Gas</SelectItem>
                        <SelectItem value="Elettrico">Elettrico</SelectItem>
                        <SelectItem value="Ibrido">Ibrido</SelectItem>
                        <SelectItem value="Metano">Metano</SelectItem>
                        <SelectItem value="Geo-termico">Geo-termico</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Heating type */}
              <FormField
                control={form.control}
                name="heating_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heating type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select heating type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="A Pavimento">A Pavimento</SelectItem>
                        <SelectItem value="A Pannelli">A Pannelli</SelectItem>
                        <SelectItem value="A Parete">A Parete</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Air conditioning */}
              <FormField
                control={form.control}
                name="air_conditioning"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Air conditioning</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select air conditioning" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Cold only">Cold only</SelectItem>
                        <SelectItem value="Hot only">Hot only</SelectItem>
                        <SelectItem value="Cold and hot">
                          Cold and hot
                        </SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Energy class */}
              <FormField
                control={form.control}
                name="energy_class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Energy class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select energy class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Exempt">Exempt</SelectItem>
                        <SelectItem value="Unclassifiable">
                          Unclassifiable
                        </SelectItem>
                        <SelectItem value="A4">A4</SelectItem>
                        <SelectItem value="A3">A3</SelectItem>
                        <SelectItem value="A2">A2</SelectItem>
                        <SelectItem value="A1">A1</SelectItem>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                        <SelectItem value="E">E</SelectItem>
                        <SelectItem value="F">F</SelectItem>
                        <SelectItem value="G">G</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Furnishing */}
              <FormField
                control={form.control}
                name="furnishing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Furnishing</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select furnishing" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Furnished">Furnished</SelectItem>
                        <SelectItem value="Unfurnished">Unfurnished</SelectItem>
                        <SelectItem value="Partially furnished">
                          Partially furnished
                        </SelectItem>
                        <SelectItem value="Kitchen only">
                          Kitchen only
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
        {currentStepIndex === 2 && (
          <>
            <div className="grid grid-cols-3 gap-2">
              {/** External fixtures material */}
              <FormField
                control={form.control}
                name="external_fixtures_material"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>External fixtures material</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select external fixtures material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Wood">Wood</SelectItem>
                        <SelectItem value="Metal">Metal</SelectItem>
                        <SelectItem value="PVC">PVC</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** External fixtures glass type */}
              <FormField
                control={form.control}
                name="external_fixtures_glass_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>External fixtures glass type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select external fixtures glass type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Double">Double</SelectItem>
                        <SelectItem value="Triple">Triple</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Condition */}
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="New under construction">
                          New under construction
                        </SelectItem>
                        <SelectItem value="Excellent renovated">
                          Excellent renovated
                        </SelectItem>
                        <SelectItem value="Good livable">
                          Good livable
                        </SelectItem>
                        <SelectItem value="To be renovated">
                          To be renovated
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Exposure */}
              <FormField
                control={form.control}
                name="exposure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exposure</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exposure" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="North">North</SelectItem>
                        <SelectItem value="South">South</SelectItem>
                        <SelectItem value="East">East</SelectItem>
                        <SelectItem value="West">West</SelectItem>
                        <SelectItem value="North South">North South</SelectItem>
                        <SelectItem value="North East">North East</SelectItem>
                        <SelectItem value="North West">North West</SelectItem>
                        <SelectItem value="South East">South East</SelectItem>
                        <SelectItem value="South West">South West</SelectItem>
                        <SelectItem value="East West">East West</SelectItem>
                        <SelectItem value="North South East">
                          North South East
                        </SelectItem>
                        <SelectItem value="North South West">
                          North South West
                        </SelectItem>
                        <SelectItem value="North East West">
                          North East West
                        </SelectItem>
                        <SelectItem value="South East West">
                          South East West
                        </SelectItem>
                        <SelectItem value="North South East West">
                          North South East West
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Elevator */}
              <FormField
                control={form.control}
                name="elevators"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Elevator</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={"ss"}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select elevator" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="Elevator">Elevator</SelectItem>
                        <SelectItem value="Goods Lift">Goods Lift</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Pool */}
              <FormField
                control={form.control}
                name="pool"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Pool</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) =>
                          field.onChange(value === "yes")
                        }
                        defaultValue={field.value ? "yes" : "no"}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/** Construction year */}
              <FormField
                control={form.control}
                name="construction_year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Construction year</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Insert construction year"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
        {/* Buttons container */}
        <div className="mt-auto p-4">
          <div className="flex justify-center space-x-4 w-full">
            {currentStepIndex > 0 && (
              <Button
                variant="outline"
                type="button"
                onClick={prevStep}
                className="w-1/4"
              >
                Previous
              </Button>
            )}

            {/* Spacer div to ensure 'Next' button alignment when 'Previous' button is not rendered */}
            {currentStepIndex === 0 && <div className="w-1/4"></div>}

            <div className="w-1/4">
              {currentStepIndex < totalSteps - 1 ? (
                <Button type="button" onClick={nextStep} className="w-full">
                  Next
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => form.handleSubmit(onSubmit)()}
                  className="w-full"
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
