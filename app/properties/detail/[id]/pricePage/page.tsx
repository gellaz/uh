import DividerHor from "@/components/dividerHor";
import Row from "@/components/property/detail/row";
import { PropertyType } from "@/types/propertyTypes";

export default function PricePage(property: PropertyType | null) {
    const mainStyle = 'flex flex-col h-full w-full overflow-hidden p-4';
    const gridStyle = 'grid grid-cols-2 gap-10 h-full w-full';
    const keys = (property != null ? Object.keys(property?.price) : [])
    const values = (property != null ? Object.values(property?.price) : [])
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
            <h1
                className={'flex flex-col space-y-1 items-center justify-center h-1/4 bg-primary/5 rounded-lg ' + (property?.price.price == undefined ? 'opacity-50' : '')}
            >{property?.price.price ? `€ ${property?.price.price}` : emptyValue}</h1>


            {/* RIGHT SIDE */}
            <div className='flex flex-col space-y-4'>
                {
                    keys.map((item, i) => <Row
                        key={i}
                        title={textCleaning(item)}
                        value={values[i] != null ? values[i].toString() : emptyValue}
                        emptyValue={emptyValue}
                    />)
                }
                {/* <Row title={'Prezzo al mq'} value={`€ ${property?.price_mq ?? unknownValue}`} />
                <DividerHor />
                <Row title={'Spese condominiali'} value={'150'} />
                <DividerHor />
                <Row title={'prezzo/mq (REA min)'} value={'0'} />
                <DividerHor />
                <Row title={'prezzo/mq (REA max)'} value={'0'} />
                <DividerHor /> */}
            </div>
        </div>
    </main>
}