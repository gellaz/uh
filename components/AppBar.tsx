"use client";

import { ArrowLeft, Bell, MessageCircleMore } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

export default function AppBar() {
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
          <Avatar
            className={
              "flex w-9 h-9 rounded-full overflow-hidden items-center justify-center cursor-pointer"
            }
          >
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}
