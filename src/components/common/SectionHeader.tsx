import React, { ReactNode } from "react";
import { motion } from "motion/react";
import tw from "@/lib/utils";

type SectionHeaderProps = {
  headingText: string;
  children: ReactNode;
  className?: string;
};

const SectionHeader = ({
  headingText,
  children,
  className,
}: SectionHeaderProps) => {
  return (
    <motion.h2
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className={tw(
        "bg-gradient-to-r from-sky-700/80 to-app-blue-main bg-clip-text text-transparent text-4xl md:text-5xl font-bold mt-[64px] pb-6 relative",
        className
      )}
    >
      {headingText.split(" ").map((word, index, array) => (
        <motion.span
          key={`${headingText}-word-${index}`}
          className="inline-block mr-2 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
      {children}
    </motion.h2>
  );
};

export default SectionHeader;
