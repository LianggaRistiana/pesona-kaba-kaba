'use client';

import PelinggihItem from "../atoms/pelinggih-items";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  listPelinggih: MapItem[];
};

export default function PelinggihList({ listPelinggih }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll(); // cek awal
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* tombol kiri */}
      {hovered && canScrollLeft && (
        <Button
          onClick={() => scroll("left")}
          size={"icon"}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground/70 hover:bg-foreground p-2 rounded-full shadow z-30"
        >
          <ChevronLeft />
        </Button>
      )}

      {/* slider */}
      <div
        ref={ref}
        className="w-full overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        <motion.div className="flex gap-3 w-max">
          {listPelinggih.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="min-w-[200px]"
            >
              <PelinggihItem {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* tombol kanan */}
      {hovered && canScrollRight && (
        <Button
          onClick={() => scroll("right")}
          size={"icon"}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground/70 hover:bg-foreground p-2 rounded-full shadow z-30"
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  );
}
