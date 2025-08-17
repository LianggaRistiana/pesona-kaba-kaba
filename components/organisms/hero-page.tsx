'use client'
import PelinggihItem from "@/components/atoms/pelinggih-items";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function HeroPage(){
    const router = useRouter();

    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-16 lg:my-0">
            {/* Card 1 */}
            <div className="relative text-center w-full h-80 overflow-hidden rounded-lg cursor-pointer border-2 transition-all duration-300 ease-in-out hover:border-primary">
              <motion.img
                src="https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK01.JPG"
                alt="Pura Luhur Kung-Kung"
                className="absolute inset-0 w-full h-full object-cover z-10"
                whileHover={{ scale: 1.2, opacity: 0.4 }}
                whileTap={{ scale: 1 }}
                onClick={() =>router.push('/pura-luhur-kungkung')}
              />
              <Badge className="absolute bottom-2 right-2 z-20">
                <span className="font-bold text-md">Pura Luhur Kung-Kung</span>
              </Badge>
            </div>

            {/* Card 2 */}
            <div className="relative text-center w-full h-80 overflow-hidden rounded-lg cursor-pointer border-2 transition-all duration-300 ease-in-out hover:border-primary">
              <motion.img
                src="https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK08.JPG"
                alt="Pura Ujan Angin"
                className="absolute inset-0 w-full h-full object-cover z-10"
                whileHover={{ scale: 1.2, opacity: 0.4 }}
                whileTap={{ scale: 1 }}
                onClick={() =>router.push('/pura-ujan-angin')}
              />
              <Badge className="absolute bottom-2 right-2 z-20">
                <span className="font-bold text-md">Pura Ujan Angin</span>
              </Badge>
            </div>
          </motion.div>
    )
}