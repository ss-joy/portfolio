import React from "react";
import { motion } from "motion/react";

const arrowIconParentVarients = {
  initial: {},
  animate: {},
};

const arrowIconVarients = {
  initial: {
    pathLength: 0,
    stroke: "#ffffff",
  },
  animate: {
    pathLength: 1,
    stroke: "#64748b",
    transition: {
      duration: 0.9,
      delay: 0.3,
    },
  },
};

const AnimatedChevronRight = () => {
  return (
    <motion.svg
      variants={arrowIconParentVarients}
      initial="initial"
      whileInView="animate"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-move-right stroke-slate-500 size-[4.5rem] hover:cursor-pointer"
    >
      <motion.path variants={arrowIconVarients} d="M18 8L22 12L18 16" />
      <motion.path variants={arrowIconVarients} d="M2 12H22" />
    </motion.svg>
  );
};

export default AnimatedChevronRight;
