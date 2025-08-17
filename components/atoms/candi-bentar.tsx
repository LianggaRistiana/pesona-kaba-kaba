'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


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
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="w-full h-full bg-foreground border border-foreground text-xs font-bold flex items-center justify-center hover:text-background hover:animate-pulse hover:bg-foreground cursor-pointer rounded">
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Candi Bentar</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </>
    )
}