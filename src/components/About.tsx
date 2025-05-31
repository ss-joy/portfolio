import { Variants } from "motion/react";
import React from "react";
import { motion } from "motion/react";
import { v4 } from "uuid";
import me from "@/../public/profile/me_square.png";
import Image from "next/image";

// for small devices
const parentVarientMobile: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const spanVariantForMobileFirstText: Variants = {
  initial: { top: 0, opacity: 1 },
  visible: { top: -65, opacity: 0 },
};

const spanVariantForMobileSecondText: Variants = {
  initial: { top: 0, opacity: 0 },
  visible: {
    top: -40,
    opacity: 1,
  },
};

// for large devices
const parentVarient: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const spanVariantForFirstText: Variants = {
  initial: { top: 0, opacity: 1 },
  visible: { top: -65, opacity: 0 },
};

const spanVariantForSecondText: Variants = {
  initial: { top: 0, opacity: 0 },
  visible: {
    top: -60,
    opacity: 1,
  },
};

const Intro = () => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row gap-8 justify-between leading-normal text-center md:text-start py-12 md:pt-40">
      <motion.section
        className="text-slate-800 dark:text-slate-100 text-4xl md:text-5xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
          <span className="inline-block py-1 px-3 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 rounded-full text-white text-sm font-medium">
            Welcome
          </span>
          <span className="text-2xl">👋</span>
        </p>

        <div>Hi, I'm</div>

        {/* name for large device */}
        <div className="hidden md:block overflow-hidden h-24 my-4">
          <motion.div
            variants={parentVarient}
            initial="initial"
            whileInView="visible"
            className="text-sky-600  md:text-6xl lg:text-7xl font-bold relative"
          >
            {"Sakil Sazzad Joy ".split("").map((t) => (
              <motion.span
                key={v4()}
                variants={spanVariantForFirstText}
                className="relative"
              >
                {t === " " ? "\u00A0" : t}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={parentVarient}
            initial="initial"
            whileInView="visible"
            className="text-sky-600  md:text-6xl lg:text-7xl font-bold relative"
          >
            {"Sakil Sazzad Joy".split("").map((t) => (
              <motion.span
                key={v4()}
                className="relative"
                variants={spanVariantForSecondText}
              >
                {t === " " ? "\u00A0" : t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* name for smaller devices */}
        <div className="overflow-hidden h-12 my-4 md:hidden">
          <motion.div
            variants={parentVarientMobile}
            initial="initial"
            whileInView="visible"
            className="text-sky-600 !text-4xl font-bold relative"
          >
            {"Sakil Sazzad Joy ".split("").map((t) => (
              <motion.span
                key={v4()}
                variants={spanVariantForMobileFirstText}
                className="relative"
              >
                {t === " " ? "\u00A0" : t}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={parentVarientMobile}
            initial="initial"
            whileInView="visible"
            className="text-sky-600 !text-4xl font-bold relative"
          >
            {"Sakil Sazzad Joy".split("").map((t) => (
              <motion.span
                key={v4()}
                className="relative"
                variants={spanVariantForMobileSecondText}
              >
                {t === " " ? "\u00A0" : t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{
            once: true,
          }}
          className="mt-6 text-3xl md:text-4xl leading-relaxed"
        >
          <span className="relative inline-block text-slate-600">
            Full-Stack
          </span>
          <span className="font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-sky-500  bg-clip-text text-transparent">
            &nbsp;Software Engineer&nbsp;
          </span>
        </motion.div>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          specializing in building full-stack web applications with modern
          technologies
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="size-[220px] md:size-[360px]"
      >
        <Image
          className="object-cover rounded-full border-4 border-white w-full h-full"
          src={me}
          width={400}
          height={400}
          alt="Sakil Sazzad Joy"
          priority
        />
      </motion.section>
    </div>
  );
};

export default Intro;
