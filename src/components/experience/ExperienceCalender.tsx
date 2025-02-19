import { Calendar } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

type ExperienceCalenderProps = {
  years: number;
};

const ExperienceCalender = ({ years }: ExperienceCalenderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      <div className="size-[200px] md:size-[300px] relative">
        <Calendar className="stroke-sky-600 w-full h-full" />
        <motion.span
          initial={{
            opacity: 0.1,
            scale: 2,
            x: "-50%",
            y: "-70%",
          }}
          whileInView={{
            opacity: 1,
            x: "-50%",
            y: "-110%",
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="md:hidden absolute top-[190px] left-1/2 text-8xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-sky-600 to-white bg-clip-text text-transparent font-bold"
        >
          {years}
        </motion.span>
        <motion.span
          initial={{
            opacity: 0.1,
            scale: 2,
            x: "-50%",
            y: "-70%",
          }}
          whileInView={{
            opacity: 1,
            x: "-50%",
            y: "-60%",
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="hidden md:inline absolute top-[190px] left-1/2 text-8xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-sky-600 to-white bg-clip-text text-transparent font-bold"
        >
          {years}
        </motion.span>
      </div>
      <span className="text-5xl md:text-7xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
        Year Professional Experience
      </span>
    </div>
  );
};

export default ExperienceCalender;
