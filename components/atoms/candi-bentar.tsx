'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CandiBentar() {
    return (
        <>
            <div
                style={{
                    top: `40%`,
                    left: `-3%`,
                    width: `1%`,
                    height: `8%`,
                    transform: 'translate(-50%, -50%)',
                }}
                className="absolute w-full h-full  border border-foreground text-xs font-bold flex items-center justify-center " >
            </div>
            <div
                style={{
                    top: `40%`,
                    left: `-2%`,
                    width: `1%`,
                    height: `8%`,
                    transform: 'translate(-50%, -50%)',
                }}
                className="absolute w-full h-full  border border-foreground text-xs font-bold flex items-center justify-center " >
            </div>
            <div
                style={{
                    top: `40%`,
                    left: `0%`,
                    width: `3%`,
                    height: `30%`,
                    transform: 'translate(-50%, -50%)',
                }}
                className="absolute" >
                {/* <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="w-full h-full bg-foreground border border-foreground text-xs font-bold flex items-center justify-center hover:text-background hover:animate-pulse hover:bg-foreground cursor-pointer rounded">
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Candi Bentar</p>
                    </TooltipContent>
                </Tooltip> */}

                <Tooltip>
                <DropdownMenu>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                        <div className="w-full h-full bg-foreground border border-foreground text-xs font-bold flex items-center justify-center hover:text-background hover:animate-pulse hover:bg-foreground cursor-pointer rounded">
                        </div>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <DropdownMenuContent className="w-56 h-70 border border-foreground">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <img src='https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK25.jpg' alt='Candi Bentar' className="w-full h-full object-cover rounded"/>
                            <p className="font-bold">Candi Bentar</p>
                        </div>
                    </DropdownMenuContent>
                    <TooltipContent>
                        <p>Candi Bentar</p>
                    </TooltipContent>
                </DropdownMenu>
            </Tooltip>
            </div>
        </>
    )
}