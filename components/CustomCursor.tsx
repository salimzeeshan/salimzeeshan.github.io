"use client";

import { motion } from "framer-motion";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export function CustomCursor() {
  const { isEnabled, isHovering, smoothX, smoothY } = useCustomCursor();

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-3.5 w-3.5 rounded-full bg-accent mix-blend-difference"
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: isHovering ? 2.8 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    />
  );
}
