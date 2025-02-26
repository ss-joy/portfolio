import type { Skill, SkillName } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { pickRandomString } from "@/lib/utils";

const parentVariants: Variants = {
  init: {},
  appear: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  init: {
    opacity: 0,
    y: 50,
  },
  appear: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      ease: "linear",
      damping: 50,
    },
  },
};

type PillsProps = {
  skills: Skill[];
};
const Pills = ({ skills }: PillsProps) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillName | "">("");

  const skillNames: SkillName[] = skills.map((sk) => sk.name);

  useEffect(() => {
    const intervalValue = setInterval(() => {
      setSelectedSkill(() => {
        return pickRandomString(skillNames) as SkillName;
      });
    }, 2000);

    return () => {
      clearInterval(intervalValue);
    };
  }, []);
  return (
    <motion.section
      variants={parentVariants}
      initial="init"
      whileInView="appear"
      viewport={{
        once: true,
      }}
      className="flex gap-2 md:gap-5 flex-wrap justify-center w-full mx-auto"
    >
      {skills.map((skill, index) => (
        <motion.li
          variants={childVariants}
          key={index}
          whileHover={{
            border: "2px solid #0ea5e9 ",
          }}
          viewport={{
            once: true,
          }}
          whileTap={{
            scale: 0.5,
          }}
          className={`border-[2px] border-transparent relative justify-center items-center z-10 gap-1 md:gap-2 text-sky-300 rounded-lg p-2 hover:cursor-pointer shadow-sm shadow-slate-300 flex flex-col w-[80px] md:w-[120px] md:h-[120px] bg-white`}
        >
          <Image src={skill.iconUrl} alt="Skill icon" width={50} height={50} />{" "}
          <span className="text-base md:text-xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent text-center overflow-hidden overflow-ellipsis w-full whitespace-nowrap select-none">
            {skill.name}
          </span>
          <AnimatePresence>
            {selectedSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute z-[-1] left-[-2px] p-4 -top-[2px] -translate-x-1/2 -translate-y-1/2 w-[calc(100%+4px)] h-[calc(100%+4px)] border-2 border-sky-500 rounded-lg"
              />
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </motion.section>
  );
};

export default Pills;
