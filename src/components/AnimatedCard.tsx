"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

type Props = {
  project: any;
  index: number;
  progressIndex: MotionValue<number>;
  total: number;
};

export default function AnimatedCard({
  project,
  index,
  progressIndex,
  total,
}: Props) {

  const scale = useTransform(
    progressIndex,
    [index - 1, index, index + 1],
    [0.92, 1, 0.96]
  );

  const opacity = useTransform(
    progressIndex,
    [index - 1, index, index + 1],
    [0.15, 1, 0.25]
  );

  const y = useTransform(
    progressIndex,
    [index - 1, index, index + 1],
    [40, 0, -20]
  );

  // 🔥 depth rotation
  const rotate = useTransform(
    progressIndex,
    [index - 1, index, index + 1],
    [-2, 0, 2]
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y,
        rotate,
        zIndex: total - index,
        willChange: "transform, opacity",
      }}
      className="absolute inset-0"
    >
      <ProjectCard
        project={project}
        className="
          h-full 
          rounded-2xl 
          border border-white/15 
          bg-gradient-to-br from-white/10 to-white/5 
          backdrop-blur-md
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        "
      />
    </motion.div>
  );
}