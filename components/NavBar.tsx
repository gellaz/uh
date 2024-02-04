"use client";

import { navbarItems } from "@/constants/navBarItems";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

export default function NavBar() {
  const path = usePathname();
  const linkBase = "text-black px-2 py-1 rounded-md font-normal";
  const linkStyle = linkBase + " hover:bg-slate-200 ";
  const linkStyleActive =
    linkBase + " font-medium bg-slate-200 hover:bg-slate-300";

  return (
    <nav className="flex flex-col bg-white shadow-sm">
      <div className="flex flex-row items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex flex-row items-center space-x-3">
          <Image src={Logo} alt={""} width={38} height={38} className="mr-10" />
          {navbarItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={path.endsWith(item.href) ? linkStyleActive : linkStyle}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Avatar className="w-10 h-10 rounded-full border border-black overflow-hidden">
          <AvatarFallback className="flex h-full text-black font-medium items-center justify-center">
            {"FL"}
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
