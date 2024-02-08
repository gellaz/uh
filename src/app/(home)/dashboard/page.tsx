"use client";

import DashboardContactTile from "@/src/components/dashboard/dashboardContact";
import Link from "next/link";
import { sibeBarTabs } from "@/components/sideBar";

export default function DashboardPage() {
  const dividerHor = <div className="w-full h-[0.4px] bg-black" />;
  const parStyle = "font-medium text-sm";
  const divStyle =
    "w-full h-fit rounded-md border-[0.4px] border-black overflow-hidden";
  const gridStyle = "grid grid-cols-2 gap-2";

  return (
    <main className="flex flex-col w-full h-full space-y-4 p-4">
      {/* DIV ROW 1 */}
      <div className="flex flex-row w-full h-full space-x-4">
        {/* LEFT SIDE */}
        <div className="flex-1 flex-col w-full space-y-2 ">
          <p className={parStyle}>{"Le mie proprietà"}</p>
          <div className={divStyle}>
            {/* <DashboardProperty property={} /> */}
            {dividerHor}
            {/* <DashboardProperty property={properties[1]} /> */}
            {dividerHor}
            {/* <DashboardProperty property={properties[2]} /> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-[32%] h-fit space-y-2 items-start ">
          <p className={parStyle}>{"Contatti"}</p>
          <div className={gridStyle}>
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
          </div>
          <Link
            href={sibeBarTabs[1].href}
            className="p-2 w-2/6 border border-primary rounded-full text-sm text-center font-medium hover:bg-primary/10"
          >
            {"Vai ai contatti"}
          </Link>
        </div>
      </div>
    </main>
  );
}
