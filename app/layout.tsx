'use client'

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google'
import SideBar from '@/components/sideBar'
import AppBar from '@/components/AppBar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   metadataBase: new URL(defaultUrl),
//   title: "Next.js and Supabase Starter Kit",
//   description: "The fastest way to build apps with Next.js and Supabase",
// };

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideAppBar = () => {
    const hasNew = pathname.includes('/new')
    const hasMesCenter = pathname.includes('/message_center')
    return (hasNew === hasMesCenter)
  }
  const hideSideBar = () => {
    const hasDetail = pathname.includes('/detail');
    const hasNew = pathname.includes('/new')
    const hasMesCenter = pathname.includes('/message_center')
    const hasExplore = pathname.includes('/explore')
    return (hasDetail || hasNew || hasMesCenter || hasExplore)
  }

  return (
    <html lang="it" className={GeistSans.className}>
      <body className={inter.className + ' flex flex-row w-screen h-screen'}>
        {
          hideSideBar() ? null : <SideBar />
        }
        <div className={'flex flex-col ' + (hideSideBar() ? 'w-full' : 'w-[94%]')}>
          {
            hideAppBar() ? <AppBar /> : null
          }
          {children}
        </div>
      </body>
    </html>
  );
}

