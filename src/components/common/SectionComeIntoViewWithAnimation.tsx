import React, { ReactNode } from "react";
import { motion } from "motion/react";
type SectionComeIntoViewWithAnimationProps = {
  children: ReactNode;
};
const SectionComeIntoViewWithAnimation = ({
  children,
}: SectionComeIntoViewWithAnimationProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionComeIntoViewWithAnimation;
