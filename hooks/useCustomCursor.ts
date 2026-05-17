"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useCustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 280, damping: 28, mass: 0.4 });
  const smoothY = useSpring(cursorY, { stiffness: 280, damping: 28, mass: 0.4 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;

    setIsEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 7);
      cursorY.set(event.clientY - 7);
    };

    const setHover = (event: Event) => {
      const target = event.target as HTMLElement;
      setIsHovering(Boolean(target.closest("a, button, [data-cursor='hover']")));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", setHover);
    document.addEventListener("mouseout", setHover);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", setHover);
      document.removeEventListener("mouseout", setHover);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [cursorX, cursorY]);

  return { isEnabled, isHovering, smoothX, smoothY };
}
