import React, { useState } from 'react';
import InputRow from '@/components/property/new/inputRow';
import { MdOutlineBathtub, MdOutlineKingBed, MdOutlineKitchen } from "react-icons/md";


interface featuresFormState {
    beds: number;
    baths: number;
    kitchen: number;
}

export default function RoomsPage() {
    const formStyle = 'flex flex-col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-1/6'
    const iconSize = 20;
    const [formData, setFormData] = useState<featuresFormState>({
        beds: 0,
        baths: 0,
        kitchen: 0,
    }
    )

    return <form className={formStyle} action={() => { setFormData }}>
        <InputRow className={inputStyle} icon={<MdOutlineBathtub size={iconSize} />} title={'Bagni'} subtitle={'(usa i decimali per identificare un bagno senda la doccia)'} type={'number'} placeholder='0' />
        <InputRow className={inputStyle} icon={<MdOutlineKingBed size={iconSize} />} title={'Camere'} type={'number'} placeholder='0' />
        <InputRow className={inputStyle} icon={<MdOutlineKitchen size={iconSize} />} title={'Cucina'} type={'number'} placeholder='0' />
    </form>


}

//     return (
//         <div className='flex flex-col w-full space-y-8 items-center overflow-auto'>
//             {
//                 // FEATURES
//                 features?.map(
//                     (item, i) => {
//                         return <div
//                             key={i}
//                             className='flex flex-col w-[500px] space-y-1 '>
//                             <p className='text-sm font-medium'>{item.title}</p>
//                             <div className='flex flex-col border-[0.8px] border-black rounded-sm'>
//                                 {
//                                     // DATA
//                                     item.data.map(
//                                         (subitem, j) => {
//                                             const isPopover = subitem.inputType == 'popover'
//                                             const showButton = subitem.subdata == null
//                                             const inputSyle = 'flex  items-center justify-center border-black border-[0.8px] rounded-sm text-center '
//                                             return <li
//                                                 key={j}
//                                                 className={'flex flex-row w-full items-center justify-between p-3 ' + (item.data.length - 1 != j
//                                                     ? 'border-b-black border-b-[0.8px]'
//                                                     : null
//                                                 )}>
//                                                 <p>{subitem.title}</p>
//                                                 <div className='flex flex-row items-center justify-center space-x-2'>
//                                                     {
//                                                         (showButton)
//                                                             ? <button
//                                                                 className='w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full'
//                                                                 onClick={() => decreaseValue(i, j)}
//                                                             >-</button>
//                                                             : null
//                                                     }
//                                                     {
//                                                         isPopover
//                                                             ? buildPopovers(subitem)
//                                                             : < input
//                                                                 className={inputSyle + (showButton ? 'w-8 h-8' : null)}
//                                                                 type={subitem.inputType}
//                                                                 placeholder={subitem.placeholder}
//                                                                 value={assignValue(i, j)}
//                                                                 readOnly={false}
//                                                                 onChange={(value) => assignValue(i, j)}
//                                                             />
//                                                     }
//                                                     {
//                                                         (showButton)
//                                                             ? < button
//                                                                 className='w-8 h-8 bg-orange-100 hover:bg-orange-200 rounded-full'
//                                                                 onClick={() => increaseValue(i, j)}
//                                                             >+</button>
//                                                             : null
//                                                     }
//                                                 </div>
//                                             </li>
//                                         }
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     }
//                 )
//             }
//         </div >
//     )
//     // FUNCTIONS
//     function assignValue(i: number, j: number) {
//         if (i == 0) {
//             switch (j) {
//                 case 0:
//                     return rooms;
//                 case 1:
//                     return beds;
//                 case 2:
//                     return baths;
//                 default:
//                     return undefined;
//             }
//         } else if (i == 1) {
//             switch (j) {
//                 case 0:
//                     return kitchen;
//                 default:
//                     return undefined;
//             }
//         }
//     }

