import Row from "@/components/property/detail/row";
import { PropertyType } from "@/types/propertyTypes";

export default function HeatingPage(property: PropertyType) {
    const mainStyle = 'flex flex-col h-full w-full p-4 items-center';
    const dataStyle = 'flex flex-col w-[48%] space-y-4 overflow-scroll';
    const keys = (property != null) ? Object.keys(property.heating) : []
    const values = (property != null) ? Object.values(property.heating) : []
    const emptyValue = 'No data available'

    // CAPITALIZED AND CLEAN STRING 
    const textCleaning = (value: string) => {
        const cleanned = value.replaceAll('_', ' ')
        const letter = cleanned.charAt(0).toUpperCase()
        const slice = cleanned.slice(1)

        return letter + slice
    }


    return <div className={mainStyle}>
        <div className={dataStyle}>
            {
                keys.map(
                    (item, i) => {
                        return <Row
                            key={item}
                            title={textCleaning(item)}
                            value={values[i]?.toString() ?? emptyValue}
                            className='border-b-[0.4px] border-black'
                            emptyValue={emptyValue}
                        />
                    })
            }
        </div>
    </div>
}