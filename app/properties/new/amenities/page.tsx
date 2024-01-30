import InputRow from "@/components/property/new/inputRow";
import { useState } from "react";
import { MdPool } from 'react-icons/md';
import { Trees, Flame, ParkingSquare } from 'lucide-react';



interface amenitiesFormState {
    garden: boolean,
    fireplace: boolean,
    parking: boolean,
    pool: boolean,
    terrace: boolean,
}

export default function AmenitiesPage() {
    const formStyle = 'col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-4'
    const iconSize = 20
    const [formData, setFormData] = useState<amenitiesFormState>()

    return (
        <form className={formStyle}>
            <InputRow className={inputStyle} icon={<Trees size={iconSize} />} title={'Garden'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<Flame size={iconSize} />} title={'Fireplace'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<ParkingSquare size={iconSize} />} title={'Parking'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<MdPool size={iconSize} />} title={'Pool'} type={'checkbox'} />
            <InputRow className={inputStyle} title={'Terrace'} type={'checkbox'} />
        </form>
    );
}