//     function increaseValue(i: number, j: number) {
//         if (i == 0) {
//             switch (j) {
//                 case 0:
//                     (rooms != null) ? setRooms(rooms + 1) : setRooms(1)
//                     break;
//                 case 1:
//                     (beds != null) ? setBeds(beds + 1) : setBeds(1)
//                     break;
//                 case 2:
//                     (baths != null) ? setBaths(baths + 1) : setBaths(1)
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     function decreaseValue(i: number, j: number) {
//         if (i == 0) {
//             switch (j) {
//                 case 0:
//                     (rooms != null && rooms > 0) ? setRooms(rooms - 1) : null
//                     break;
//                 case 1:
//                     (beds != null && beds > 0) ? setBeds(beds - 1) : null
//                     break;
//                 case 2:
//                     (baths != null && baths > 0) ? setBaths(baths - 1) : null
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     function buildApePopover(data: string[]) {
//         return <Popover
//             open={isApePopoverOpen}
//             onOpenChange={() => { setIsApePopoverOpen(true) }}>
//             <PopoverTrigger asChild
//                 className='border-black border-[0.4px] shadow-none'>
//                 <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={isApePopoverOpen}
//                     className="w-[200px] justify-between"
//                 >
//                     {
//                         apeValue != undefined ? apeValue : 'Certificato APE'
//                     }
//                     <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     <CommandInput placeholder="Cerca qui..." className="h-9" />
//                     <CommandEmpty>Nessun risultato trovato</CommandEmpty>
//                     <CommandGroup>
//                         {
//                             data.map(
//                                 (item, i) => (
//                                     <CommandItem
//                                         key={item}
//                                         value={item}
//                                         onSelect={
//                                             (value) => {
//                                                 setApeValue(value)
//                                                 setIsApePopoverOpen(false)
//                                             }
//                                         }
//                                     >
//                                         {item}
//                                         <CheckIcon className={
//                                             'ml-auto h-4 w-4 ' + apeValue === data[i] ? 'opacity-100' : 'opacity-0'
//                                         }
//                                         />
//                                     </CommandItem>
//                                 )
//                             )
//                         }
//                     </CommandGroup>
//                 </Command>
//             </PopoverContent>
//         </Popover >
//     }

//     function buildTypePopover(data: string[]) {
//         return <Popover
//             open={isTypePopoverOpen}
//             onOpenChange={() => { setIsTypePopoverOpen(true) }}>
//             <PopoverTrigger asChild
//                 className='border-black border-[0.4px] shadow-none'>
//                 <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={isTypePopoverOpen}
//                     className="w-[200px] justify-between"
//                 >
//                     {
//                         typeValue != undefined ? typeValue : 'Tipo di proprietà'
//                     }
//                     <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     <CommandInput placeholder="Cerca qui..." className="h-9" />
//                     <CommandEmpty>Nessun risultato trovato</CommandEmpty>
//                     <CommandGroup>
//                         {
//                             data.map(
//                                 (item, i) => (
//                                     <CommandItem
//                                         key={item}
//                                         value={item}
//                                         onSelect={
//                                             (value) => {
//                                                 setTypeValue(value)
//                                                 setIsTypePopoverOpen(false)
//                                             }
//                                         }
//                                     >
//                                         {item}
//                                         <CheckIcon className={
//                                             'ml-auto h-4 w-4 ' + apeValue === data[i] ? 'opacity-100' : 'opacity-0'
//                                         }
//                                         />
//                                     </CommandItem>
//                                 )
//                             )
//                         }
//                     </CommandGroup>
//                 </Command>
//             </PopoverContent>
//         </Popover >
//     }

//     function buildStatusPopover(data: string[]) {
//         return <Popover
//             open={isStatusPopoverOpen}
//             onOpenChange={() => { setIsStatusPopoverOpen(true) }}>
//             <PopoverTrigger asChild
//                 className='border-black border-[0.4px] shadow-none'>
//                 <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={isApePopoverOpen}
//                     className="w-[200px] justify-between"
//                 >
//                     {
//                         statusValue != undefined ? statusValue : 'Stato dell\'immobile'
//                     }
//                     <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     <CommandInput placeholder="Cerca qui..." className="h-9" />
//                     <CommandEmpty>Nessun risultato trovato</CommandEmpty>
//                     <CommandGroup>
//                         {
//                             data.map(
//                                 (item, i) => (
//                                     <CommandItem
//                                         key={item}
//                                         value={item}
//                                         onSelect={
//                                             (value) => {
//                                                 setStatusValue(value)
//                                                 setIsStatusPopoverOpen(false)
//                                             }
//                                         }
//                                     >
//                                         {item}
//                                         <CheckIcon className={
//                                             'ml-auto h-4 w-4 ' + apeValue === data[i] ? 'opacity-100' : 'opacity-0'
//                                         }
//                                         />
//                                     </CommandItem>
//                                 )
//                             )
//                         }
//                     </CommandGroup>
//                 </Command>
//             </PopoverContent>
//         </Popover >
//     }

//     function buildPopovers(subitem: any) {
//         switch (subitem.title) {
//             case 'Classe energetica':
//                 return buildApePopover(subitem.subdata)
//             case 'Tipo di proprietà':
//                 return buildTypePopover(subitem.subdata)
//             case 'Stato dell\'immobile':
//                 return buildStatusPopover(subitem.subdata)
//             default:
//                 break;
//         }
//     }

// }

