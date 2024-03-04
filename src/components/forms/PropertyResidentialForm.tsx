"use client";

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
import {
  propertyGarageEnum,
  propertyGardenEnum,
  propertyResidentialSchema,
  propertyResidentialSubcategoryEnum,
} from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useFormStep } from "@/context/FormStepContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup } from "@radix-ui/react-dropdown-menu";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Card } from "../ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TabGroup from "../TabGroup";

export default function PropertyResidentialForm() {
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

  const getFormContent = () => {
    const cardStyle =
      "row p-2 items-center justify-start space-x-2 cursor-pointer transition-all duration-150 ease-in-out shadow-none ";
    const emojiDivStyle =
      "flex items-center justify-center w-10 h-10 rounded-full ";
    const emoji = ["🏠", "🏘️", "🏡", "🌳", "🅿️", "🏬"];


    switch (currentStepIndex) {
      case 0:
        // SUBCATEGORY
        const selection = 0

        return (
          <div className="space-y-4 h-full ">
            <Input placeholder="Search here for sub category..." className="text-sm" />
            <div className="grid grid-cols-3 gap-2 ">
              {
                Object.values(propertyResidentialSubcategoryEnum.Values).sort().map(
                  (item, index) => (
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
                          emojiDivStyle + (selection == index ? "bg-orange-300" : "bg-orange-100")
                        }
                      >
                        <h5>{emoji[index]}</h5>
                      </div>
                      <p className="text-pretty">{item}</p>
                    </Card>
                    // <li
                    //   key={subcategory}
                    //   className="row w-full space-x-4 items-center border rounded-md">
                    //   <img src="" alt="subcategory" className="w-1/3 h-full bg-slate-200 text-xs font-extralight" />
                    //   <p className="text-base p-2">{subcategory}</p>
                    // </li>
                  )
                )
              }
            </div>
          </div>

        );
      case 1:
        // COMPOSIZIONE
        return <div className="col space-y-6">
          <div className="row h-fit space-x-4 items-center">
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
          {/** Garden */}
          <FormField
            control={form.control}
            name="garden"
            render={({ field }) => (
              <FormItem className="row h-fit w-full space-x-4 items-baseline justify-start">
                <FormLabel>Garden</FormLabel>
                <TabGroup tabs={Object.values(propertyGardenEnum.Values)} />
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Garage */}
          <FormField
            control={form.control}
            name="garage"
            render={({ field }) => (
              <FormItem className="row h-fit w-full space-x-4 items-baseline justify-start">
                <FormLabel>Garage</FormLabel>
                <TabGroup tabs={Object.values(propertyGarageEnum.Values)} />
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
                    placeholder="Insert number of parking spaces"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Terraces */}
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
          {/** Balcony */}
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
          {/** Cantina */}
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
          {/** Mansarda */}
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
          {/** Taverna */}
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
        </div>;
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
          <div className="row h-fit w-1/4 space-x-2 ">
            <Button asChild variant={"secondary"} onClick={prevStep} className="flex-1">
              <ArrowLeft />
            </Button>
            <Button asChild variant={"secondary"} onClick={nextStep} className="flex-1">
              <ArrowRight />
            </Button>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className=" w-full h-full overflow-clip">{getFormContent()}</form>
      </Form>
    </div>
  );
}


// {currentStepIndex === 1 && (
// <>
//   {/** Mq */}
//   <FormField
//     control={form.control}
//     name="mq"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Area (mq)</FormLabel>
//         <FormControl>
//           <Input placeholder="Insert area" {...field} />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//   <div className="flex space-x-4 items-center">
//     {/** Rooms */}
//     <FormField
//       control={form.control}
//       name="rooms"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Rooms</FormLabel>
//           <FormControl>
//             <Input
//               type="number"
//               placeholder="Number of rooms"
//               {...field}
//             />
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//     {/** Bathrooms */}
//     <FormField
//       control={form.control}
//       name="bathrooms"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Bathrooms</FormLabel>
//           <FormControl>
//             <Input
//               type="number"
//               placeholder="Number of bathrooms"
//               {...field}
//             />
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//     {/** Kitchens */}
//     <FormField
//       control={form.control}
//       name="kitchens"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Kitchens</FormLabel>
//           <FormControl>
//             <Input
//               type="number"
//               placeholder="Number of kitchens"
//               {...field}
//             />
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   </div>
//   <div className="flex space-x-4 items-center">
//     {/** Garden */}
//     <FormField
//       control={form.control}
//       name="garden"
//       render={({ field }) => (
//         <FormItem className="row h-fit space-x-4 items-center justify-center">
//           <FormLabel className="text-base">Garden</FormLabel>
//           <Select
//             onValueChange={field.onChange}
//             defaultValue={field.value}
//           >
//             <FormControl>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a property subcategory" />
//               </SelectTrigger>
//             </FormControl>
//             <SelectContent>
//               {Object.values(propertyGardenEnum.Values).map(
//                 (subcategory) => (
//                   <SelectItem key={subcategory} value={subcategory}>
//                     {subcategory}
//                   </SelectItem>
//                 )
//               )}
//             </SelectContent>
//           </Select>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//     {/** Garage */}
//     <FormField
//       control={form.control}
//       name="garden"
//       render={({ field }) => (
//         <FormItem className="row h-fit space-x-4 items-center justify-center">
//           <FormLabel className="text-base">Garage</FormLabel>
//           <Select
//             onValueChange={field.onChange}
//             defaultValue={field.value}
//           >
//             <FormControl>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a property subcategory" />
//               </SelectTrigger>
//             </FormControl>
//             <SelectContent>
//               {Object.values(propertyGarageEnum.Values).map(
//                 (subcategory) => (
//                   <SelectItem key={subcategory} value={subcategory}>
//                     {subcategory}
//                   </SelectItem>
//                 )
//               )}
//             </SelectContent>
//           </Select>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   </div>
//   {/** Parking spaces */}
//   <FormField
//     control={form.control}
//     name="parking_spaces"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Parking Spaces</FormLabel>
//         <FormControl>
//           <Input
//             placeholder="Insert number of parking spaces"
//             {...field}
//           />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//   {/** Terraces */}
//   <FormField
//     control={form.control}
//     name="terraces"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Terraces</FormLabel>
//         <FormControl>
//           <Input
//             placeholder="Insert terraces"
//             type="number"
//             {...field}
//           />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//   {/** Balcony */}
//   <FormField
//     control={form.control}
//     name="balcony"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Balcony</FormLabel>
//         <FormControl>
//           <Input
//             placeholder="Insert balconies"
//             type="number"
//             {...field}
//           />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//   {/** Cantina */}
//   <FormField
//     control={form.control}
//     name="cantina"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Cantina</FormLabel>
//         <FormControl>
//           <Input
//             placeholder="Insert balconies"
//             type="number"
//             {...field}
//           />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//   {/** Mansarda */}
//   <FormField
//     control={form.control}
//     name="mansarda"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Mansarda</FormLabel>
//         <FormControl>
//           <Input
//             placeholder="Insert mansarda"
//             type="number"
//             {...field}
//           />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//   {/** Taverna */}
//   <FormField
//     control={form.control}
//     name="taverna"
//     render={({ field }) => (
//       <FormItem>
//         <FormLabel>Taverna</FormLabel>
//         <FormControl>
//           <Input
//             placeholder="Insert taverna"
//             type="number"
//             {...field}
//           />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
// </>
// )}
// {currentStepIndex === 2 && (
//   <>
//     <div className="w-full h-1/2 bg-blue-500 rounded-md">MAP</div>
//     <div className="grid grid-cols-4 gap-2">
//       {/** Street name */}
//       <div className="col-span-2">
//         <FormField
//           control={form.control}
//           name="street_name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Street name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Via Giuseppe Verdi" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>

//       {/** Street number */}
//       <FormField
//         control={form.control}
//         name="street_number"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Street number</FormLabel>
//             <FormControl>
//               <Input placeholder="Via Giuseppe Verdi" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** City */}
//       <FormField
//         control={form.control}
//         name="city"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>City</FormLabel>
//             <FormControl>
//               <Input placeholder="Insert city" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** ZIP code */}
//       <FormField
//         control={form.control}
//         name="zip_code"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>ZIP code</FormLabel>
//             <FormControl>
//               <Input placeholder="40100" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Province */}
//       <FormField
//         control={form.control}
//         name="province"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Province</FormLabel>
//             <FormControl>
//               <Input placeholder="Insert province" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Region */}
//       <FormField
//         control={form.control}
//         name="region"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Region</FormLabel>
//             <FormControl>
//               <Input placeholder="Insert region" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Country */}
//       <FormField
//         control={form.control}
//         name="country"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Country</FormLabel>
//             <FormControl>
//               <Input placeholder="Insert country" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   </>
// )}
// {currentStepIndex === 3 && (
//   <>
//     <div className="grid grid-cols-4 gap-2">
//       {/** Floor */}
//       <FormField
//         control={form.control}
//         name="floor"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Floor</FormLabel>
//             <FormControl>
//               <Input placeholder="Insert floor" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Total floors */}
//       <FormField
//         control={form.control}
//         name="total_floors_building"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Total floors</FormLabel>
//             <FormControl>
//               <Input placeholder="Insert total floors" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/** Heating */}
//       <FormField
//         control={form.control}
//         name="heating"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Heating</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select heating" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 {["None", "Independent", "Centralized"].map((item) => (
//                   <SelectItem value={item}>{item}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Heating fuel */}
//       <FormField
//         control={form.control}
//         name="heating_fuel"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Heating fuel</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select heating fuel" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="GPL">GPL</SelectItem>
//                 <SelectItem value="Gas">Gas</SelectItem>
//                 <SelectItem value="Elettrico">Elettrico</SelectItem>
//                 <SelectItem value="Ibrido">Ibrido</SelectItem>
//                 <SelectItem value="Metano">Metano</SelectItem>
//                 <SelectItem value="Geo-termico">Geo-termico</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Heating type */}
//       <FormField
//         control={form.control}
//         name="heating_type"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Heating type</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select heating type" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="A Pavimento">A Pavimento</SelectItem>
//                 <SelectItem value="A Pannelli">A Pannelli</SelectItem>
//                 <SelectItem value="A Parete">A Parete</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Air conditioning */}
//       <FormField
//         control={form.control}
//         name="air_conditioning"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Air conditioning</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select air conditioning" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="Cold only">Cold only</SelectItem>
//                 <SelectItem value="Hot only">Hot only</SelectItem>
//                 <SelectItem value="Cold and hot">
//                   Cold and hot
//                 </SelectItem>
//                 <SelectItem value="None">None</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Energy class */}
//       <FormField
//         control={form.control}
//         name="energy_class"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Energy class</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select energy class" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="Pending">Pending</SelectItem>
//                 <SelectItem value="Exempt">Exempt</SelectItem>
//                 <SelectItem value="Unclassifiable">
//                   Unclassifiable
//                 </SelectItem>
//                 <SelectItem value="A4">A4</SelectItem>
//                 <SelectItem value="A3">A3</SelectItem>
//                 <SelectItem value="A2">A2</SelectItem>
//                 <SelectItem value="A1">A1</SelectItem>
//                 <SelectItem value="A+">A+</SelectItem>
//                 <SelectItem value="A">A</SelectItem>
//                 <SelectItem value="B">B</SelectItem>
//                 <SelectItem value="C">C</SelectItem>
//                 <SelectItem value="D">D</SelectItem>
//                 <SelectItem value="E">E</SelectItem>
//                 <SelectItem value="F">F</SelectItem>
//                 <SelectItem value="G">G</SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       {/** Furnishing */}
//       <FormField
//         control={form.control}
//         name="furnishing"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Furnishing</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select furnishing" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 <SelectItem value="Furnished">Furnished</SelectItem>
//                 <SelectItem value="Unfurnished">Unfurnished</SelectItem>
//                 <SelectItem value="Partially furnished">
//                   Partially furnished
//                 </SelectItem>
//                 <SelectItem value="Kitchen only">
//                   Kitchen only
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   </>
// )}
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
