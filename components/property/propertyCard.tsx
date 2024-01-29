import { PropertyType } from "@/models/property/type";
import Image from 'next/image';
import image1 from "/public/image1.jpg"
import { Ruler, BedDouble, Bath } from 'lucide-react'

interface PropertyCardProps {
    property: PropertyType,
}

export default function PropertyCard(prop: PropertyCardProps) {
    const iconSize = 16
    const featuresStyle = 'flex flex-row space-x-3 px-3 py-[5.2px] w-fit items-center rounded-full bg-slate-100 border border-slate-200';
    const icons = [<Ruler size={iconSize} />, <BedDouble size={iconSize} />, <Bath size={iconSize} />]
    const values = [prop.property?.mq, prop.property?.beds, prop.property?.baths]
    const price = new Intl.NumberFormat('it-IT', { minimumFractionDigits: 0 }).format(prop.property?.price.price);
    const price_mq = new Intl.NumberFormat('it-IT', { minimumFractionDigits: 2 }).format(prop.property?.price.price_mq);


    return <a
        className='flex flex-col h-fit w-[24%] border border-slate-200 rounded-md shadow-md p-2 space-y-4 bg-white cursor-pointer hover:border-black'
        href={`properties/detail/${prop.property?.id}`}
    >
        <Image src={image1} alt={""} style={{ objectFit: 'cover' }} className='bg-slate-100 w-full h-[120px] rounded-md' />

        {/* NAME & ID */}
        <div className='flex flex-col space-y-0'>
            <p className='text-base font-semibold'>{prop.property?.name}</p>
            <p className='text-sm font-normal'>{prop.property?.address.street + ' ' + prop.property?.address.street_number + ', ' + prop.property?.address.city}</p>
        </div>
        <div className='w-full h-[1px] bg-slate-200' />
        {/* FEATURES */}
        <div className='grid grid-cols-1 grid-flow-col-dense gap-1 w-fit'>
            {
                icons.map(
                    (item, i) => <div className={featuresStyle} >
                        {item}
                        <p className={'text-sm font-medium'}>{`${values[i]}`}
                            {i == 0 ? <span className='text-xs font-normal'>{' mq'}</span> : null}
                        </p>
                    </div>
                )

            }
        </div>
        <div className='w-full h-[1px] bg-slate-200' />
        <div className='flex flex-row space-x-2 items-center justify-between'>
            <h5> {`€ ${price}`}</h5>
            <p className='text-sm font-normal text-black'>{`€ ${price_mq}`}
                <span className='text-xs font-normal '>{` / mq`}</span>
            </p>
        </div>

    </a >
}