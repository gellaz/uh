import { ReactElement } from "react"

interface IllustrationCardProps {
    title: string,
    message: string,
    element?: ReactElement,
}
export default function IllustrationCard(prop: IllustrationCardProps) {
    const cardStyle = 'border rounded-md p-4'
    const columnStyle = 'flex flex-col space-y-1'
    const titleStyle = 'text-base font-medium'
    const messageStyle = 'text-sm font-normal'
    const iconSize = 16

    return (
        <div className={cardStyle + ' flex flex-col space-y-4'}>
            <div className={columnStyle}>
                <p className={titleStyle}>{prop.title}</p>
                <p className={messageStyle}>{prop.message}</p>
            </div>
            {
                prop.element
            }
        </div>
    )
}