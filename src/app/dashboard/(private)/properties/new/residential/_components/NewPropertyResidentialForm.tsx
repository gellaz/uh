"use client";

import {
  ArrowLeft,
  ArrowRight,
  Heater,
  LocateFixed,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
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
import {
  propertyAirConditioningTypeEnum,
  propertyEnergyClassEnum,
  propertyGarageEnum,
  propertyGardenEnum,
  propertyHeatingEnum,
  propertyHeatingFuelEnum,
  propertyHeatingTypeEnum,
  propertyParkingSpaceSubcategoryEnum,
  propertyResidentialSchema,
  propertyResidentialSubcategoryEnum,
} from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CardOption from "@/components/CardOption";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import TabGroup from "@/components/TabGroup";
import { useForm } from "react-hook-form";
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

  const separatorStyle = "h-[1px] bg-slate-200";
  const rowStyle = "row space-x-6 items-baseline justify-between";
  const getFormContent = () => {
    switch (currentStepIndex) {
      case 0:
        const cardStyle =
          "row p-2 items-center justify-start space-x-2 cursor-pointer transition-all duration-150 ease-in-out shadow-none ";
        const emojiDivStyle =
          "flex items-center justify-center w-10 h-10 rounded-full ";
        const emoji = () => {
          const array = Object.values(
            propertyResidentialSubcategoryEnum.Values
          );
          const emojiArray = Array(array.length).fill("🏠");
          return emojiArray;
        };
        // SUBCATEGORY
        const selection = 0;

        return (
          <div className="space-y-4 h-full ">
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
      case 1:
        // COMPOSIZIONE
        return (
          <div className="col space-y-6">
            <div className="grid grid-cols-4 gap-4">
              {/* MQ */}
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
                <FormItem className="row h-fit w-full space-x-4 items-baseline justify-between">
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
                <FormItem className="row h-fit w-full space-x-4 items-baseline justify-between">
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
                <FormItem className="row h-fit w-full space-x-4 items-baseline justify-between">
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
                        placeholder="Insert terraces"
                        type="number"
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
                        placeholder="Insert balconies"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Cantina */}
              <FormField
                control={form.control}
                name="cantina"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cantina</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insert balconies"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Mansarda */}
              <FormField
                control={form.control}
                name="mansarda"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mansarda</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insert mansarda"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Taverna */}
              <FormField
                control={form.control}
                name="taverna"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Taverna</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insert taverna"
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
      case 2:
        // ADDRESS
        return (
          <div className="row space-x-4">
            <div className="w-full bg-slate-100 rounded-lg" />
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
      case 3:
        const icons = [
          <Zap className="text-primary" size={32} />,
          <Sun className="text-primary" size={32} />,
        ];
        const iconStyle =
          "flex items-center justify-center w-12 h-12 rounded-full ";
        const heatingTypeIcons = [
          <Wind className="text-primary" size={32} />,
          <Heater className="text-primary" size={32} />,
        ];

        return (
          <div className="col space-y-6">
            {/** Heating */}
            <FormField
              control={form.control}
              name="heating"
              render={({ field }) => (
                <FormItem className={rowStyle}>
                  <FormLabel>Heating</FormLabel>
                  <TabGroup
                    tabs={Object.values(propertyHeatingEnum.Values).sort()}
                    role={field.name}
                  />
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
                  <div className="grid grid-cols-6 gap-4">
                    {Object.values(propertyHeatingFuelEnum.Values)
                      .sort()
                      .map((item, index) =>
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
                      tabs={Object.values(
                        propertyAirConditioningTypeEnum.Values
                      )}
                      role={"garden"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                          .map(function (item) {
                            return <SelectItem value={item}>{item}</SelectItem>;
                          })}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel className="pl-2">
                          <Separator className="h-[0.8px] w-full bg-black/70 my-2" />
                          2005
                        </SelectLabel>
                        {Object.values(propertyEnergyClassEnum.Values)
                          .sort()
                          .filter((item) => item.includes("2005"))
                          .map(function (item) {
                            const value = item.replace("2005_", "");
                            return (
                              <SelectItem value={value}>{value}</SelectItem>
                            );
                          })}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel className="pl-2">
                          <Separator className="h-[0.8px] w-full bg-black/70 my-2" />
                          2013
                        </SelectLabel>
                        {Object.values(propertyEnergyClassEnum.Values)
                          .sort()
                          .filter((item) => item.includes("2013"))
                          .map(function (item) {
                            const value = item.replace("2013_", "");
                            return (
                              <SelectItem value={value}>{value}</SelectItem>
                            );
                          })}
                      </SelectGroup>
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
                      <SelectItem value="Kitchen only">Kitchen only</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      default:
        return <>DEFAULT</>;
    }
  };

  return (
    <div className="col space-y-4 border rounded-2xl p-4 ">
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
              className="rounded-full w-10 h-10 px-[10px]"
            >
              <ArrowLeft />
            </Button>
            <Button
              asChild
              variant={"secondary"}
              onClick={nextStep}
              className="rounded-full w-10 h-10 px-[10px]"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-full h-full overflow-clip"
        >
          {getFormContent()}
        </form>
      </Form>
    </div>
  );
}

// {currentStepIndex === 3 && (
//   {/** Floor */}
//   <FormField
//   control={form.control}
//   name="floor"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel>Floor</FormLabel>
//       <FormControl>
//         <Input placeholder="Insert floor" {...field} />
//       </FormControl>
//       <FormMessage />
//     </FormItem>
//   )}
// />
// {/** Total floors */}
// <FormField
//   control={form.control}
//   name="total_floors_building"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel>Total floors</FormLabel>
//       <FormControl>
//         <Input placeholder="Insert total floors" {...field} />
//       </FormControl>
//       <FormMessage />
//     </FormItem>
//   )}
// />
// {currentStepIndex === 4 && (
//   <>
//     <div className="grid grid-cols-3 gap-2">
//       {/** External fixtures material */}
//       <FormField
//         control={form.control}
//         name="external_fixtures_material"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>External fixtures material</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select external fixtures material" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="Wood">Wood</SelectItem>
//                 <SelectItem value="Metal">Metal</SelectItem>
//                 <SelectItem value="PVC">PVC</SelectItem>
//                 <SelectItem value="Hybrid">Hybrid</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** External fixtures glass type */}
//       <FormField
//         control={form.control}
//         name="external_fixtures_glass_type"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>External fixtures glass type</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select external fixtures glass type" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="Single">Single</SelectItem>
//                 <SelectItem value="Double">Double</SelectItem>
//                 <SelectItem value="Triple">Triple</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Condition */}
//       <FormField
//         control={form.control}
//         name="condition"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Condition</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select condition" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="New under construction">
//                   New under construction
//                 </SelectItem>
//                 <SelectItem value="Excellent renovated">
//                   Excellent renovated
//                 </SelectItem>
//                 <SelectItem value="Good livable">
//                   Good livable
//                 </SelectItem>
//                 <SelectItem value="To be renovated">
//                   To be renovated
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Exposure */}
//       <FormField
//         control={form.control}
//         name="exposure"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Exposure</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select exposure" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="North">North</SelectItem>
//                 <SelectItem value="South">South</SelectItem>
//                 <SelectItem value="East">East</SelectItem>
//                 <SelectItem value="West">West</SelectItem>
//                 <SelectItem value="North South">North South</SelectItem>
//                 <SelectItem value="North East">North East</SelectItem>
//                 <SelectItem value="North West">North West</SelectItem>
//                 <SelectItem value="South East">South East</SelectItem>
//                 <SelectItem value="South West">South West</SelectItem>
//                 <SelectItem value="East West">East West</SelectItem>
//                 <SelectItem value="North South East">
//                   North South East
//                 </SelectItem>
//                 <SelectItem value="North South West">
//                   North South West
//                 </SelectItem>
//                 <SelectItem value="North East West">
//                   North East West
//                 </SelectItem>
//                 <SelectItem value="South East West">
//                   South East West
//                 </SelectItem>
//                 <SelectItem value="North South East West">
//                   North South East West
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Elevator */}
//       <FormField
//         control={form.control}
//         name="elevators"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Elevator</FormLabel>
//             <Select onValueChange={field.onChange} defaultValue={"ss"}>
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select elevator" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="None">None</SelectItem>
//                 <SelectItem value="Elevator">Elevator</SelectItem>
//                 <SelectItem value="Goods Lift">Goods Lift</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Pool */}
//       <FormField
//         control={form.control}
//         name="pool"
//         render={({ field }) => (
//           <FormItem className="space-y-3">
//             <FormLabel>Pool</FormLabel>
//             <FormControl>
//               <RadioGroup
//                 onValueChange={(value) =>
//                   field.onChange(value === "yes")
//                 }
//                 defaultValue={field.value ? "yes" : "no"}
//                 className="flex flex-col space-y-1"
//               >
//                 <FormItem className="flex items-center space-x-3 space-y-0">
//                   <FormControl>
//                     <RadioGroupItem value="yes" />
//                   </FormControl>
//                   <FormLabel className="font-normal">Yes</FormLabel>
//                 </FormItem>
//                 <FormItem className="flex items-center space-x-3 space-y-0">
//                   <FormControl>
//                     <RadioGroupItem value="no" />
//                   </FormControl>
//                   <FormLabel className="font-normal">No</FormLabel>
//                 </FormItem>
//               </RadioGroup>
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Construction year */}
//       <FormField
//         control={form.control}
//         name="construction_year"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Construction year</FormLabel>
//             <FormControl>
//               <Input
//                 type="number"
//                 placeholder="Insert construction year"
//                 {...field}
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   </>
// )}
