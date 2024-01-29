import DividerHor from "@/components/dividerHor";
import Row from "@/components/property/detail/row";
import { PropertyType } from "@/types/propertyTypes";

export default function LocationPage(property: PropertyType | null) {
    const gridStyle = 'grid grid-cols-2 gap-10 h-full w-full p-4';
    const colStyle = 'flex flex-col h-full w-full overflow-hidden space-y-4';
    const keys = (property != null ? Object.keys(property?.address) : [])
    const values = (property != null ? Object.values(property?.address) : [])
    const emptyValue = 'No data available'

    // CAPITALIZED AND CLEAN STRING 
    const textCleaning = (value: string) => {
        const cleanned = value.replaceAll('_', ' ')
        const letter = cleanned.charAt(0).toUpperCase()
        const slice = cleanned.slice(1)

        return letter + slice
    }

    return <main className={gridStyle}>
        <div className='flex flex-1 w-full h-1/3 rounded-lg bg-primary/5' />
        <div className={colStyle}>
            {
                keys.map((item, i) => <Row
                    key={i}
                    title={textCleaning(item)}
                    value={values[i]}
                    emptyValue={emptyValue}
                />)
            }
        </div>
    </main>
}