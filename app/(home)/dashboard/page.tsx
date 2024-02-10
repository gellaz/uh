'use client'

import { getProperties } from "@/actions/property";
import DashboardContactTile from "@/components/dashboard/dashboardContact";
import DashboardProperty from "@/components/dashboard/dashboardProperty";
import { sibeBarTabs } from "@/components/SideBar";
import { Property } from "@/types/properties";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const dividerHor = <div className='w-full h-[0.4px] bg-black' />;
  const parStyle = 'font-medium text-sm w-full';
  const divStyle = 'w-full h-fit rounded-md border-[0.4px] border-black overflow-hidden';
  const gridStyle = 'grid grid-cols-2 gap-2';

  // USE STATES
  const [properties, setProperties] = useState<Property[]>()

  // DATA FETCHING
  async function fetchProperties() {
    try {
      const response = await getProperties() as Property[];
      setProperties(response);
    } catch (e) {
      console.log(e)
    }
  }



  useEffect(() => {
    fetchProperties();
  })

  return (
    <main className="col w-full h-full space-y-4 p-4">
      {/* DIV ROW 1 */}
      <div className="row w-full h-full space-x-4">

        {/* LEFT SIDE */}
        <div className='col flex-1'>
          <div className="flex-1 flex-col w-full space-y-2 ">
            <p className={parStyle}>{"Le mie proprietà"}</p>
            <div className={'grid gap-2 grid-cols-4 rounded-md overflow-hidden'}>
              {
                properties?.map(item => <DashboardProperty property={item} />)
              }
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col w-[32%] h-fit space-y-2 items-center">
          <p className={parStyle}>{"Contatti"}</p>
          <div className={gridStyle}>
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
            <DashboardContactTile />
          </div>
          <Button variant={'ghost'} onClick={() => { }} className='text-gray-500'>
            {"Vedi tutti"}
          </Button>
        </div>
      </div>
    </main >
  );
}
