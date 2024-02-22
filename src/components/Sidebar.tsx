"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
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
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <Button onClick={toggleExpanded} variant={"ghost"} size={"icon"}>
            {expanded ? (
              <Icon icon={"lucide:chevron-first"} height={18} width={18} />
            ) : (
              <Icon icon={"lucide:chevron-last"} height={18} width={18} />
            )}
          </Button>
        </div>

        <ul className="flex-1 px-3">
          {items.map(({ href, text, icon }) => {
            const isActive = pathname === href;
            return (
              <Link href={href} key={href}>
                <li
                  className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                    isActive
                      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                      : "hover:bg-indigo-50 text-gray-600"
                  }`}
                >
                  <Icon icon={icon} height={22} width={22} />
                  <span className={`ml-3 ${expanded ? "inline" : "hidden"}`}>
                    {text}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="border-t flex p-3">
          <Avatar className="hover:ring-2 hover:ring-primary hover:cursor-pointer">
            <AvatarFallback>
              {capitalizeInitials(profile.first_name, profile.last_name)}
            </AvatarFallback>
          </Avatar>

          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-md">
                {profile.first_name} {profile.last_name}
              </h4>
              <span className="text-xs text-gray-600">{profile.email}</span>
            </div>
            <Icon icon={"lucide:more-vertical"} height={22} width={22} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
