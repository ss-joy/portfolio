import React, { ReactNode } from "react";
import { motion } from "motion/react";
import tw from "@/lib/utils";
import { v4 } from "uuid";

type SectionHeaderProps = {
  headingText: string;
  children: ReactNode;
  className?: string;
};

const h2Variants = {
  atBottom: {},
  comeToMiddle: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};
const spanVariants = {
  atBottom: {
    opacity: 0.1,
    y: 10,
  },
  comeToMiddle: {
    opacity: 0.9,
    y: 0,
    transition: {
      duration: 0.001,
      type: "spring",
      stiffness: 200,
    },
  },
};

const SectionHeader = ({
  headingText,
  children,
  className,
}: SectionHeaderProps) => {
  return (
    <motion.h2
      variants={h2Variants}
      initial="atBottom"
      whileInView="comeToMiddle"
      className={tw(
        "text-sky-600 text-4xl md:text-5xl font-bold mt-[64px] pb-6 relative",
        className
      )}
    >
      {" "}
      {headingText.split("").map((t) => (
        <motion.span
          key={v4()}
          variants={spanVariants}
          className="inline-block"
        >
          {t}
        </motion.span>
      ))}
      {children}
    </motion.h2>
  );
};

export default SectionHeader;
