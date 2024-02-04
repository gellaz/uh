'use client'

import { PropertiesService } from "@/utils/a/propertyService";
import { useState, useEffect } from 'react'
import PropertyCard from "@/components/property/propertyCard";
import TabController from "@/components/tabController";
import { Plus, Filter } from 'lucide-react'
import { Property } from "@/types/properties";
import { getProperties } from "@/actions/property/getProperty";



export default function PropertyPage() {
    const [error, setError] = useState<string | null>(null)
    const [properties, setProperties] = useState<Property[] | null>(null)
    const result = await getProperties()

    // DATA FETCHING
    useEffect(() => {

    }, [])

    return <div className='flex flex-col h-full w-full p-4 space-y-4'>
        <div className='flex flex-row space-x-4 w-full items-center justify-between'>
            {/* <input
                type="search"
                name='searchInput'
                id='searchInput'
                className={'border rounded-md p-2 text-sm hover:bg-slate-50 hover:border-black '}
                placeholder='Cerca qui...'
            /> */}
            <TabController className='flex-1' tabs={['Tutti', 'Affitto', 'Vendita']} selected={0} onTabChange={() => { }} />
            <a className='flex w-9 h-9 p-2 rounded-full border border-primary items-center justify-center hover:bg-primary hover:text-white' href='properties/new/'>
                <Plus />
            </a>
            <a className='flex w-9 h-9 p-2 rounded-full border border-primary items-center justify-center hover:bg-primary hover:text-white' href="">
                <Filter />
            </a>

        </div>
        <div className='flex grid-cols-4 gap-4 w-full h-full'>
            {
                (error != null)
                    ? <p>{error}</p>
                    : (properties != null)
                        ? properties.map(
                            (item) => <PropertyCard property={item} />
                            // <PropertyTile key={item.id} data={item} isEditing={false} />

                        )
                        : <div className='flex flex-col w-full h-full items-center justify-center opacity-60'>
                            <p className='text-sm font-normal'>{'Non hai ancora caricato una proprietà'}</p>
                            <span className='text-sm font-normal'>{'Clicca il sul pulsante \"Nuova proprietà\"'}</span>

                        </div>
            }
        </div>
    </div>
}


