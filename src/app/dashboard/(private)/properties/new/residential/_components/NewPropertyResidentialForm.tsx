"use client";

import { ArrowLeft, ArrowRight, LocateFixed, Zap } from "lucide-react";
import {
  Form,
  FormControl,
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
  propertyAirConditioningTypeEnum,
  propertyCadastralCategoryEnum,
  propertyConciergeServiceEnum,
  propertyConditionEnum,
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
  propertyParkingSpaceSubcategoryEnum,
  propertyResidentialSchema,
  propertyResidentialSubcategoryEnum,
  propertyTvSystemEnum,
} from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CardOption from "@/components/CardOption";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Switch } from "@/components/ui/switch";
import TabGroup from "@/components/TabGroup";
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
      //
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
      //
      condition: undefined,
      floor: undefined,
      multiple_floors: undefined,
      elevators: undefined,
      wheelchair_access: undefined,
      free_sides: undefined,
      facing: undefined,
      furnishing: undefined,
      wall_waredrobes: undefined,
      external_fixtures_material: undefined,
      external_fixtures_glass_type: undefined,
      building_construction_year: undefined,
      building_total_floors: undefined,
      //
      street_name: undefined,
      street_number: undefined,
      city: undefined,
      zip_code: undefined,
      province: undefined,
      region: undefined,
      country: undefined,
      //
      heating: undefined,
      heating_type: undefined,
      heating_fuel: undefined,
      air_conditioning: undefined,
      air_conditioning_type: undefined,
      //
      energy_class: undefined,
      //
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
      //
      cadastral_section: undefined,
      cadastral_sheet: undefined,
      cadastral_particle: undefined,
      cadastral_subaltern: undefined,
      cadastral_category: undefined,
      cadastral_income: undefined,
      cadastral_quote: undefined,
      cadastral_other: undefined,
      //
      description: undefined,
      title: undefined,
      notes: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof propertyResidentialSchema>) {
    console.log(values);
  }

  return (
    <div className="col space-y-4 rounded-2xl border p-4 ">
      <Form {...form}>
        <div className="row h-fit justify-between">
          <div className="col">
            <h6 className="font-medium">{currentStep.title}</h6>
            <p className="font-light">{currentStep.description}</p>
          </div>
          <div className="row h-fit w-fit space-x-2 ">
            <Button
              asChild
              variant={"secondary"}
              onClick={prevStep}
              className="h-10 w-10 rounded-full px-[10px]"
            >
              <ArrowLeft />
            </Button>
            <Button
              asChild
              variant={"secondary"}
              onClick={nextStep}
              className="h-10 w-10 rounded-full px-[10px]"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" h-full w-full overflow-clip"
        >
          <FormStepContent form={form} currentStepIndex={currentStepIndex} />
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
  const separatorStyle = "h-[1px] bg-slate-200";
  const rowStyle = "row space-x-6 items-baseline justify-between";

  switch (currentStepIndex) {
    // Subcategory
    case 0:
      const cardStyle =
        "row p-2 items-center justify-start space-x-2 cursor-pointer transition-all duration-150 ease-in-out shadow-none ";
      const emojiDivStyle =
        "flex items-center justify-center w-10 h-10 rounded-full ";
      const emoji = () => {
        const array = Object.values(propertyResidentialSubcategoryEnum.Values);
        const emojiArray = Array(array.length).fill("🏠");
        return emojiArray;
      };
      // SUBCATEGORY
      const selection = 0;

      return (
        <div className="h-full space-y-4 ">
          <Input
            placeholder="Search here for sub category..."
            className="text-sm"
          />
          <div className="grid grid-cols-3 gap-2 ">
            {Object.values(propertyResidentialSubcategoryEnum.Values)
              .sort()
              .map((item, index) => (
                <Card
                  key={item}
                  // onClick={() => categoryCardTapped(index)}
                  className={
                    cardStyle +
                    (selection === index
                      ? "bg-orange-500 text-white"
                      : "bg-white  hover:bg-orange-100")
                  }
                >
                  <div
                    className={
                      emojiDivStyle +
                      (selection == index ? "bg-orange-300" : "bg-orange-100")
                    }
                  >
                    <h5>{emoji()[index]}</h5>
                  </div>
                  <p className="text-pretty">{item}</p>
                </Card>
              ))}
          </div>
        </div>
      );
    // Composition
    case 1:
      return (
        <div className="col space-y-6">
          <div className="grid grid-cols-4 gap-4">
            {/* Mq */}
            <FormField
              control={form.control}
              name="mq"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Area (mq)</FormLabel>
                  <FormControl>
                    <Input placeholder="Insert area" {...field} />
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
                <FormItem className="flex-1">
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
            {/** Bathrooms */}
            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem className="flex-1">
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
            {/** Kitchens */}
            <FormField
              control={form.control}
              name="kitchens"
              render={({ field }) => (
                <FormItem className="flex-1">
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
          </div>
          <Separator className={separatorStyle} />
          {/** Garden */}
          <FormField
            control={form.control}
            name="garden"
            render={({ field }) => (
              <FormItem className="row h-fit w-full items-baseline justify-between space-x-4">
                <FormLabel>Garden</FormLabel>
                <TabGroup
                  tabs={Object.values(propertyGardenEnum.Values)}
                  role={"garden"}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className={separatorStyle} />
          {/** Garage */}
          <FormField
            control={form.control}
            name="garage"
            render={({ field }) => (
              <FormItem className="row h-fit w-full items-baseline justify-between space-x-4">
                <FormLabel>Garage</FormLabel>
                <TabGroup
                  tabs={Object.values(propertyGarageEnum.Values)}
                  role={"garage"}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className={separatorStyle} />
          {/** Parking spaces */}
          <FormField
            control={form.control}
            name="parking_spaces"
            render={({ field }) => (
              <FormItem className="row h-fit w-full items-baseline justify-between space-x-4">
                <FormLabel>Parking space</FormLabel>
                <TabGroup
                  tabs={Object.values(
                    propertyParkingSpaceSubcategoryEnum.Values
                  )}
                  role={""}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-4">
            {/* Terraces */}
            <FormField
              control={form.control}
              name="terraces"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terraces</FormLabel>
                  <FormControl>
                    <Input
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
                      placeholder="Insert number of balconies..."
                      type="number"
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
                  <FormLabel>Cantina</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insert number of cellars..."
                      type="number"
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
                      placeholder="Insert number of attics..."
                      type="number"
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
                      placeholder="Insert number of basements..."
                      type="number"
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
        <div className="md: grid gap-2 lg:grid-cols-2">
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
            {/* ZIPCODE */}
            <FormField
              control={form.control}
              name="zip_code"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>Zipcode</FormLabel>
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
        <div className="col space-y-6">
          {/** Heating */}
          <FormField
            control={form.control}
            name="heating"
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
          {/** Heating fuel */}
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
          {/** Heating type */}
          <FormField
            control={form.control}
            name="heating_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heating type</FormLabel>
                <div className="grid grid-cols-6 gap-4">
                  {Object.values(propertyHeatingTypeEnum.Values)
                    .sort()
                    .map((item) =>
                      CardOption({
                        item,
                        color: "bg-orange-100",
                        icon: <Zap className="text-primary" size={32} />,
                      })
                    )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Air conditioning */}
          <FormField
            control={form.control}
            name="air_conditioning"
            render={({ field }) => (
              <FormItem className={rowStyle}>
                <FormLabel>Air conditioning</FormLabel>
                <FormControl>
                  <TabGroup
                    tabs={Object.values(propertyAirConditioningTypeEnum.Values)}
                    role={"garden"}
                  />
                </FormControl>
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
          <FormField
            control={form.control}
            name="heating"
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
          <FormField
            control={form.control}
            name="cadastral_income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cadastral Income</FormLabel>
                <FormControl>
                  <Input placeholder="Insert cadastral income..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
      return <div>Description</div>;
    // Media
    case 9:
      return <div>Media</div>;
    default:
      return null;
  }
}
