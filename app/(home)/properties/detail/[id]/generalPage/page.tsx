
import Row from "@/components/property/detail/row";
import { Property } from "@/types/properties";
import { MdOutlineBathtub, MdOutlineKingBed, MdOutlineKitchen } from "react-icons/md";
import { RxWidth } from "react-icons/rx";

export default function GeneralPage(property: Property) {
    const mainStyle = 'flex flex-col h-[1000px] w-full overflow-hidden space-y-10 p-4';
    const gridStyle = 'grid grid-cols-2 gap-10';
    const iconSize = 18
    const keys = (property != null ? Object.keys(property) : [])
    const values = (property != null ? Object.values(property) : [])
    const keysLeft = keys.slice(3, 8)
    const valuesLeft = values.slice(3, 8)
    const iconsRight = [<RxWidth key={1} size={iconSize} />, <MdOutlineKingBed key={2} size={iconSize} />, <MdOutlineBathtub key={3} size={iconSize} />, <MdOutlineKitchen key={4} size={iconSize} />]
    const keysRight = keys.slice(9, 13)
    const valuesRight = values.slice(9, 13)

    const emptyValue = 'No data available'

    // CAPITALIZED AND CLEAN STRING 
    const textCleaning = (value: string) => {
        const cleanned = value.replaceAll('_', ' ')
        const letter = cleanned.charAt(0).toUpperCase()
        const slice = cleanned.slice(1)
        return letter + slice
    }

    return <main className={mainStyle}>
        <div className={gridStyle}>

            {/* LEFT SIDE */}
            <div className='flex-col space-y-4'>
                {
                    keysLeft.map((item, i) => { return <Row key={i} title={textCleaning(item)} value={valuesLeft[i]?.toString() ?? emptyValue} /> })
                }
                {/* <Row title={'Categoria'} value={property.category?.toString() ?? unknownValue} />
                <Row title={'Subcategoria'} value={property.subcategory?.toString() ?? unknownValue} />
                <Row icon={<FaStairs size={iconSize} />} title={'Piano'} value={property.floor?.toString() ?? unknownValue} /> */}
            </div>

            {/* RIGHT SIDE */}
            <div className='flex-col space-y-4'>
                {
                    keysRight.map((item, i) => { return <Row key={i} icon={iconsRight[i]} title={textCleaning(item)} value={valuesRight[i]?.toString() ?? emptyValue} emptyValue={emptyValue} /> })
                }
                {/* <Row icon={<RxWidth size={iconSize} />} title={'Superficie (mq)'} value={property.mq?.toString() ?? unknownValue} />
                <Row icon={<MdOutlineKingBed size={iconSize} />} title={'Locali'} value={property.beds?.toString() ?? unknownValue} />
                <Row icon={<MdOutlineBathtub size={iconSize} />} title={'Bagni'} value={property.baths?.toString() ?? unknownValue} /> */}
            </div>
        </div>

        {/* DESCRIPTION */}
        <div className='flex flex-col space-y-2 h-fit'>
            <p className='text-sm text-medium opacity-50'>Descrizione</p>
            <p className={
                property?.description == null
                    ? 'opacity-50' : ''}
            >{property?.description ?? emptyValue}</p>
        </div>
    </main >
}
