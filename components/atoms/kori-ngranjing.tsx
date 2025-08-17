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

export default function KoriNgeranjing() {
    return (
        <>
            <div
                style={{
                    top: `47%`,
                    left: `48%`,
                    width: `1%`,
                    height: `5%`,
                    transform: 'translate(-50%, -50%)',
                }}
                className="absolute w-full h-full  border border-foreground text-xs font-bold flex items-center justify-center " >
            </div>
            <div
                style={{
                    top: `47%`,
                    left: `47%`,
                    width: `1%`,
                    height: `5%`,
                    transform: 'translate(-50%, -50%)',
                }}
                className="absolute w-full h-full  border border-foreground text-xs font-bold flex items-center justify-center " >
            </div>
            <div
                style={{
                    top: `47%`,
                    left: `50%`,
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
                        <p>Kori Agung</p>
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
                            <img src='https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK24.JPG' alt='Kori Agung' className="w-full h-full object-cover rounded"/>
                            <p className="font-bold">Kori Agung</p>
                        </div>
                    </DropdownMenuContent>
                    <TooltipContent>
                        <p>Kori Agung</p>
                    </TooltipContent>
                </DropdownMenu>
            </Tooltip>
            </div>
        </>
    )
}