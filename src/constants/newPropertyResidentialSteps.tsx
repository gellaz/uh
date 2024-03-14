import { FormStep, FormStepperStatusEnum } from "@/context/FormStepContext";

export const formSteps: FormStep[] = [
  {
    id: "subcategory_and_property_class",
    title: "Subcategory & Property Class",
    description:
      "Select the type of residential property you want to add and the property class",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "composition",
    title: "Composition",
    description: "Fill out the basic information of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "features",
    title: "Features",
    description: "Fill out the features of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "location",
    title: "Location",
    description: "Fill out the location of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "heating_and_air_conditioning",
    title: "Heating & Air Conditioning",
    description:
      "Fill out the heating and air conditioning information of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "energy_certification",
    title: "Energy Certification",
    description: "Fill out the energy certification of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "additional_features",
    title: "Additional Features",
    description: "Fill out the energy certification of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "cadastral_data",
    title: "Cadastral Data",
    description: "Fill out the cadastral data of the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "description",
    title: "Description",
    description: "Add description to the property",
    status: FormStepperStatusEnum.PENDING,
  },
  {
    id: "media",
    title: "Media",
    description: "Add media (photos, videos, plans, ...) to the property",
    status: FormStepperStatusEnum.PENDING,
  },
];
