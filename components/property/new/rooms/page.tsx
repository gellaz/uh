
import InputRow from '@/components/property/new/inputRow';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { BedDouble, Bath, Utensils, Bed } from 'lucide-react';


interface featuresFormState {
    beds: number;
    baths: number;
    kitchen: number;
}

export default function RoomsPage() {
    const formStyle = 'flex flex-col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-1/6'
    const iconSize = 20;
    // const [formData, setFormData] = useFormState((), { beds: 0, baths: 0, kitchen: 0 });

    return <form className={formStyle} >
        <InputRow className={inputStyle} icon={<Bath size={iconSize} />} title={'Bagni'} subtitle={'(usa i decimali per identificare un bagno senda la doccia)'} type={'number'} placeholder='0' />
        <InputRow className={inputStyle} icon={<BedDouble size={iconSize} />} title={'Camere'} type={'number'} placeholder='0' />
        <InputRow className={inputStyle} icon={<Utensils size={iconSize} />} title={'Cucina'} type={'number'} placeholder='0' />
    </form>


}


