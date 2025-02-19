import React from "react";
import GradientText from "../common/GradientText";
import { PointerIcon } from "lucide-react";
import Image from "next/image";
import nodeJs from "@/../public/icons/nodejs.png";
import { motion } from "motion/react";

const largeSectionVariants = {
  blurred: {},
  stable: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const largeSectionChildVariants = {
  blurred: {
    scale: 1.5,
    opacity: 0.1,
  },
  stable: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
};

const ProjectIntro = () => {
  return (
    <section className="grid grid-cols-auto-360 md:grid-cols-auto-500 gap-4 relative">
      <motion.div
        variants={largeSectionVariants}
        initial="blurred"
        whileInView="stable"
        id="years"
        viewport={{
          once: true,
        }}
        transition={{
          ease: "linear",
        }}
        className="md:col-span-2 border-2 bg-white/30 backdrop-blur-24 border-white/30 flex flex-col lg:flex-row items-center justify-between p-2 md:p-8 rounded-lg"
      >
        <motion.div
          variants={largeSectionChildVariants}
          viewport={{
            once: true,
          }}
          className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent"
        >
          7+
        </motion.div>
        <motion.div
          variants={largeSectionChildVariants}
          viewport={{
            once: true,
          }}
          className="text-5xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent  leading-[3]"
        >
          Professional
        </motion.div>
        <motion.div
          variants={largeSectionChildVariants}
          viewport={{
            once: true,
          }}
          className="text-3xl md:text-5xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent  leading-[3]"
        >
          Projects Completed
        </motion.div>
      </motion.div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <motion.div
          variants={largeSectionVariants}
          initial="blurred"
          whileInView="stable"
          viewport={{
            once: true,
          }}
          className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent"
        >
          {"Full Stack".split("").map((l) => (
            <motion.span
              viewport={{
                once: true,
              }}
              className=""
              variants={largeSectionChildVariants}
            >
              {l}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <motion.ul
          variants={largeSectionVariants}
          initial="blurred"
          whileInView="stable"
          viewport={{
            once: true,
          }}
          transition={{
            delay: 4,
          }}
          className="flex flex-col gap-4 text-slate-600 text-2xl"
        >
          <motion.li
            variants={largeSectionChildVariants}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Covering
            Frontend
          </motion.li>
          <motion.li
            variants={largeSectionChildVariants}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Integrating
            Backend
          </motion.li>
          <motion.li
            variants={largeSectionChildVariants}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Databse
            Management
          </motion.li>
          <motion.li
            variants={largeSectionChildVariants}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Figma designs
            to Code
          </motion.li>
        </motion.ul>
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <motion.div
          variants={largeSectionVariants}
          initial="blurred"
          whileInView="stable"
          viewport={{
            once: true,
          }}
          className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent"
        >
          {"MERN".split("").map((l) => (
            <motion.span
              viewport={{
                once: true,
              }}
              className=""
              variants={largeSectionChildVariants}
            >
              {l}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectIntro;
