import Row from "@/components/property/detail/row";
import { PropertyType } from "@/types/propertyTypes";
import { MdPool, MdOutlinePark, MdOutlineLocalParking, MdOutlineFireplace } from "react-icons/md";




export default function FeaturesPage(property: PropertyType) {
    const mainStyle = 'flex flex-col h-full w-full p-4 items-center';
    const dataStyle = 'flex flex-col w-[48%] space-y-4 overflow-scroll';
    const emptyValue = 'No data available'
    const iconSize = 20
    const icons = [<MdPool key={1} size={iconSize} />, <MdOutlinePark key={2} size={iconSize} />, <MdOutlineLocalParking key={3} size={iconSize} />, <MdOutlineFireplace key={4} size={iconSize} color={'white'} />, <MdOutlineFireplace key={4} size={iconSize} />]
    const keys = (property != null) ? Object.keys(property.features) : []
    const values = (property != null) ? Object.values(property.features) : []

    // CAPITALIZED AND CLEAN STRING 
    const textCleaning = (value: string) => {
        const cleanned = value.replaceAll('_', ' ')
        const letter = cleanned.charAt(0).toUpperCase()
        const slice = cleanned.slice(1)

        return letter + slice
    }

    return <main className={mainStyle}>
        <div className={dataStyle}>
            {
                keys.map(
                    (item, i) => {
                        return <Row
                            key={item}
                            icon={icons[i]}
                            title={textCleaning(item)}
                            value={values[i] ?? emptyValue}
                            emptyValue={emptyValue}
                        />
                    })
            }
        </div>
    </main>
}