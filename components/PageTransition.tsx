"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

// This component wraps the children with AnimatePresence for page transitions
// You can customize the transition effects as needed
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      {/* Overlay animation */}
      <motion.div
        key={pathname + "-overlay"}
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#000",
          zIndex: 50,
        }}
      />
      {/* Content fade/scale */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="min-h-screen w-full"
        style={{ position: "relative", zIndex: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// You can add more complex transition effects here if needed
// For example, using motion.div to animate the children
// import { motion } from "framer-motion";
