'use client'

import NavBarNewProperty from "@/components/property/NavBar";
import TabController from "@/components/tabController";
import { useContext, useState, createContext } from "react";
import CategoryPage from "./category/page";
import RoomsPage from "./rooms/page";
import PricePage from "./price/page";
import MediaPage from "./media/page";
import LocationPage from "./location/page";
import { Button } from "@/components/ui/button";
import AmenitiesPage from "./amenities/page";
import HeatingPage from "./heating/page";
import AccessibilityPage from "./accessibility/page";

// CREATE CONTEXT - STATE MANAGAMANET
export const newPropertyContext = createContext({ category: -1, subcategory: -1 });

export default function NewPropertyPage() {
    const [tabSelected, setTabSelected] = useState(0)
    const tabs = ['Categoria', 'Locali', 'Caratteristiche', 'Riscaldamento', 'Accessibilità', 'Prezzo', 'Media & planimetria', 'Locazione', 'Descrizione']
    const contentViews = [CategoryPage(), RoomsPage(), AmenitiesPage(), HeatingPage(), AccessibilityPage(), PricePage(), MediaPage(), LocationPage()]
    const context = useContext(newPropertyContext)


    return <div className='w-screen h-full flex flex-col p-4 bg-white'>
        {/* <NavBarNewProperty /> */}
        <TabController
            className='pt-0'
            tabs={tabs}
            selected={tabSelected}
            onTabChange={handleOnTabChange}
        />

        {
            // CONTENT VIEW
            contentViews[tabSelected]
        }
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

// OLD VERSION
// export default function NewPropertyPage() {
//     const tableStyle = 'flex flex-col border-[0.8px] border-black rounded-sm w-[500px] h-fit overflow-hidden'
//     const divStyle = 'flex flex-row p-3 items-center justify-between hover:bg-slate-100 '
//     const divSelectedStyle = 'flex flex-row p-3 items-center justify-between text-orange-500 font-medium bg-slate-50 hover:bg-slate-100 '
//     const interline = 'border-b-[0.8px] border-b-black';
//     const [menuSelection, setMenuSelection] = useState(0)
//     // STATE MANAGEMANT
//     const sharedContext = useContext(SharedContext)
//     // VIEW CONTENT 
//     const contents = [CategoryPage(), FeaturesPage(), PricePage(), MediaPage(), LocationPage()]
//     return (
//         <div className='flex flex-row w-screen p-4 space-x-4 absolute h-[80%]'>
//             <div className={tableStyle}>
//                 <div className='flex flex-row p-4 space-x-2'>
//                     <div className='flex flex-col w-3/4 justify-center'>
//                         <h5 className='font-medium'>Indice completamento</h5>
//                         <p className='text-sm '>{'La percentuale d\'informazioni inserite all\'interno dell\' annuncio'}</p>
//                     </div>
//                     <div className='flex bg-slate-100 rounded-full p-4 w-20 h-20 items-center justify-center '>
//                         <h5 className='font-semibold'>0%</h5>
//                     </div>
//                 </div>
//                 <p className='font-medium text-xs text-gray-500 p-4'>{'Informazioni obbligatorie'}</p>
//                 {
//                     newPropertyMenuItems.filter((item) => item.isOptional == false).map((item, i) => <ol
//                         key={i}
//                         className={(menuSelection != i ? divStyle : divSelectedStyle) + (newPropertyMenuItems.length != i + 1 ? interline : null)}
//                     // onClick={() => { setMenuSelection(i) }}
//                     >
//                         <p className='text-sm'>{item.title}</p>
//                         <p className='text-xs'>{item.percentage}</p>

//                     </ol>
//                     )
//                 }
//                 <p className='font-medium text-xs text-gray-500 p-4'>{'Informazioni facoltative'}</p>
//                 {
//                     newPropertyMenuItems.filter((item) => item.isOptional == true).map((item, i) => <li
//                         key={i}
//                         className={divStyle + (newPropertyMenuItems.length != i + 1 ? interline : null)}>
//                         <p className='text-sm'>{item.title}</p>
//                         <p className='text-xs'>{item.percentage}</p>
//                     </li>
//                     )
//                 }
//                 <div className='flex flex-row p-2 items-center justify-evenly space-x-2'>
//                     <button
//                         className='text-sm font-medium bg-slate-100 w-full h-full p-2 rounded-sm hover:bg-slate-200'
//                         onClick={() => {
//                             switch (menuSelection) {
//                                 case 0:
//                                     break;
//                                 case 1:
//                                     if (sharedContext.category != -1 && sharedContext.type != -1) {
//                                         setMenuSelection(0);
//                                     }
//                                     break;
//                                 case 2:
//                                     setMenuSelection(1);
//                                     break;
//                                 case 3:
//                                     setMenuSelection(2);
//                                     break;
//                                 case 4:
//                                     setMenuSelection(3);
//                                     break;
//                                 case 5:
//                                     setMenuSelection(4);
//                                     break;
//                                 case 6:
//                                     setMenuSelection(5);
//                                     break;
//                                 default:
//                                     break;
//                             }
//                         }}>Indietro</button>
//                     <button className='text-sm text-white font-medium bg-orange-400 w-full h-full p-2 rounded-sm hover:bg-orange-500'
//                         onClick={() => {
//                             switch (menuSelection) {
//                                 case 0:
//                                     if (sharedContext.category != -1 && sharedContext.type != -1) {
//                                         setMenuSelection(1);
//                                     }
//                                     break;
//                                 case 1:
//                                     setMenuSelection(2);
//                                     break;
//                                 case 2:
//                                     setMenuSelection(3);
//                                     break;
//                                 case 3:
//                                     setMenuSelection(4);
//                                     break;
//                                 case 4:
//                                     setMenuSelection(5);
//                                     break;
//                                 case 5:
//                                     setMenuSelection(6);
//                                     break;
//                                 default:
//                                     break;
//                             }
//                         }}>Avanti</button>
//                 </div>
//             </div>
//             <SharedContext.Provider value={{ category: -1, type: -1 }}>
//                 {
//                     contents[menuSelection]
//                 }
//             </ SharedContext.Provider >
//         </div >
//     )
// }
