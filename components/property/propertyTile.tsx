import Image from 'next/image'
import { PropertyType } from "@/models/property/type"
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import Image1 from '/public/image1.jpg';
import Image2 from '/public/image2.jpg';
import Image3 from '/public/image3.jpg';


interface propertyProps {
    data: PropertyType,
    isEditing: boolean,
}

export default function PropertyTile(props: propertyProps) {
    const router = useRouter();
    const featuresStyle = 'w-14 text-center text-sm font-medium'

    // PUSH PROPERTY DETAIL ONCE THE DIV GET CLICKED
    function pushPropertyDetail() {
        router.push(`properties/detail/${props.data.id}`)
    }

    return <div
        className='flex flex-row bg-white border border-slate-300 rounded-sm shadow-sm space-x-4 overflow-clip cursor-pointer hover:border-black '
        onClick={() => pushPropertyDetail()}
    >
        <Image
            src={Image2}
            alt={""}
            width={160}

            style={{ objectFit: 'cover' }}
            className=' w-[160px] h-[80px] bg-slate-100'
        />
        <div className='flex flex-1 flex-row space-x-4 items-center justify-between w-full h-full p-4'>
            <div className='flex flex-1 flex-col space-y-1'>
                <p className='font-medium'>{props.data.name}</p>
                <label className='w-5/6 opacity-60 truncate '>#{props.data.id}</label>
            </div>
            <p className='flex-1 flex text-sm'>{`${props.data.address.street ?? 'street'} ${props.data.address.street_number ?? 'street_number'}`}</p>
            <p className='flex-1 flex text-sm'>{props.data.address.city ?? 'city'}</p>
            <div className='flex flex-row space-x-4 '>
                <p className={featuresStyle}>{props.data.mq ?? 'mq'}</p>
                <p className={featuresStyle}>{props.data.beds ?? 'beds'}</p>
                <p className={featuresStyle}>{props.data.baths ?? 'baths'}</p>
            </div>
            <p className='w-20 text-center font-semibold text-sm'>Draft</p>



            {props.isEditing ? <input type='checkbox' name='' id='' /> : <FaChevronRight size={'14'} color={'gray'} />}
        </div>
    </div >
}


