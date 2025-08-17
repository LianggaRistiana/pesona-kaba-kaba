import { Badge } from "../ui/badge";
import { motion } from "motion/react"

export default function PelinggihItem({
    desc,
    imgSrc
}: MapItem) {
    return (
        <div className="text-center w-full h-76 relative w-full overflow-hidden rounded-lg cursor-pointer border-2 hover:border-primary hover:border-primary transition-all duration-300 ease-in-out">
            <motion.img
                src={imgSrc}
                alt={desc}
                className="absolute w-full h-full object-cover z-10"
                whileHover={{ scale: 1.2, opacity: 0.4 }}
                whileTap={{ scale: 1 }}
            />
            {/* <motion.div /> */}
            <Badge className="absolute bottom-2 right-2 z-20">
                <a className="font-bold text-md">{desc}</a></Badge>
        </div>
    )
}