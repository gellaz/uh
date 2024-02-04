"use client";

import { Building2, LayoutDashboard, Search, Users } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/favicon.ico";
import { usePathname } from "next/navigation";

export const sibeBarTabs = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Contatti",
    href: "/contacts",
    icon: <Users size={20} />,
  },
  {
    title: "Esplora",
    href: "/explore",
    icon: <Search size={20} />,
  },
  {
    title: "Proprietà",
    href: "/properties",
    icon: <Building2 size={20} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const logoSize = 24;

  const getClassName = (href: string) => {
    const isActive = pathname.endsWith(href);
    return `flex w-full h-[56px] p-2 items-center justify-center hover:bg-orange-400 text-white ${
      isActive ? "bg-orange-400" : "bg-primary"
    }`;
  };

  return (
    <div className="flex flex-col w-[6%] h-full py-4 bg-primary space-y-4 items-center">
      <div className={getClassName("/")}>
        <Image src={Logo} alt={"Logo"} width={logoSize} height={logoSize} />
      </div>
      <div className="flex flex-col w-full h-fit space-y-0 items-center flex-grow">
        {sibeBarTabs.map((tab, i) => (
          <Link
            key={tab.title}
            href={tab.href}
            className={getClassName(tab.href)}
          >
            {tab.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
