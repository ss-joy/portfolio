import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import AnimatedChevronRight from "./AnimatedChevronRight";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 45%"],
  });

  const { scrollYProgress: scrollYProgressForScaling } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // useMotionValueEvent(scrollYProgressForScaling, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const containerScale = useTransform(
    scrollYProgressForScaling,
    [0, 1],
    [1, 1.03]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
        opacity: containerOpacity,
        scale: containerScale,
      }}
      className="p-3 bg-white/40 rounded-lg backdrop-blur-24"
    >
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex justify-between items-center"
      >
        <h1 className={"text-4xl md:text-7xl my-8 " + ` ${projectNameColor} `}>
          {projectName}
        </h1>
        <AnimatedChevronRight />
      </motion.div>
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
