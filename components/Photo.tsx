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
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.18, delay: 0.18, ease: "easeInOut" },
          }}
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Description of the image"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
