import Row from "@/components/property/detail/row";
import InputRow from "@/components/property/new/inputRow";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function RenderSelect(values: string[]) {
    return <Select>
        <SelectTrigger className="w-fit">
            <SelectValue placeholder="Seleziona tipo di riscaldamento" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                {
                    values.map(
                        (item) => <SelectItem value={item}>{item}</SelectItem>
                    )
                }
            </SelectGroup>
        </SelectContent>
    </Select>
}

export default function HeatingPage() {
    const types = ['Autonomo', 'Centralizzato', 'Conta calorie', 'Riscaldamento a gas', 'Riscaldamento a pavimento', 'Riscaldamento a parete', 'Riscaldamento a soffitto', 'Riscaldamento a ventilconvettori', 'Riscaldamento a termosifoni', 'Riscaldamento a stufa', 'Riscaldamento a pellet', 'Riscaldamento a legna', 'Riscaldamento a carbone', 'Riscaldamento a biomassa', 'Riscaldamento a aria', 'Riscaldamento a infrarossi', 'Riscaldamento a pannelli radianti', 'Riscaldamento a pannelli radianti a pavimento', 'Riscaldamento a pannelli radianti a parete', 'Riscaldamento a pannelli radianti a soffitto', 'Riscaldamento a pannelli radianti a ventilconvettori', 'Riscaldamento a pannelli radianti a termosifoni', 'Riscaldamento a pannelli radianti a stufa', 'Riscaldamento a pannelli radianti a pellet', 'Riscaldamento a pannelli radianti a legna', 'Riscaldamento a pannelli radianti a carbone', 'Riscaldamento a pannelli radianti a biomassa', 'Riscaldamento a pannelli radianti a aria', 'Riscaldamento a pannelli radianti a infrarossi', 'Riscaldamento a pannelli radianti a pannelli radianti'];
    const fuels = ['Gas', 'GPL', 'Elettrico']
    const formStyle = 'col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-4'

    return (
        <form className={formStyle}>
            <InputRow className={'w-2/3'} title={'IPE'} type={'file'} />
            <Row className={'w-2/4'} title={'Tipo'} value={RenderSelect(types)}></Row>
            <Row className={'w-2/4'} title={'Carburante'} value={RenderSelect(fuels)}></Row>
            <InputRow className={inputStyle} title={'Carburante'} type={'checkbox'} />
            <InputRow className={inputStyle} title={'Classe energertica'} type={'checkbox'} />
        </form>
    );
}