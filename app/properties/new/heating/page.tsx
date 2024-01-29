import InputRow from "@/components/property/new/inputRow";
import { useState } from "react";


interface heatingFormState {
    ipe: boolean,
    type: boolean,
    fuel_source: boolean,
    energy_class: boolean,
}

export default function HeatingPage() {
    const formStyle = 'flex flex-col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-4'
    const iconSize = 20
    const [formData, setFormData] = useState<heatingFormState>()

    return (
        <form className={formStyle}>
            <InputRow className={'w-2/3'} title={'IPE'} type={'file'} />
            <InputRow className={inputStyle} title={'Tipo'} type={'checkbox'} />
            <InputRow className={inputStyle} title={'Carburante'} type={'checkbox'} />
            <InputRow className={inputStyle} title={'Classe energertica'} type={'checkbox'} />
        </form>
    );
}