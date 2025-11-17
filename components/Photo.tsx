"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.18, delay: 0.12, ease: "easeIn" },
        }}
        className="relative w-full h-full"
      >
        <motion.div
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] xl:w-[498px] xl:h-[498px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.18, delay: 0.18, ease: "easeInOut" },
          }}
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={90}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 498px"
            alt="Basit Adebisi - Full Stack Developer"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
