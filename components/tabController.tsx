interface Props {
    className?: string,
    tabs: string[]
    selected: number,
    onTabChange: (index: number) => void

}

export default function TabController(props: Props) {
    const lineStyle = 'h-[1.6px] w-full'
    const handleTabChange = (index: number) => {
        props.onTabChange(index)
    }

    return <div className={'flex flex-row w-full h-fit space-x-0 border-b ' + (props.className ? props.className : ' pt-2')}>
        {
            props.tabs.map(
                (item, i) => {
                    return <div
                        key={item}
                        className='flex flex-col space-y-2 px-4 pt-2 cursor-pointer hover:bg-primary/10'
                        onClick={() => handleTabChange(i)}
                    >
                        <p className={'px-2 text-sm' + (props.selected === i ? ' font-medium text-orange-500' : ' font-normal')}>{item}</p>
                        <div className={lineStyle + (props.selected === i ? ' bg-orange-500 ' : ' bg-transparent')} />
                    </div>
                }
            )
        }
    </div >

}