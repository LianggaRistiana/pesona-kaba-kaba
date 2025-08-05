'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const layout = [
    //   { id: 1, x: 32, y: 70, w: 10, h: 10 },
    //   { id: 2, x: 60, y: 50, w: 10, h: 10 },
    //   { id: 3, x: 60, y: 30, w: 12, h: 8 },
    //   { id: 4, x: 50, y: 78, w: 6, h: 15 },
    //   { id: 5, x: 76, y: 25, w: 5, h: 7 },
    //   { id: 6, x: 50, y: 45, w: 4, h: 4 },
    //   { id: 7, x: 46, y: 78, w: 4, h: 4 },
    //   { id: 8, x: 28, y: 75, w: 4, h: 4 },
    //   { id: 9, x: 38, y: 65, w: 4, h: 4 },
    //   { id: 10, x: 32, y: 65, w: 4, h: 4 },
    //   { id: 11, x: 66, y: 45, w: 4, h: 4 },
    //   { id: 12, x: 44, y: 55, w: 4, h: 4 },
    //   { id: 13, x: 22, y: 80, w: 4, h: 4 },
    //   { id: 14, x: 36, y: 78, w: 4, h: 8 },
    //   { id: 15, x: 50, y: 12, w: 18, h: 15 },
    //   { id: 16, x: 40, y: 8, w: 10, h: 10 },
    //   { id: 17, x: 48, y: 76, w: 4, h: 4 },
    { id: 18, x: 44, y: 65, w: 6, h: 6, desc: "Pesimpangan Batu Ngaus" },
    { id: 19, x: 16, y: 40, w: 8, h: 12, desc: "Pengubengan" },
    { id: 20, x: 5, y: 90, w: 10, h: 14, desc: "Gendongan" },
    { id: 21, x: 18, y: 85, w: 12, h: 18, desc: "Bale Onen" },
    { id: 22, x: 33, y: 84, w: 16, h: 20, desc: "Pemayasan" },
    { id: 23, x: 20, y: 12, w: 38, h: 20, desc: "Pesanekan" },
]

export default function DenahPura() {
    return (
        <div className="w-full max-w-4xl mx-auto aspect-[5/3] relative rounded-lg border-2 border-foreground">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground opacity-50 pointer-events-none" />
            {layout.map(({ id, x, y, w, h, desc }) => (
                <div
                    key={id}
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
                        <TooltipTrigger asChild>
                            <div className="w-full h-full border border-foreground text-xs font-bold flex items-center justify-center hover:text-background hover:animate-pulse hover:bg-foreground cursor-pointer rounded">
                                {id}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{desc}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            ))}

        </div>
    )
}
