import { sibeBarTabs } from "@/constast/navBarItems"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/favicon.ico'
import { usePathname } from "next/navigation"


export default function SideBar() {
    const pathname = usePathname()
    const logoSize = 24
    const mainStyle = 'flex flex-col w-[6%] h-full py-4 bg-primary space-y-4 items-center'
    const divStyle = 'flex flex-col w-full h-fit space-y-0 items-center'
    const defaultStyle = 'flex w-full h-[56px] p-2 items-center justify-center hover:bg-orange-400 text-white ';

    return <main className={mainStyle}>
        <div className={defaultStyle + 'hover:bg-transparent cursor-pointer bg-primary' + (pathname.endsWith('/') ? 'bg-orange-400' : 'bg-primary')}>
            <Image src={Logo} alt={"Logo"} width={logoSize} height={logoSize} />
        </div>
        <div className={divStyle}>
            {
                sibeBarTabs.map(
                    (tab, i) => <Link
                        key={tab.title}
                        href={tab.href}
                        className={defaultStyle + (pathname.endsWith(tab.href) ? 'bg-orange-400' : 'bg-primary')}
                    >
                        {tab.icon}
                    </Link>
                )
            }
        </div>
    </main>
}