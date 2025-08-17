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

export default function MapItem({ id, x, y, w, h, desc, imgSrc }: MapItem) {
    return (
        <div
            style={{
                top: `${y}%`,
                left: `${x}%`,
                width: `${w}%`,
                height: `${h}%`,
                transform: 'translate(-50%, -50%)',
            }}
            className="absolute"
        >
            <Tooltip>
                <DropdownMenu>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <div className="w-full h-full border border-foreground text-xs font-bold flex items-center justify-center hover:text-background hover:animate-pulse hover:bg-foreground cursor-pointer rounded">
                                <p className="hidden sm:block">{id}</p>
                            </div>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <DropdownMenuContent className="w-56 h-70 border border-foreground">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <img src={imgSrc} alt={desc} className="w-full h-full object-cover rounded"/>
                            <p className="font-bold">{desc}</p>
                        </div>
                    </DropdownMenuContent>
                    <TooltipContent>
                        <p>{desc}</p>
                    </TooltipContent>
                </DropdownMenu>
            </Tooltip>
        </div>
    )
}