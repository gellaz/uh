"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { capitalizeInitials } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface SidebarItem {
  href: string;
  text: string;
  icon: string;
}

interface SidebarProps {
  items: SidebarItem[];
  profile: Profile;
}

export default function Sidebar({ items, profile }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <aside className="h-screen">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex flex-col gap-4 p-4">
          {/* Toggle button */}
          <Button onClick={toggleExpanded} variant={"ghost"} size={"icon"}>
            {expanded ? (
              <Icon icon={"lucide:chevron-first"} height={18} width={18} />
            ) : (
              <Icon icon={"lucide:chevron-last"} height={18} width={18} />
            )}
          </Button>
          {/* Logo container */}
          <div className="flex items-end gap-4">
            <Image
              src="/logo.svg"
              className="ml-1 overflow-hidden transition-all"
              alt="UrbanHunt Logo"
              width={30}
              height={30}
            />
            {expanded && (
              <span className="text-xl font-extrabold">
                <h5>UrbanHunt</h5>
              </span>
            )}
          </div>
        </div>
        <div className="px-2 py-4">
          <Separator />
        </div>

        <ul className="flex-1 px-3">
          {items.map(({ href, text, icon }) => {
            const isActive = pathname == href;
            return (
              <Link href={href} key={href}>
                <li
                  className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-tr from-orange-200 to-orange-100 text-orange-800"
                      : "text-gray-600 hover:bg-orange-50"
                  }`}
                >
                  <Icon icon={icon} height={22} width={22} />
                  <span className={`ml-3 ${expanded ? "inline" : "hidden"}`}>
                    <p>{text}</p>
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="flex border-t p-3">
          <Avatar className="hover:cursor-pointer hover:ring-2 hover:ring-primary">
            <AvatarFallback>
              {capitalizeInitials(profile.first_name, profile.last_name)}
            </AvatarFallback>
          </Avatar>

          <div
            className={`
              flex items-center justify-between
              overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}
          `}
          >
            <div className="leading-4">
              <p className="font-medium">
                {profile.first_name} {profile.last_name}
              </p>
              <span className="text-xs text-slate-500">{profile.email}</span>
            </div>
            <Icon icon={"lucide:more-vertical"} height={22} width={22} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
