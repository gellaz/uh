import InputRow from "@/components/property/new/inputRow";
import { useState } from "react";
import { MdWheelchairPickup, MdOutlineElevator } from "react-icons/md";

interface AccessibilityFormState {
    elevator: boolean,
    wheelchair: boolean,
}

export default function AccessibilityPage() {
    const formStyle = 'flex flex-col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-4'
    const iconSize = 20
    const [formData, setFormData] = useState<AccessibilityFormState>()

    return (
        <form className={formStyle}>
            <InputRow className={inputStyle} icon={<MdOutlineElevator size={iconSize} />} title={'Ascensore'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<MdWheelchairPickup size={iconSize} />} title={'Accesso carrozzine'} type={'checkbox'} />
        </form>
    )
}