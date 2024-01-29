export default function DashboardContactTile() {
    const statusStyle = '';

    return <main className='flex flex-col w-full h-full space-y-4 items-center justify-between border shadow-sm p-4 rounded-md cursor-pointer hover:border-black hover:shadow-md'>
        <div className='w-12 h-12 rounded-full bg-slate-100' />
        <div className='flex flex-col space-y-0 justify-center items-center'>
            <p className='font-medium text-sm'>{'Firstname Lastname'}</p>
            <p className='font-normal text-xs opacity-50'>{'firstname.lastname@gmail.com'}</p>
        </div>

        <p className={'p-1 text-xs font-medium border border-green-600 rounded-sm bg-green-100 text-green-600'}>{'Active'}</p>
    </main>

}