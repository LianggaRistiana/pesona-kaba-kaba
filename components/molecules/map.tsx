'use client'

import CompassPlus from "../atoms/compas";
import MapItem from "../atoms/map-item";

type Props = {
    mapItems: MapItem[];
    children?: React.ReactNode;
};

export default function Map({
    mapItems,
    children
}: Props) {
    return (
        <div className="w-full max-w-4xl mx-auto aspect-[5/2.8] relative rounded-lg border-2 border-foreground backdrop-blur-sm">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground opacity-50 pointer-events-none" />
            {/* <div className="absolute top-4 right-8">
                <CompassPlus northDegrees={90} size={20} />
            </div> */}
            {children}
            {mapItems.map((item) => (
                <MapItem key={item.id} {...item}></MapItem>
            ))}
        </div>
    )
}



