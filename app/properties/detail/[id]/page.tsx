'use client'

import { useEffect, useState } from "react";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { PropertiesService } from "@/utils/a/propertyService";
import { useRouter } from "next/navigation";
import { Edit, Share, Megaphone, Globe2, LockKeyhole, BadgeCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import TabController from "@/components/tabController";
import GeneralPage from "./generalPage/page";
import FeaturesPage from "./featuresPage/page";
import PricePage from "./pricePage/page";
import HeatingPage from "./heatingPage/page";
import Image from 'next/image'
import Image1 from '/public/image1.jpg';
import LocationPage from "./locationPage/page";
import AccesibilityPage from "./accessibilityPage/page";
import IllustrationCard from "@/components/property/illustrationCard";
import { Property } from "@/types/properties";
import { supabaseClient } from "@/utils/supabase/client";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
    const [tabSelected, setTabSelected] = useState(0)
    const [property, setProperty] = useState<Property>()
    const [error, setError] = useState<string | null>()
    const paragraphStyle = 'text-sm font-normal';
    const paragraphStyle2 = 'text-sm font-semibold';
    const imageStyle = 'bg-slate-100 w-full h-full rounded-lg shadow-md border-[0.4px] border-primary/10';
    const getAddress = `${property?.address}`;
    const unknownValue = 'No data available'
    const iconSize = 18
    const privateButton = <Button variant={'outline'}><Globe2 size={iconSize} className='mr-2' />Privato</Button>;
    const promoteButton = <Button><Megaphone size={iconSize} className='mr-2' />Promuovi</Button>;
    const verifyButton = <Button className='bg-cyan-500 hover:bg-cyan-600'><BadgeCheck size={iconSize} className='mr-2' />Verifica</Button>;

    // DATA FETCHING
    useEffect(() => {

    }, [])



    // TAB CONTENT PAGES
    const tabContents = [GeneralPage(property!), FeaturesPage(property!), HeatingPage(property!), AccesibilityPage(property!), PricePage(property!), LocationPage(property!)];

    // UPDATE THE SELECTED TAB INDEX
    function handleTabChange(index: number) {
        setTabSelected(index);
    }

    // CONVERT DATE-TIME WITH SPECIFIC LOCAL FORMAT
    function handleLocalDate(date: string) {
        return new Date(date).toLocaleString()
    }

    return < main className='flex flex-row space-x-4 h-full w-full p-4' >

        {/* LEFT SIDE - CHANGE BASED ON TAB CONTROLLER */}
        < div className='flex-1 flex-col h-full space-y-4' >
            {/* <Button
                variant={'ghost'}
                onClick={() => { router.back() }}
                className='flex flex-row space-x-1'>
                <ArrowLeft size={20} />
                <p className='text-sm font-semibold'>{'Back'}</p>
            </Button> */}

            {/* PICTURES */}
            < div className='flex flex-row space-x-2 h-[180px] w-full'>
                <Image src={Image1} alt={"image 1"} className='w-5/6 h-full rounded-lg border-[0.4px] border-primary/10' />
                <div className='grid grid-cols-3 gap-2 w-full h-full' >
                    <div className='grid grid-rows-2 gap-2 w-full h-full overflow-hidden'>
                        <div className={imageStyle} />
                        <div className={imageStyle} />
                    </div>
                    <div className='grid grid-rows-2 gap-2 w-full h-full overflow-hidden'>
                        <div className={imageStyle} />
                        <div className={imageStyle} />
                    </div>
                    <div className='grid grid-rows-2 gap-2 w-full h-full overflow-hidden'>
                        <div className={imageStyle} />
                        <div className={imageStyle} />
                    </div>
                </div>
            </div>

            {/* NAME & ADDRESS */}
            <div className='flex flex-row space-x-4 justify-between items-center w-full'>
                <div className='flex flex-1 flex-col space-y-1'>
                    <h1>{property?.name}</h1>
                    <div className='flex flex-row space-x-2 items-center'>
                        {/* ADDRESS */}
                        <p className={paragraphStyle}>{getAddress}</p>
                        <DividerVerticalIcon color="gray" />
                        <p className={paragraphStyle + ' opacity-50'}>{'Creata: '}</p>
                        <p className={paragraphStyle}>{handleLocalDate(property?.inserted_at ?? unknownValue)}</p>
                        <DividerVerticalIcon color="gray" />
                        <p className={paragraphStyle + ' opacity-50'}>{'Ultima modifica: '}</p>
                        <p className={paragraphStyle}>{handleLocalDate(property?.updated_at ?? unknownValue)}</p>
                        <DividerVerticalIcon color="gray" />
                        <p className={paragraphStyle + ' opacity-50'}>{'Stato: '}</p>
                        <p className={paragraphStyle2}>{property?.status}</p>
                    </div>
                </div>
            </div>

            {/* TAB BAR */}
            <TabController
                tabs={['Overview', 'Caratteristiche', 'Riscaldamento', 'Accessibilità', 'Prezzo', 'Locazione']}
                onTabChange={handleTabChange}
                selected={tabSelected}
            />

            {/* TAB CONTENTS */}
            <div className='overflow-y-auto w-full h-screen'>
                {
                    tabContents[tabSelected]
                }
            </div>
        </div >

        {/* RIGHT SIDE - FIXED */}
        < div className='flex flex-col w-[26%] space-y-4' >
            <div className='flex flex-row space-x-2 items-center justify-between'>
                <Button className='flex-1' variant={'outline'}>
                    <Edit size={iconSize} className='mr-2' />
                    {'Modifica'}
                </Button>
                <Button className='flex-1' variant={'outline'}>
                    <Share size={iconSize} className='mr-2' />
                    {'Condividi'}
                </Button>
            </div>
            <IllustrationCard title={'Visibilità'} message={'Pubblica il tuo annuncio o rimuovilo dal mercato in modo che sia visibile solo a te '} element={privateButton} />
            <IllustrationCard title={'Promuovi immobile'} message={'Dai più visibilità al tuo immobile imposta una durata per la quale il tuo immobile verrà collocato tra i primi annunci visualizzati'} element={promoteButton} />
            <IllustrationCard title={'Verifica immobile'} message={'Ricevi la spunta blu di veridicità di quello che hai dichiarato tramite visura catastale o caricando le informazioni catastali in tuo possesso'} element={verifyButton} />
        </div >

    </main >
}
