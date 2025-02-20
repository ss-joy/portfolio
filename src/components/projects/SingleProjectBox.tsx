import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

type SingleProjectBoxProps = {
  image: StaticImport;
  projectName: string;
  projectNameColor: string;
};

const SingleProjectBox = ({
  image,
  projectName,
  projectNameColor,
}: SingleProjectBoxProps) => {
  const targetRef = useRef(null);
  // const { scrollY, scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"],
  // });
  // const opacityY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("target scroll: ", latest);
  // });

  return (
    <motion.div
      ref={targetRef}
      // style={{
      //   opacity: opacityY,
      // }}
      className="p-3 bg-white/40 rounded-lg backdrop-blur-24"
    >
      <h1 className={"text-4xl md:text-7xl my-8 " + ` ${projectNameColor} `}>
        {projectName}
      </h1>
      <Image
        src={image}
        width={1100}
        height={900}
        alt="project image"
        className="w-full h-full rounded-lg"
      />
    </motion.div>
  );
};

export default SingleProjectBox;
