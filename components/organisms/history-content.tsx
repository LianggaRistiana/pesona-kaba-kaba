'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    content: string;
};

export default function HistoryContent({ content }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="min-h-screen w-full flex text-center items-center">
            <div ref={ref} className="w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-4xl font-bold"
                >
                    Sejarah
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:mt-4 text-justify md:mx-24 whitespace-pre-line"
                >
                    {content}
                </motion.p>
            </div>
        </div>
    );
}
