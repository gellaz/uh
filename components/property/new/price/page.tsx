// import { newPropertyContext } from '../page'
// import { propertyCategoryTypeItems } from '@/constast/propertyTypeItems'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
// import { Button } from '@/components/ui/button'
// import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { useState } from 'react'
import InputRow from '@/components/property/new/inputRow'

interface PriceFormState {
    price: number,
    price_mq: number,
    condo_expenses: number,
    rea_price: boolean,
}

export default function PricePage() {
    const formStyle = 'flex flex-col w-full h-full space-y-4 items-center justify-center';
    const inputStyle = 'w-1/3'
    const iconSize = 20
    const [formData, setFormData] = useState<PriceFormState>()


    return (
        <form className={formStyle}>
            <InputRow className={inputStyle} title={'Prezzo'} type={'number'} price_pattern={true} />
            <InputRow className={inputStyle} title={'Prezzo a mq'} type={'number'} />
            <InputRow className={inputStyle} title={'Spese condominiali'} type={'number'} />
            <InputRow className={'w-4'} title={'Prezzo REA'} type={'checkbox'} />
        </form>
    )


    // OLD VERSION
    // const sharedContext = useContext(newPropertyContext)
    // const [isStatusPopoverOpen, setStatusPopoverOpen] = useState(false)
    // const statusValues = ['Nuovo', 'Nuda Proprietà', 'Usufrutto']
    // const [statusSelection, setStatusSelection] = useState<string>()
    // const prices = sharedContext.category != -1 ? propertyCategoryTypeItems[sharedContext.category].price : null
    // const divStyle = 'flex flex-col border-[0.8px] border-black rounded-sm w-[500px] '
    // const olStyle = 'flex flex-row border-black p-3 items-center justify-between '
    // const olCheckboxStyle = 'flex flex-row items-center justify-between p-3 '
    // const inputDivStyle = 'flex flex-row space-x-1 items-center border-[0.8px] border-black rounded-sm overflow-hidden pr-1'
    // const inputStyle = 'text-end px-2 w-24'
    // return (
    //     <div className='flex flex-col w-full space-y-8 items-center overflow-auto '>
    //         {/* price table */}
    //         <div className={divStyle}>
    //             <ol className={olStyle + 'border-b-[0.8px]'}>
    //                 <p>{prices != null ? prices[0].title : ''}</p>
    //                 <div className={inputDivStyle}>
    //                     <input
    //                         type='text'
    //                         className={inputStyle}
    //                     />
    //                     <p className='font-normal text-gray-500'>€</p>
    //                 </div>
    //             </ol>
    //             <ol className={olStyle + 'border-b-[0.8px]'}>
    //                 <p>{prices != null ? prices[1].title : ''}</p>
    //                 <div className={inputDivStyle}>
    //                     <input
    //                         type='text'
    //                         className={inputStyle}
    //                     />
    //                     <p className='font-normal text-gray-500'>€</p>
    //                 </div>
    //             </ol>
    //             <div className='flex flex-col space-y-1'>
    //                 <ol className={olCheckboxStyle}>
    //                     <p>{prices != null ? prices[2].title : ''}</p>
    //                     <input type="checkbox" />
    //                 </ol>
    //                 <ol className={olCheckboxStyle}>
    //                     <p>{prices != null ? prices[3].title : ''}</p>
    //                     <input type="checkbox" />
    //                 </ol>
    //                 <ol className={olCheckboxStyle}>
    //                     <p>{prices != null ? prices[4].title : ''}</p>
    //                     <input type="checkbox" />
    //                 </ol>
    //             </div>
    //         </div>
    //         {/* spese condo */}
    //         <div className={olStyle + 'w-[500px] border-[0.8px] rounded-sm'}>
    //             <p>{prices != null ? prices[5].title : ''}</p>
    //             <div className={inputDivStyle}>
    //                 <input
    //                     type='text'
    //                     className={inputStyle}
    //                 />
    //                 <p className='font-normal text-gray-500'>€</p>
    //             </div>
    //         </div>
    //         {/* status */}
    //         <div className={olStyle + 'w-[500px] border-[0.8px] rounded-sm'}>
    //             <p>{prices != null ? prices[6].title : ''}</p>
    //             <Popover
    //                 open={isStatusPopoverOpen}
    //                 onOpenChange={() => { setStatusPopoverOpen(true) }}>
    //                 <PopoverTrigger asChild
    //                     className='border-black border-[0.4px] shadow-none'>
    //                     <Button
    //                         variant="outline"
    //                         role="combobox"
    //                         aria-expanded={isStatusPopoverOpen}
    //                         className="w-[200px] justify-between"
    //                     >
    //                         {
    //                             statusSelection != undefined ? statusSelection : 'Stato dell\'immobile'
    //                         }
    //                         <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    //                     </Button>
    //                 </PopoverTrigger>
    //                 <PopoverContent className="w-[200px] p-0">
    //                     <Command>
    //                         <CommandInput placeholder="Cerca qui..." className="h-9" />
    //                         <CommandEmpty>Nessun risultato trovato</CommandEmpty>
    //                         <CommandGroup>
    //                             <CommandItem onSelect={(value) => {
    //                                 setStatusSelection(value)
    //                                 setStatusPopoverOpen(false)
    //                             }}>
    //                                 {statusValues[0]}
    //                                 <CheckIcon className={
    //                                     'ml-auto h-4 w-4 ' + (statusSelection?.toLowerCase() == statusValues[0].toLocaleLowerCase() ? 'opacity-100' : 'opacity-0')
    //                                 } />
    //                             </CommandItem>
    //                             <CommandItem onSelect={(value) => {
    //                                 setStatusSelection(value)
    //                                 setStatusPopoverOpen(false)
    //                             }}>
    //                                 {statusValues[1]}
    //                                 <CheckIcon className={
    //                                     'ml-auto h-4 w-4 ' + (statusSelection?.toLowerCase() == statusValues[1].toLocaleLowerCase() ? 'opacity-100' : 'opacity-0')
    //                                 } />
    //                             </CommandItem>
    //                             <CommandItem onSelect={(value) => {
    //                                 setStatusSelection(value)
    //                                 setStatusPopoverOpen(false)
    //                             }}>
    //                                 {statusValues[2]}
    //                                 <CheckIcon className={
    //                                     'ml-auto h-4 w-4 ' + (statusSelection?.toLowerCase() == statusValues[2].toLocaleLowerCase() ? 'opacity-100' : 'opacity-0')
    //                                 } />
    //                             </CommandItem>
    //                         </CommandGroup>
    //                     </Command>
    //                 </PopoverContent>
    //             </Popover >
    //         </div >
    //         {/* RAE */}
    //         < div className={divStyle} >
    //             <ol className={olStyle + 'border-b-[0.8px]'}>
    //                 <p>{prices != null ? prices[7].title : ''}</p>
    //                 <p>{prices != null ? prices[7].value : ''}</p>
    //             </ol>
    //             <ol className={olStyle + 'border-b-[0.8px]'}>
    //                 <p>{prices != null ? prices[8].title : ''}</p>
    //                 <p>{prices != null ? prices[8].value : ''}</p>
    //             </ol>
    //             <ol className={olStyle}>
    //                 <p>{'Totale REA'}</p>
    //                 <p>{'0'}</p>
    //             </ol>
    //         </div >
    //     </div >
    // )

}
