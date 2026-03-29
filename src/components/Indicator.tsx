"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Indicator({
  progressIndex,
  count,
}: {
  progressIndex: MotionValue<number>;
  count: number;
}) {
  const active = useTransform(progressIndex, (v) =>
    Math.round(v)
  );

  return (
    <div className="pointer-events-none absolute -bottom-10 left-0 right-0 flex justify-center gap-2">

      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="h-2 w-2 rounded-full bg-white/30"
          animate={{
            scale: active.get() === i ? 1.4 : 1,
            opacity: active.get() === i ? 1 : 0.4,
          }}
        />
      ))}

    </div>
  );
}