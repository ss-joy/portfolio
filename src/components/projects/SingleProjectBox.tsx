import Image from "next/image";
import { JSX, useRef, useState } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import AnimatedChevronRight from "./AnimatedChevronRight";
import {
  CustomDialogContent,
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Project } from "./Projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { SkillName } from "@/types";
import { skills } from "@/lib/skillsList";
import { v4 } from "uuid";

type SingleProjectBoxProps = {
  project: Project;
};

const revealIconParentVarient = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const revealIconChildVarient = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    type: "spring",
    stiffness: 500,
  },
};

const SingleProjectBox = ({
  project: {
    carouselImages,
    colorScheme,
    isLive,
    projectName,
    projectPrimayImage,
    skillsUsed,
    liveLink,
    projectDescription,
  },
}: SingleProjectBoxProps) => {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);

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
  const getSkillIconUrl = (skillName: SkillName) =>
    skills.find((skill) => skill.name === skillName)?.iconUrl;

  return (
    <>
      <>
        {" "}
        <motion.div
          ref={containerRef}
          style={{
            opacity: containerOpacity,
            scale: containerScale,
          }}
          onClick={() => setShowModal((p) => !p)}
          className="p-3 bg-white/40 rounded-lg backdrop-blur-24 hover:cursor-pointer"
        >
          <motion.div
            initial="initial"
            whileHover="animate"
            className="flex justify-between items-center"
          >
            <h1 className={"text-4xl md:text-7xl my-8 " + ` ${colorScheme} `}>
              {projectName}
            </h1>
            <AnimatedChevronRight />
          </motion.div>
          <Image
            src={projectPrimayImage}
            width={1100}
            height={900}
            alt="project image"
            className="w-full h-full rounded-lg"
          />
        </motion.div>
      </>
      <>
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <CustomDialogContent className="max-w-none w-[90%] backdrop-blur-12 mt-4 bg-sky-100/90">
            <DialogHeader>
              <DialogTitle
                className={"text-4xl md:text-7xl my-8 " + ` ${colorScheme} `}
              >
                {projectName}
              </DialogTitle>
            </DialogHeader>
            <Carousel className=" w-full max-w-[1000px] mx-auto">
              <CarouselContent className="">
                {carouselImages.map((ci) => {
                  return (
                    <CarouselItem className="" key={v4()}>
                      <div className="p-4 bg-white  rounded-xl">
                        <Image
                          src={ci}
                          alt="slide image"
                          width={1920}
                          height={1080}
                          className=""
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <motion.section
              variants={revealIconParentVarient}
              initial="hidden"
              whileInView="visible"
              className="flex gap-4 px-2 justify-center items-center bg-white w-full max-w-[1000px] mx-auto rounded-lg"
            >
              {skillsUsed.map((sk) => {
                return (
                  <motion.img
                    key={v4()}
                    variants={revealIconChildVarient}
                    className="size-[50px]"
                    src={getSkillIconUrl(sk)}
                    alt="skill icon"
                  />
                );
              })}
            </motion.section>

            <section className="p-2 w-full max-w-[1000px] mx-auto bg-white">
              {projectDescription}
            </section>
          </CustomDialogContent>
        </Dialog>
      </>
    </>
  );
};

export default SingleProjectBox;
