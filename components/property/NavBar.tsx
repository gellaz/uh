'use client'

import { ArrowLeftIcon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function NavBarPropertyDetail({ params }: { params: { id: string } }) {
    const router = useRouter();

    return <nav className='flex flex-col bg-white h-fit shadow-md space-y-2'>
        <div className='flex flex-row w-full px-4 py-2 items-center justify-between'>
            <Button
                className='px-2 py-1 font-medium'
                variant='ghost'
                onClick={() => { router.back() }}
            >
                <ArrowLeftIcon className='mr-1' size={16} />
                Back
            </Button>
            <p>{params.id}</p>
            <div className='w-10' />
        </div>
    </nav>
}