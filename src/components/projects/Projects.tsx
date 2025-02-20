import { SkillName } from "@/types";
import { ExternalLinkIcon, Projector } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "motion/react";
import { skills } from "../Pills";
import ProjectIntro from "./ProjectIntro";
import riseStaffing from "@/../public/images/uplift/cropped/staffing_3.png";
import boxyClient from "@/../public/images/boxy/cropped/boxy_client_3.png";
import boxyFighter from "@/../public/images/boxy/cropped/boxy_fighter_3.png";
import dispense from "@/../public/images/dispense-go/cropped/dispense_3.png";
import airlyFormBuilder from "@/../public/images/airly-admin/cropped/admin_form_3.png";
import airlyCareer from "@/../public/images/airly/cropped/airly_career_3.png";
import ast from "@/../public/images/ast/cropped/ast_3.png";
import we from "@/../public/images/webuy/cropped/we_3.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SingleProjectBox from "./SingleProjectBox";
import { v4 } from "uuid";

type Project = {
  projectName: string;
  isLive: boolean;
  liveLink?: string;
  colorScheme: string;
  skills: SkillName[];
  projectPrimayImage: StaticImport;
};
const projects: Project[] = [
  {
    isLive: true,
    projectName: "Uplift",
    liveLink: "https://upliftnw.org/",
    colorScheme: "text-green-800",
    skills: ["Php", "Twig", "Craft CMS", "MySQL"],
    projectPrimayImage: riseStaffing,
  },
  {
    isLive: false,
    projectName: "Boxy Client Dashboard",
    colorScheme: "text-cyan-800",
    skills: ["Next.js", "Tailwind CSS", "Formik", "Yup"],
    projectPrimayImage: boxyClient,
  },
  {
    isLive: false,
    projectName: "Boxy Fighter Dashboard",
    colorScheme: "text-cyan-800",
    skills: ["Next.js", "Tailwind CSS", "Formik", "Yup"],
    projectPrimayImage: boxyFighter,
  },
  {
    isLive: false,
    projectName: "Dispense Go",
    colorScheme: "text-green-800",
    skills: ["React.js", "Next.js", "Redux", "Express.js", "Tailwind CSS"],
    projectPrimayImage: dispense,
  },
  {
    isLive: true,
    projectName: "AST (Audio Support Tracker)",
    colorScheme: "text-sky-800",
    liveLink: "https://ast-nine.vercel.app/",
    skills: ["Next.js", "Tailwind CSS"],
    projectPrimayImage: ast,
  },
  {
    isLive: true,
    projectName: "WeBuy",
    colorScheme: "text-sky-800",
    liveLink: "https://we-buy-omega.vercel.app/",
    skills: [
      "Next.js",
      "NestJS",
      "Redux",
      "RTK Query",
      "FireBase",
      "React Hook Form",
    ],
    projectPrimayImage: we,
  },
  {
    isLive: false,
    projectName: "Airly Forms",
    colorScheme: "text-sky-800",
    projectPrimayImage: airlyFormBuilder,
    liveLink: "",
    skills: ["React.js", "Next.js", "Redux", "Express.js", "Tailwind CSS"],
  },
  {
    isLive: false,
    colorScheme: "text-sky-800",
    projectName: "Airly Carrers",
    liveLink: "",
    projectPrimayImage: airlyCareer,
    skills: ["React.js", "Next.js", "Redux", "Express.js", "Tailwind CSS"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  console.log({ selectedProject });
  const selectedProjectDetails = projects.find(
    (pro) => pro.projectName === selectedProject
  );
  const getSkillIconUrl = (skillName: SkillName) =>
    skills.find((skill) => skill.name === skillName)?.iconUrl;

  return (
    <Element name="Projects">
      <div className="w-full min-h-screen pt-12">
        <h2 className="text-sky-600 text-4xl md:text-5xl font-bold mt-[64px] pb-6 relative">
          Completed Projets
          <Projector className="text-sky-600 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
        </h2>

        <ProjectIntro />

        <section className="flex flex-col gap-8 md:gap-12 mt-4">
          {projects.map(
            ({
              colorScheme,
              isLive,
              projectName,
              projectPrimayImage,
              skills,
              liveLink,
            }) => {
              return (
                <SingleProjectBox
                  key={v4()}
                  image={projectPrimayImage}
                  projectName={projectName}
                  projectNameColor={colorScheme}
                />
              );
            }
          )}
        </section>
      </div>
    </Element>
  );
};

export default Projects;
