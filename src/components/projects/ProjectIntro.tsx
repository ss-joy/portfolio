import React from "react";
import GradientText from "../common/GradientText";
import { PointerIcon } from "lucide-react";
import { motion } from "motion/react";
import { v4 } from "uuid";

const revealParentVariants = {
  blurred: {},
  stable: {},
};

const revealChildVariants = {
  blurred: {
    scale: 5,
    opacity: 0,
  },
  stable: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.8,
    },
  },
};

const typeWriterParentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const typeWriterChildVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    color: "#0284c7",
  },
  visible: {
    opacity: 1,
    y: 0,
    color: "#075985",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const bounceInParentVarients = {
  bottom: {},
  atPlace: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const bounceInChildVarients = {
  bottom: {
    y: 100,
    opacity: 0,
  },
  atPlace: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      type: "spring",
    },
  },
};

const ProjectIntro = () => {
  return (
    <section className="grid grid-cols-auto-360 md:grid-cols-auto-500 gap-4 relative">
      <motion.div
        variants={revealParentVariants}
        initial="blurred"
        whileInView="stable"
        viewport={{
          once: true,
        }}
        id="years"
        className="md:col-span-2 border-2 bg-white/30 backdrop-blur-24 border-white/30 flex flex-col lg:flex-row items-center justify-between p-2 md:p-8 rounded-lg overflow-hidden"
      >
        <motion.div
          variants={revealChildVariants}
          className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent"
        >
          7+
        </motion.div>
        <motion.div
          variants={revealChildVariants}
          className="text-5xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent  leading-[3]"
        >
          Professional
        </motion.div>
        <motion.div
          variants={revealChildVariants}
          className="text-3xl md:text-5xl md:leading-[3] bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent"
        >
          Projects Completed
        </motion.div>
      </motion.div>

      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <motion.div
          variants={typeWriterParentVariants}
          viewport={{
            once: true,
          }}
          initial="hidden"
          whileInView="visible"
          className="text-8xl md:text-9xl text-sky-900"
        >
          {"Full Stack".split("").map((l) => (
            <motion.span
              variants={typeWriterChildVariants}
              className="inline-block"
              key={v4()}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <motion.ul
          variants={bounceInParentVarients}
          viewport={{
            once: true,
          }}
          initial="bottom"
          whileInView="atPlace"
          className="flex flex-col gap-4 text-sky-800 text-2xl"
        >
          <motion.li
            variants={bounceInChildVarients}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Covering
            Frontend
          </motion.li>
          <motion.li
            variants={bounceInChildVarients}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Integrating
            Backend
          </motion.li>
          <motion.li
            variants={bounceInChildVarients}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Databse
            Management
          </motion.li>
          <motion.li
            variants={bounceInChildVarients}
            className="flex items-center gap-2"
          >
            <PointerIcon className="rotate-90 stroke-sky-800" /> Figma designs
            to Production Code
          </motion.li>
        </motion.ul>
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg ">
        <motion.div
          variants={typeWriterParentVariants}
          viewport={{
            once: true,
          }}
          initial="hidden"
          whileInView="visible"
          className="text-8xl md:text-9xl text-sky-900"
        >
          {"MERN".split("").map((l) => (
            <motion.span
              variants={typeWriterChildVariants}
              className="inline-block"
              key={v4()}
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
