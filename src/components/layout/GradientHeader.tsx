import { motion } from "motion/react";

const GradientHeader = () => {
  return (
    <motion.div
      initial={{
        backgroundImage:
          "radial-gradient(ellipse 100% 100% at 50% -20%,#f1f5f9 0%,#06b6d4 -120%,#1e293b 70%,#1e293b 100%)",
      }}
      animate={{
        backgroundImage: [
          "radial-gradient(ellipse 100% 100% at 50% -20%,#f1f5f9 0%,#06b6d4 -120%,#1e293b 70%,#1e293b 100%)",
          "radial-gradient(ellipse 100% 100% at 50% -20%,#ffffff 0%,#0891b2 -120%,#1e293b 70%,#1e293b 100%)",
          "radial-gradient(ellipse 100% 100% at 50% -20%,#e2e8f0 0%,#0369a1 -120%,#1e293b 70%,#1e293b 100%)",
          "radial-gradient(ellipse 100% 100% at 50% -20%,#f1f5f9 0%,#06b6d4 -120%,#1e293b 70%,#1e293b 100%)",
        ],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeIn",
        duration: 12,
      }}
      className="page-header-gradient absolute w-full h-[400px]"
    ></motion.div>
  );
};

export default GradientHeader;
