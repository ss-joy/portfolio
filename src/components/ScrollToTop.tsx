import { ArrowUp } from "lucide-react";
import React from "react";
import { animateScroll } from "react-scroll";
import { motion } from "motion/react";

const ScrollToTop = () => {
  return (
    <motion.div
      initial={{
        backgroundImage: "linear-gradient( to right, #0ea5e9, #2563eb)",
        color: "#ffffff",
      }}
      whileHover={{
        backgroundImage: "linear-gradient( to right, #0ea5e9, #ffffff)",
        color: "#2563eb",
      }}
      transition={{
        type: "tween",
        duration: 0.4,
      }}
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center size-12 rounded-full  shadow-lg shadow-sky-500/30 hover:cursor-pointer"
      onClick={() => animateScroll.scrollToTop()}
    >
      <ArrowUp />
    </motion.div>
  );
};

export default ScrollToTop;
