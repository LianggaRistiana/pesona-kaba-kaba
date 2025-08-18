'use client'

import BackgroundVideo from "@/components/atoms/background-video";
import PelinggihItem from "@/components/atoms/pelinggih-items";
import HeroPage from "@/components/organisms/hero-page";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <BackgroundVideo
        src="https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/video/KK-video.mp4"
        opacity={0.8}
        overlayColor="bg-gradient-to-b from-background via-background/50 to-background/60"
      />
      <div className="min-h-screen flex items-center mt-16 lg:mt-0">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          {/* Left Section */}
          <div className="px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-8xl font-bold"
            >
              Pesona Kaba-Kaba
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 lg:mt-8 text-justify"
            >
              Jelajahi Peninggalan Sejarah di desa Kaba-Kaba, Kediri, Tabanan, Bali
            </motion.p>
          </div>

          {/* Right Section */}
          <HeroPage></HeroPage>
          
        </div>
      </div>
    </div>
  );
}
