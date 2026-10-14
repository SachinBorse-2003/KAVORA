"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

// Kavora: the demo's image cards and its own <ReactLenis root> are gone — the
// site already runs one Lenis instance (ui/smooth-scroll), and the cards take
// any children so sections can stack text panels.

const StickyCard_001 = ({
  i,
  progress,
  range,
  targetScale,
  className,
  children,
}: {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{
          scale,
          // Each card lands a little lower, so the ones beneath still show an edge
          top: `${i * 28}px`,
        }}
        className={cn("relative w-full origin-top overflow-hidden", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Skiper16 = ({
  items,
  cardClassName,
  className,
}: {
  items: React.ReactNode[];
  cardClassName?: string;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className={cn("relative", className)}>
      {items.map((item, i) => {
        const targetScale = Math.max(0.5, 1 - (items.length - i - 1) * 0.05);
        return (
          <StickyCard_001
            key={i}
            i={i}
            progress={scrollYProgress}
            range={[i / items.length, 1]}
            targetScale={targetScale}
            className={cardClassName}
          >
            {item}
          </StickyCard_001>
        );
      })}
    </div>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
