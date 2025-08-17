'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function KoriMedal() {
    return (
        <div
            style={{
                top: `26%`,
                left: `50%`,
                width: `2%`,
                height: `8%`,
                transform: 'translate(-50%, -50%)',
            }}
            className="absolute" >
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="w-full h-full bg-foreground border border-foreground text-xs font-bold flex items-center justify-center hover:text-background hover:animate-pulse hover:bg-foreground cursor-pointer rounded">
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Pemletasan</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}