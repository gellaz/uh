'use client'

import NavBarNewProperty from "@/components/property/NavBar";
import TabController from "@/components/tabController";
import { useContext, useState, createContext } from "react";
import CategoryPage from "../../../components/property/new/category/page";
import RoomsPage from "../../../components/property/new/rooms/page";
import PricePage from "../../../components/property/new/price/page";
import MediaPage from "../../../components/property/new/media/page";
import LocationPage from "../../../components/property/new/location/page";
import { Button } from "@/components/ui/button";
import AmenitiesPage from "../../../components/property/new/amenities/page";
import HeatingPage from "../../../components/property/new/heating/page";
import AccessibilityPage from "../../../components/property/new/accessibility/page";
import { useFormState } from "react-dom";
import { z } from "zod"

// CREATE CONTEXT - STATE MANAGAMANET
export const newPropertyContext = createContext({ category: -1, subcategory: -1 });

export default function NewPropertyPage() {
    const [tabSelected, setTabSelected] = useState(0)
    const tabs = ['Categoria', 'Locali', 'Caratteristiche', 'Riscaldamento', 'Accessibilità', 'Prezzo', 'Media & planimetria', 'Locazione', 'Descrizione']
    const contentViews = [<CategoryPage />, <RoomsPage />, <AmenitiesPage />, <HeatingPage />, <AccessibilityPage />, <PricePage />, <MediaPage />, <LocationPage />]
    const context = useContext(newPropertyContext)
    // const [formData, setFormData] = useFormState();
    const formSchema = z.object({

    },)


    return <div className='w-screen h-full flex flex-col p-4 bg-white'>
        {/* <NavBarNewProperty /> */}
        <TabController
            className='pt-0'
            tabs={tabs}
            selected={tabSelected}
            onTabChange={handleOnTabChange}
        />

        <form >
            {
                // CONTENT VIEW
                contentViews[tabSelected]
            }
        </form>
        <footer className='flex w-full h-32 items-center justify-center px-10 pb-10'>
            <div className='flex flex-row w-1/2 space-x-4'>
                <Button className='flex-1' variant={'outline'} onClick={() => {
                    if (tabSelected != 0) {
                        setTabSelected(tabSelected - 1)
                    }
                }}>{tabSelected == 0 ? 'Cancella' : 'Indietro'}</Button>
                <Button className='flex-1' onClick={() => {
                    if (tabSelected != contentViews.length) {
                        setTabSelected(tabSelected + 1)
                    }
                }}>{tabSelected != contentViews.length ? 'Avanti' : 'Crea'}</Button>
            </div>
        </footer>
    </div>

    // FUNCTIONS
    function handleOnTabChange(index: number) {
        setTabSelected(index)
    }
}