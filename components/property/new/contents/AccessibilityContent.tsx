import InputRow from "@/components/property/new/inputRow";
import { Accessibility as Wheelchair } from "lucide-react";

export default function AccessibilityPage() {
    const formStyle = 'col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-4'
    const iconSize = 20
    // const [formData, setFormData] = useState<AccessibilityFormState>()

    return (
        <form className={formStyle}>
            <InputRow className={inputStyle} icon={<Wheelchair size={iconSize} color="white" />} title={'Ascensore'} type={'checkbox'} />
            <InputRow className={inputStyle} icon={<Wheelchair size={iconSize} />} title={'Accesso carrozzine'} type={'checkbox'} />
        </form>
    )
}