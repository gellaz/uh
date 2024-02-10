import { Address, Property } from "@/types/properties";
import Image from 'next/image';
import { ChevronDown } from 'lucide-react'

interface DashboardPropertyProps {
    property: Property
}

export default function DashboardProperty({ property }: DashboardPropertyProps) {
    const divStyle = 'col items-center justify-between space-x-2 px-4 py-3 hover:bg-slate-50'
    const address = property.address as Address

    return <div className='col border rounded-md h-fit w-full overflow-hidden'>
        <Image src={'/public/image1.jpg'} alt={''} width={10} height={40} className='h-14 w-full bg-slate-100' />
        <div className='col p-2 h-fit'>
            <p>{property.name}</p>
            <label className='text-gray-500'>{address.street + address.street_number}</label>
        </div>
    </div>

}