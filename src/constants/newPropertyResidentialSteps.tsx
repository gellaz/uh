import { FormStep, FormStepperStatusEnum } from "@/context/FormStepContext";


export const formSteps: FormStep[] = [
    {
        title: "Subcategory",
        description: 'Select the type of property you want to add',
        status: FormStepperStatusEnum.PENDING,
    },
    {
        title: "Composition",
        description: 'Fill out the basic information of the property',
        status: FormStepperStatusEnum.PENDING,

    },
    {
        title: "Address",
        description: 'Fill out the address of the property',
        status: FormStepperStatusEnum.COMPLETED,

    },
    {
        title: "Heating and AC",
        description: 'Fill out the heating and AC information of the property',
        status: FormStepperStatusEnum.ERROR,
    },
    {
        title: "Energy certification",
        description: 'Fill out the energy certification of the property',
        status: FormStepperStatusEnum.PENDING,
    },
    {
        title: "Amenities",
        description: 'Fill out the amenities of the property',
        status: FormStepperStatusEnum.PENDING,
    },
    {
        title: "Features",
        description: 'Fill out the features of the property',
        status: FormStepperStatusEnum.PENDING,
    },
    {
        title: "Cadastral",
        description: 'Fill out the cadastral information of the property',
        status: FormStepperStatusEnum.PENDING,
    },
    {
        title: "Media",
        description: 'Add media to the property',
        status: FormStepperStatusEnum.PENDING,
    },
];