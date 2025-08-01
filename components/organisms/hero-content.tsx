'use client'

import { motion } from "framer-motion";
import Typewriter from "../atoms/typewriter";

type Props = {
    title: string;
    description: string;
}



export default function HeroContent(
    {
        title,
        description
    }: Props
) {
    return (
        <div className="min-h-screen flex items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <div className="px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-8xl font-bold">
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 md:mt-8 text-justify"
                    >
                        {description}
                    </motion.p>
                    {/* <div className="mt-8">

                        <Typewriter speed={5} text={description}></Typewriter>
                    </div> */}
                </div>
                <div></div>

            </div>
        </div>

    )
}