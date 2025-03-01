import { Variants } from "motion/react";
import React from "react";
import { motion } from "motion/react";
import { v4 } from "uuid";
import me from "@/../public/profile/me.png";
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

// for large dvices
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
    <div className="flex flex-col-reverse items-center md:flex-row gap-4 justify-between mt-32 leading-[60px] text-center md:text-start">
      <section className="text-sky-900 text-4xl md:text-5xl">
        Hi there!👋 This is
        {/* for large device */}
        <div className="hidden md:block overflow-hidden h-16 my-4">
          <motion.div
            variants={parentVarient}
            initial="initial"
            whileInView="visible"
            className="text-sky-800 md:text-6xl relative"
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
            className="text-sky-800 text-6xl relative"
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
        {/* for smaller devies */}
        <div className="overflow-hidden h-12 my-4 md:hidden">
          <motion.div
            variants={parentVarientMobile}
            initial="initial"
            whileInView="visible"
            className="text-sky-800 !text-4xl relative"
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
            className="text-sky-800 !text-4xl relative"
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
          transition={{ duration: 2, delay: 1.5 }}
          viewport={{
            once: true,
          }}
        >
          I am a{" "}
          <span className="relative inline-block">
            Full-Stack
            <motion.svg
              width="844"
              height="93"
              viewBox="0 0 844 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"absolute w-full -top-1 md:top-2 left-0"}
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  stroke: "#7dd3fc",
                }}
                animate={{
                  pathLength: 1,
                  stroke: "#0c4a6e",
                }}
                transition={{
                  duration: 5,
                  delay: 3,
                }}
                d="M1.95959 64.2329C8.26696 57.1371 12.8226 50.0106 20.9442 43.9946C28.1512 38.6561 35.1701 28.8653 43.7795 25.6368C51.4776 22.75 59.9181 17.7707 68.4058 17.4878C76.5628 17.2159 84.7791 17.4878 92.9425 17.4878C108.869 17.4878 119.923 20.9484 134.136 28.0547C146.147 34.0603 155.994 45.0397 168.881 49.7258C182.578 54.7066 195.318 63.3022 208.283 69.785C220.202 75.7445 242.705 69.0076 251.804 60.9196C265.019 49.1731 275.831 35.3701 288.072 23.1294C299.528 11.6734 312.747 7.81634 328.37 7.81634C335.08 7.81634 341.281 7.44919 347.713 9.42824C355.327 11.7713 362.632 22.8249 368.22 28.4129C384.01 44.2031 401.627 54.8143 419.442 67.8149C439.864 82.7174 464.541 94.4257 490.724 89.6651C515.988 85.0717 534.351 61.5884 551.976 44.5319C567.673 29.3414 581.069 15.7356 600.692 6.20444C617.196 -1.81192 644.997 1.97118 661.228 9.42824C682.408 19.1598 701.634 32.9845 724.092 40.0544C747.466 47.413 768.944 48.8814 791.792 37.4574C809.175 28.7656 828.016 16.7256 841.761 2.98064"
                stroke="#0c4a6e"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
          &nbsp;{" "}
          <span className="!text-5xl md:!text-6xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
            Software Engineer
          </span>{" "}
          specializing in building
          <br />
          Full-Stack web applications
        </motion.div>
      </section>
      <section>
        <Image
          className="object-fit rounded-md w-[200px] md:w-[400px] shrink-0"
          src={me}
          width={400}
          height={400}
          alt="profile image"
        />
      </section>
    </div>
  );
};

export default Intro;
