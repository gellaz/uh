import { ReactElement } from "react";

interface props {
    className?: string,
    icon?: ReactElement,
    title: string,
    value?: string | ReactElement,
    emptyValue?: string,
}

export default function Row(prop: props) {
    const rowStyle = 'flex flex-row space-x-4 items-center justify-between border-b-[0.4px] border-black p-2 ';
    const divStyle = 'flex flex-row items-center space-x-2'
    const titleStyle = 'text-base'
    const valueStyle = 'font-medium '

    return <div className={rowStyle + (prop.className ? prop.className : '')}>
        <div className={divStyle}>
            {prop.icon ? prop.icon : null}
            <p className={titleStyle}>{prop.title}</p>
        </div >
        {
            prop.value as ReactElement
                ? prop.value
                : <p className={valueStyle + (prop.value === prop.emptyValue ? 'opacity-50 font-normal' : '')}>{prop.value}</p>
        }

    </div>
}