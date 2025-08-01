'use client';

import PelinggihItem from "../atoms/pelinggih-items";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  listPelinggih: Pelinggih[];
};

export default function PelinggihList({ listPelinggih }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-4">
      {listPelinggih.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <PelinggihItem {...item} />
        </motion.div>
      ))}
    </div>
  );
}
