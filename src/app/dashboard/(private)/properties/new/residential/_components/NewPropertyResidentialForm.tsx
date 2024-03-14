"use client";

import { ArrowLeft, ArrowRight, LocateFixed } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  propertyAirConditioningEnum,
  propertyAirConditioningTypeEnum,
  propertyCadastralCategoryEnum,
  propertyClassEnum,
  propertyConciergeServiceEnum,
  propertyConditionEnum,
  propertyCountryEnum,
  propertyEnergyClassEnum,
  propertyFacingEnum,
  propertyFloorEnum,
  propertyFreeSidesEnum,
  propertyFurnishingEnum,
  propertyGarageEnum,
  propertyGardenEnum,
  propertyHeatingEnum,
  propertyHeatingFuelEnum,
  propertyHeatingTypeEnum,
  propertyResidentialSchema,
  propertyResidentialSubcategoryEnum,
  propertyTvSystemEnum,
} from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useFormStep } from "@/context/FormStepContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewPropertyResidentialForm() {
  const { currentStepIndex, nextStep, prevStep, totalSteps, currentStep } =
    useFormStep();

  const form = useForm<z.infer<typeof propertyResidentialSchema>>({
    resolver: zodResolver(propertyResidentialSchema),
    defaultValues: {
      subcategory: undefined,
      property_class: undefined,
      // Composition
      mq: undefined,
      rooms: undefined,
      bathrooms: undefined,
      kitchens: undefined,
      garden: undefined,
      garage: undefined,
      parking_spaces: undefined,
      terraces: undefined,
      balcony: undefined,
      cellar: undefined,
      attic: undefined,
      basement: undefined,
      // Features
      condition: undefined,
      floor: undefined,
      multiple_floors: false,
      elevators: undefined,
      wheelchair_access: false,
      free_sides: undefined,
      facing: undefined,
      furnishing: undefined,
      wall_waredrobes: false,
      external_fixtures_material: undefined,
      external_fixtures_glass_type: undefined,
      building_construction_year: undefined,
      building_total_floors: undefined,
      // Location
      street_name: undefined,
      street_number: undefined,
      city: undefined,
      zip_code: undefined,
      province: undefined,
      region: undefined,
      country: undefined,
      // Heating & Air Conditioning
      heating: undefined,
      heating_type: undefined,
      heating_fuel: undefined,
      air_conditioning: undefined,
      air_conditioning_type: undefined,
      // Energy Certification
      energy_class: undefined,
      // Additional Features
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
      sports_facilities: undefined,
      // Cadastral Data
      cadastral_section: undefined,
      cadastral_sheet: undefined,
      cadastral_particle: undefined,
      cadastral_subaltern: undefined,
      cadastral_category: undefined,
      cadastral_income: undefined,
      cadastral_quote: undefined,
      cadastral_other: undefined,
      // Description
      description: undefined,
      title: undefined,
      notes: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof propertyResidentialSchema>) {
    console.log(values);
  }

  return (
    <div className="col space-y-4 rounded-2xl border p-4 px-8">
      <Form {...form}>
        <div className="row h-fit justify-between">
          <div className="col">
            <h6 className="font-medium">{currentStep.title}</h6>
            <p className="font-light">{currentStep.description}</p>
          </div>
          <div className="row h-fit w-fit space-x-2 ">
            <Button
              variant={"secondary"}
              size={"icon"}
              onClick={prevStep}
              className="rounded-full px-2"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon"}
              onClick={nextStep}
              className="rounded-full px-2"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-full">
          <FormStepContent form={form} currentStepIndex={currentStepIndex} />
          {currentStepIndex === totalSteps - 1 && (
            <Button type="submit" className="w-full">
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}

function FormStepContent({
  form,
  currentStepIndex,
}: {
  form: UseFormReturn<z.infer<typeof propertyResidentialSchema>>;
  currentStepIndex: number;
}) {
  const separatorStyle = "h-[1px] bg-slate-200 my-4 w-full";
  const rowStyle = "row space-x-6 items-baseline justify-between";

  switch (currentStepIndex) {
    // Subcategory & Property Class
    case 0:
      return (
        <div className="flex flex-col space-y-6">
          {/** Subcategory */}
          <FormField
            control={form.control}
            name="subcategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Subcategory<sup>*</sup>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(
                      propertyResidentialSubcategoryEnum.Values
                    ).map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Property Class */}
          <FormField
            control={form.control}
            name="property_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Class</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyClassEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    // Composition
    case 1:
      return (
        <div className="flex flex-col space-y-6">
          <div className="grid gap-x-8 gap-y-2 lg:grid-cols-2">
            {/* Mq */}
            <FormField
              control={form.control}
              name="mq"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Area<sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert area..."
                      {...field}
                    />
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
                  <FormLabel>
                    Rooms<sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Number of rooms"
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
                  <FormLabel>
                    Bathrooms<sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Number of bathrooms"
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
                  <FormLabel>
                    Kitchens<sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Number of kitchens"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className={separatorStyle} />
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Terraces */}
            <FormField
              control={form.control}
              name="terraces"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terraces</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert number of terraces..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Balcony */}
            <FormField
              control={form.control}
              name="balcony"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Balcony</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert number of balconies..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Cellar */}
            <FormField
              control={form.control}
              name="cellar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cellar</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert number of cellars..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Attic */}
            <FormField
              control={form.control}
              name="attic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attic</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert number of attics..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Basement */}
            <FormField
              control={form.control}
              name="basement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Basements</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert number of basements..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Garden */}
            <FormField
              control={form.control}
              name="garden"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Garden</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property garden..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(propertyGardenEnum.Values).map(
                        (item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Garage */}
            <FormField
              control={form.control}
              name="garage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Garage</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property garage..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(propertyGarageEnum.Values).map(
                        (item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Parking spaces */}
            <FormField
              control={form.control}
              name="parking_spaces"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parking Spaces</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Insert number of parking spaces..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      );
    // Features
    case 2:
      return (
        <div className="grid grid-cols-2 gap-2">
          {/* Condition */}
          <div className="col-span-2">
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
                        <SelectValue placeholder="Select property condition..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(propertyConditionEnum.Values).map(
                        (item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Floor */}
          <FormField
            control={form.control}
            name="floor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Floor</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select floor..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyFloorEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Multiple Floors */}
          <FormField
            control={form.control}
            name="multiple_floors"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Multiple Floors</FormLabel>
                <FormControl className="mt-0">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Elevators */}
          <FormField
            control={form.control}
            name="elevators"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Elevators</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Select number of elevators..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Wheelchair Access */}
          <FormField
            control={form.control}
            name="wheelchair_access"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Wheelchair Access</FormLabel>
                <FormControl className="mt-0">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Free Sides */}
          <FormField
            control={form.control}
            name="free_sides"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Free Sides</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select free sides..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyFreeSidesEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Facing */}
          <FormField
            control={form.control}
            name="facing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facing</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select facing..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyFacingEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Furnishing */}
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
                      <SelectValue placeholder="Select furnishing..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyFurnishingEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Wall Wardrobes */}
          <FormField
            control={form.control}
            name="wall_waredrobes"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Wall Wardrobes</FormLabel>
                <FormControl className="mt-0">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* External Fixtures Material */}
          <FormField
            control={form.control}
            name="external_fixtures_material"
            render={({ field }) => (
              <FormItem>
                <FormLabel>External Fixtures Material</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select external fixtures material..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyFurnishingEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* External Fixtures Glass Type */}
          <FormField
            control={form.control}
            name="external_fixtures_glass_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>External Fixtures Glass Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select external fixtures glass type..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyFurnishingEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Building Construction Year */}
          <FormField
            control={form.control}
            name="building_construction_year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Building Construction Year</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Insert building construction year..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Building Total Floors */}
          <FormField
            control={form.control}
            name="building_total_floors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Building Total Floors</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Insert building total floors..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    // Location
    case 3:
      return (
        <div className="row space-x-4">
          <div className="w-full rounded-lg bg-slate-100" />
          <div className="col space-y-4">
            <FormField
              control={form.control}
              name="street_name"
              render={({ field }) => (
                <FormItem className="h-fit w-full">
                  <FormLabel>Street name</FormLabel>
                  <Input placeholder="Street name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* STREET NUMBER */}
            <FormField
              control={form.control}
              name="street_number"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>Street number</FormLabel>
                  <Input placeholder="Street number" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* CITY */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>City</FormLabel>
                  <Input placeholder="City" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ZIP Code */}
            <FormField
              control={form.control}
              name="zip_code"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>ZIP Code</FormLabel>
                  <Input placeholder="Zipcode" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* PROVINCE */}
            <FormField
              control={form.control}
              name="province"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>Province</FormLabel>
                  <Input placeholder="Province" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* REGION */}
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>Region</FormLabel>
                  <Input placeholder="Region" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* COUNTRY */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(propertyCountryEnum.Values).map(
                        (item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button asChild variant={"outline"}>
              <div className="row space-x-2">
                <LocateFixed size={16} />
                <p>Use your location</p>
              </div>
              {/* {"Use your location"} */}
            </Button>
          </div>
        </div>
      );
    // Heating & Air Conditioning
    case 4:
      return (
        <div className="flex flex-col space-y-6">
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
                      <SelectValue placeholder="Select heating type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyHeatingEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Heating Fuel */}
          <FormField
            control={form.control}
            name="heating_fuel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heating Fuel</FormLabel>
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
                    {Object.values(propertyHeatingFuelEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Heating Type */}
          <FormField
            control={form.control}
            name="heating_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heating Type</FormLabel>
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
                    {Object.values(propertyHeatingTypeEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Air Conditioning */}
          <FormField
            control={form.control}
            name="air_conditioning"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Air Condiitioning</FormLabel>
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
                    {Object.values(propertyAirConditioningEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Air Conditioning Type */}
          <FormField
            control={form.control}
            name="air_conditioning"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Air Condiitioning Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select air conditioning type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyAirConditioningTypeEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    // Energy Certification
    case 5:
      return (
        <>
          {/** Energy class */}
          <FormField
            control={form.control}
            name="energy_class"
            render={({ field }) => (
              <FormItem className={rowStyle}>
                <FormLabel>Energy class</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-1/4">
                    <SelectTrigger>
                      <SelectValue placeholder="Select energy class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(propertyEnergyClassEnum.Values)
                        .sort()
                        .slice(-3)
                        .map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel className="pl-2">
                        <Separator className="my-2 h-[0.8px] w-full bg-black/70" />
                        2005
                      </SelectLabel>
                      {Object.values(propertyEnergyClassEnum.Values)
                        .sort()
                        .filter((item) => item.includes("2005"))
                        .map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item.replace("2005_", "")}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel className="pl-2">
                        <Separator className="my-2 h-[0.8px] w-full bg-black/70" />
                        2013
                      </SelectLabel>
                      {Object.values(propertyEnergyClassEnum.Values)
                        .sort()
                        .filter((item) => item.includes("2013"))
                        .map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item.replace("2013_", "")}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      );
    // Additional Features
    case 6:
      return (
        <div className="md: grid gap-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="tv_system"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TV System</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select TV system..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyTvSystemEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="concierge_service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Concierge Service</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select concierge service..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyConciergeServiceEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reinforced_door"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Reinforced Door</FormLabel>
                <FormControl className="mt-0">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alarm"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Alarm</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="electric_gate"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Electric Gate</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="video_intercom"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Video Intercom</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optic_fiber"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Optic Fiber</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chimney"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Chimney</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hot_tub"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Hot Tub</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pool"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Pool</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sports_facilities"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <FormLabel>Sports Facilities</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    // Cadastral Information
    case 7:
      return (
        <div className="grid grid-cols-2 gap-2">
          {/** Cadastral Section */}
          <FormField
            control={form.control}
            name="cadastral_section"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Section</FormLabel>
                <FormControl>
                  <Input placeholder="Insert cadastral section" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Cadastral Sheet */}
          <FormField
            control={form.control}
            name="cadastral_sheet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Sheet</FormLabel>
                <FormControl>
                  <Input placeholder="Insert cadastral sheet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Cadastral Particle */}
          <FormField
            control={form.control}
            name="cadastral_particle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Particle</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert cadastral particle..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Cadastral Subaltern */}
          <FormField
            control={form.control}
            name="cadastral_subaltern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Subaltern</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert cadastral subaltern..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Cadastral Category */}
          <FormField
            control={form.control}
            name="cadastral_category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cadastral category..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(propertyCadastralCategoryEnum.Values).map(
                      (item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Cadastral Income */}
          <FormField
            control={form.control}
            name="cadastral_income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Income</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Insert cadastral income..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Cadastral Quote */}
          <FormField
            control={form.control}
            name="cadastral_quote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Quote</FormLabel>
                <FormControl>
                  <Input placeholder="Insert cadastral quote..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Other Cadastral Information */}
          <FormField
            control={form.control}
            name="cadastral_other"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Cadastral Information</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert other cadastral information..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    // Description
    case 8:
      return (
        <div className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="h-fit">
                <FormLabel>Title</FormLabel>
                <Input placeholder="Insert title..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="h-fit">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Insert description..."
                  className="resize-none"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem className="h-fit">
                <FormLabel>Notes</FormLabel>
                <Textarea
                  placeholder="Insert notes..."
                  className="resize-none"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    // Media
    case 9:
      return <div>Media</div>;
    default:
      return null;
  }
}
