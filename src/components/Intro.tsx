import React from "react";
import { motion } from "motion/react";
import me2 from "@/../public/profile/me2.png";

import Image from "next/image";
import MyName from "./intro/MyName";

const Intro = () => {
  return (
    <>
      <div className="my-10 flex flex-col-reverse items-center md:flex-row gap-8 justify-between leading-normal text-center md:text-start py-12 md:pt-40">
        <motion.section className="text-slate-800 dark:text-slate-100 text-4xl md:text-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5 }}
            viewport={{
              once: true,
            }}
            className="mt-6 text-3xl md:text-4xl leading-relaxed"
          >
            <span className="relative inline-block text-slate-500">
              Full-Stack
            </span>
            <span className="font-bold bg-gradient-to-r from-sky-700/80 to-app-blue-main  bg-clip-text text-transparent">
              &nbsp;Software Engineer&nbsp;
            </span>
          </motion.div>
        </motion.section>
      </div>
      <MyName />
      <motion.section
        className="py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          className="object-cover rounded-full size-[330px] block mx-auto"
          src={me2}
          width={400}
          height={400}
          alt="Sakil Sazzad Joy"
          priority
        />
      </motion.section>
    </>
  );
};

export default Intro;
