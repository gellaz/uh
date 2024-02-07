"use client";

import {
  ArrowLeft,
  Bell,
  CreditCardIcon,
  LogOutIcon,
  MessageCircleMore,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Profile } from "@/types/profiles";
import { createClient } from "@/utils/supabase/client";

interface AppBarProps {
  profile: Profile;
}

export default function AppBar({ profile }: AppBarProps) {
  const supabase = createClient();
  const notiStyle =
    "flex w-9 h-9 rounded-md items-center justify-center hover:bg-slate-100";
  const iconSize = 20;
  const router = useRouter();
  const useCleanPathname = () => {
    const name = usePathname();
    const splitted = name.split("http://localhost:3000/"); // Replace with your specific substring
    const sliced = splitted[splitted.length - 1].slice(1); // Remove the leading '/'
    const title = sliced.charAt(0).toUpperCase() + sliced.slice(1);
    const cleanned = title.replace(/_/g, " ");

    if (usePathname().includes("properties/detail")) {
      const splitted2 = cleanned.split("/");

      return (
        <div className="flex flex-row space-x-4 items-center">
          <p className="text-base font-normal">{"Proprietà"}</p>
          <p className="text-base font-normal">{" / "}</p>
          <p className="text-base font-medium">{splitted2[2]}</p>
        </div>
      );
    } else if (usePathname().includes("properties/new")) {
      return <h1>{"Nuova proprietà"}</h1>;
    } else if (usePathname().includes("properties")) {
      return <h1>{"Proprietà"}</h1>;
    }

    return <h1>{cleanned}</h1>;
  };

  function getAvatarFallback(profile: Profile) {
    return (
      profile.first_name.charAt(0).toUpperCase() +
      profile.last_name.charAt(0).toUpperCase()
    );
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const avatarFallback = getAvatarFallback(profile);

  return (
    <div className="flex flex-row p-3 justify-between items-center border-b bg-background">
      <div className="flex flex-row space-x-4 items-center">
        {usePathname().includes("message_center") ||
        usePathname().includes("detail") ? (
          <Button
            variant={"ghost"}
            onClick={() => {
              router.back();
            }}
            className="flex flex-row space-x-1 px-2"
          >
            <ArrowLeft size={iconSize} />
          </Button>
        ) : null}
        {useCleanPathname()}
      </div>
      <div className="flex flex-row space-x-4 justify-end w-1/5">
        {usePathname().includes("message_center") ||
        usePathname().includes("new") ? null : (
          <Link className={notiStyle} href={"/message_center"}>
            <MessageCircleMore size={iconSize} />
          </Link>
        )}
        {usePathname().includes("notification_center") ||
        usePathname().includes("new") ? null : (
          <Link className={notiStyle} href={"/notification_center"}>
            <Bell size={iconSize} />
          </Link>
        )}
        {usePathname().includes("profile") ||
        usePathname().includes("new") ? null : (
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="hover:cursor-pointer hover:ring-2 hover:ring-primary">
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                  {profile.first_name} {profile.last_name}
                  <p className="text-xs font-light">{profile.email}</p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="hover:cursor-pointer focus:text-rose-500"
                  onClick={handleSignOut}
                >
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
