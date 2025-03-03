import Image from "next/image";
import { JSX, useRef, useState } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
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
import { ExternalLinkIcon, GithubIcon, Lock } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const revealIconChildVarient: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
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
    githubRepoLink,
    isGithubPrivate,
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
    offset: ["start end", "start 30%"],
  });

  // useMotionValueEvent(scrollYProgressForScaling, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const containerScale = useTransform(
    scrollYProgressForScaling,
    [0, 1],
    [0.8, 1]
  );
  const getSkillIconUrl = (skillName: SkillName) =>
    skills.find((skill) => skill.name === skillName)?.iconUrl;

  return (
    <>
      <>
        <motion.div
          ref={containerRef}
          style={{
            opacity: containerOpacity,
            scale: containerScale,
          }}
          onClick={() => setShowModal((p) => !p)}
          className="p-4 md:p-8 bg-white/40 rounded-lg backdrop-blur-24 hover:cursor-pointer"
        >
          <motion.div
            initial="initial"
            whileHover="animate"
            className="flex justify-between items-center"
          >
            <h1 className={"text-3xl md:text-6xl my-8 " + ` ${colorScheme} `}>
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
                className={
                  "font-normal text-3xl md:text-6xl my-4 md:my-8 " +
                  ` ${colorScheme} `
                }
              >
                {projectName}
              </DialogTitle>
            </DialogHeader>
            <Carousel className="w-full max-w-[1000px] mx-auto">
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

            <section className="p-2  bg-white w-full max-w-[1000px] mx-auto rounded-lg">
              <ul className="flex justify-center items-center flex-wrap gap-6">
                {isGithubPrivate ? (
                  <li className="flex flex-col justify-center items-center">
                    <Lock className="size-[50px] stroke-sky-600" />
                    <span className="text-sky-600">Private Github Repo</span>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={githubRepoLink}
                      target="_blank"
                      className="flex flex-col justify-center items-center"
                    >
                      <GithubIcon className="size-[50px] stroke-sky-600" />
                      <span className="text-sky-600">Github Repo</span>
                    </Link>
                  </li>
                )}
                {isLive ? (
                  <li>
                    <Link
                      href={liveLink as string}
                      target="_blank"
                      className="flex flex-col justify-center items-center"
                    >
                      <ExternalLinkIcon className="size-[50px] stroke-sky-600" />
                      <span className="text-sky-600">Live Link</span>
                    </Link>
                  </li>
                ) : null}
              </ul>
            </section>

            <motion.section
              variants={revealIconParentVarient}
              initial="hidden"
              whileInView="visible"
              className="flex gap-4 p-2 flex-wrap justify-center items-center bg-white w-full max-w-[1000px] mx-auto rounded-lg"
            >
              <TooltipProvider>
                {skillsUsed.map((sk) => {
                  return (
                    <Tooltip key={v4()}>
                      <TooltipTrigger>
                        {" "}
                        <motion.img
                          key={v4()}
                          variants={revealIconChildVarient}
                          className="size-[50px]"
                          src={getSkillIconUrl(sk)}
                          alt="skill icon"
                        />
                      </TooltipTrigger>
                      <TooltipContent className="focus:ring-0 focus:border-0 focus:outline-0 outline-0 text-sky-700">
                        <p>{sk}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </motion.section>

            <section className="p-2 md:p-4 w-full max-w-[1000px] mx-auto bg-white rounded-lg">
              {projectDescription}
            </section>
          </CustomDialogContent>
        </Dialog>
      </>
    </>
  );
};

export default SingleProjectBox;
