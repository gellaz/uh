import { PropertyType } from "@/types/propertyTypes"
import { MdChevronRight } from "react-icons/md"

interface props {
    property: PropertyType
}

export default function DashboardProperty(props: props) {
    return <ol className='flex flex-row items-center justify-between space-x-2 px-4 py-3 hover:bg-slate-50'>
        <div className='w-8 h-8 rounded-full bg-primary/10' />
        <p className='w-[28%] text-sm font-medium'>{props.property.name}</p>
        <p className='flex-1 text-sm'>{props.property.address.street + ' ' + props.property.address.street_number}</p>
        <p className='w-[24%] text-sm'>{props.property.address.city}</p>
        <MdChevronRight color={'gray'} />
    </ol>
}