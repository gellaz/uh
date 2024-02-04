import React from 'react'

export default function LocationPage() {
    const labelStyle = 'text-sm'

    return (
        <div className='flex flex-row w-full space-x-4'>
            <div className='flex w-2/3 h-full bg-slate-200 items-center justify-center rounded-sm'>
                <p>{'Mappa'}</p>
            </div>
            <div className='flex flex-col w-full space-y-4'>
                <div className='flex flex-row space-x-4 w-full'>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={labelStyle}>{'Indirizzo'}</label>
                        <input
                            id='address'
                            className='border border-black rounded-sm p-2'
                            type='text'
                            placeholder='Indirizzo' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label className={labelStyle}>{'Civico'}</label>
                        <input
                            id='adress_number'
                            className='border border-black rounded-sm p-2'
                            type='text'
                            placeholder='Civico' />
                    </div>
                </div>
                <div className='flex flex-row space-x-4 w-full'>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={labelStyle}>{'Città'}</label>
                        <input
                            id='city'
                            className='border border-black rounded-sm p-2'
                            type='text'
                            placeholder='Città' />
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={labelStyle}>{'CAP'}</label>
                        <input
                            id='zipcode'
                            className='border border-black rounded-sm p-2'
                            type='text'
                            placeholder='CAP' />
                    </div>
                </div>
                <div className='flex flex-row space-x-4 w-full'>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={labelStyle}>{'Regione'}</label>
                        <input
                            id='region'
                            className='border border-black rounded-sm p-2'
                            type='text'
                            placeholder='Regione' />
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={labelStyle}>{'Nazione'}</label>
                        <input
                            id='country'
                            className='border border-black rounded-sm p-2'
                            type='text'
                            placeholder='Nazione' />
                    </div>
                </div>
            </div>
        </div>
    )
}
