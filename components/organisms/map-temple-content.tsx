'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Map from "../molecules/map";

type Props = {
    mapItems: MapItem[];
    children?: React.ReactNode;
};

export default function MapTempleContent({
    mapItems,
    children
}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="relative min-h-screen w-full flex text-center items-center">
            <div ref={ref} className="w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-4xl font-bold"
                >
                    Denah
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:mt-4  md:mx-24 "
                >
                    <Map mapItems={mapItems}>{children}</Map>
                </motion.div>
            </div>
        </div>
    )
}