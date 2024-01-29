import InputRow from "@/components/property/new/inputRow";
import { useState } from "react";
import { MdPool, MdOutlinePark, MdOutlineLocalParking, MdOutlineFireplace } from "react-icons/md";


interface amenitiesFormState {
    garden: boolean,
    fireplace: boolean,
    parking: boolean,
    pool: boolean,
    terrace: boolean,
}

export default function AmenitiesPage() {
    const formStyle = 'flex flex-col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-4'
    const iconSize = 20
    const [formData, setFormData] = useState<amenitiesFormState>()

    return (
        <form className={formStyle}>
            <InputRow className={inputStyle} icon={<MdOutlinePark size={iconSize} />} title={'Garden'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<MdOutlineFireplace size={iconSize} />} title={'Fireplace'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<MdOutlineLocalParking size={iconSize} />} title={'Parking'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<MdPool size={iconSize} />} title={'Pool'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<MdOutlinePark size={iconSize} color={'white'} />} title={'Terrace'} type={'checkbox'} />
        </form>
    );
}