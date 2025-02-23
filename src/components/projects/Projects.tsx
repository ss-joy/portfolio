import SectionHeader from "../common/SectionHeader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SkillName } from "@/types";
import { ExternalLinkIcon, Projector } from "lucide-react";
import React, { useState } from "react";
import { Element } from "react-scroll";
import ProjectIntro from "./ProjectIntro";
import riseStaffing from "@/../public/images/uplift/cropped/staffing_3.png";
import boxyClient from "@/../public/images/boxy/cropped/boxy_client_3.png";
import boxyFighter from "@/../public/images/boxy/cropped/boxy_fighter_3.png";
import dispense from "@/../public/images/dispense-go/cropped/dispense_3.png";
import airlyFormBuilder from "@/../public/images/airly-admin/cropped/admin_form_3.png";
import airlyCareer from "@/../public/images/airly/cropped/airly_career_3.png";
import ast from "@/../public/images/ast/cropped/ast_3.png";
import we from "@/../public/images/webuy/cropped/we_3.png";
import SingleProjectBox from "./SingleProjectBox";
import { v4 } from "uuid";

import uplift1 from "@/../public/images/uplift/caro/1.png";
import uplift2 from "@/../public/images/uplift/caro/2.png";
import uplift3 from "@/../public/images/uplift/caro/3.png";
import uplift4 from "@/../public/images/uplift/caro/4.png";

import boxyC1 from "@/../public/images/boxy/caro/boxyc1.png";
import boxyC2 from "@/../public/images/boxy/caro/boxyc2.png";
import boxyC3 from "@/../public/images/boxy/caro/boxyc3.png";

import boxyF1 from "@/../public/images/boxy/caro/boxyf1.png";
import boxyF2 from "@/../public/images/boxy/caro/boxyf2.png";
import boxyF3 from "@/../public/images/boxy/caro/boxyf3.png";

export type Project = {
  projectName: string;
  isLive: boolean;
  liveLink?: string;
  colorScheme: string;
  skillsUsed: SkillName[];
  projectPrimayImage: StaticImport;
  carouselImages: StaticImport[];
};
const projects: Project[] = [
  {
    isLive: true,
    projectName: "Uplift",
    liveLink: "https://upliftnw.org/",
    colorScheme: "text-green-800",
    skillsUsed: ["Php", "Twig", "Craft CMS", "MySQL"],
    projectPrimayImage: riseStaffing,
    carouselImages: [uplift1, uplift2, uplift3, uplift4],
  },
  {
    isLive: false,
    projectName: "Boxy Client Dashboard",
    colorScheme: "text-cyan-800",
    skillsUsed: ["Next.js", "Tailwind CSS", "Formik", "Yup"],
    projectPrimayImage: boxyClient,
    carouselImages: [boxyC1, boxyC2, boxyC3],
  },
  {
    isLive: false,
    projectName: "Boxy Fighter Dashboard",
    colorScheme: "text-cyan-800",
    skillsUsed: ["Next.js", "Tailwind CSS", "Formik", "Yup"],
    projectPrimayImage: boxyFighter,
    carouselImages: [boxyF1, boxyF2, boxyF3],
  },
  {
    isLive: false,
    projectName: "Dispense Go",
    colorScheme: "text-green-800",
    skillsUsed: ["React.js", "Next.js", "Redux", "Express.js", "Tailwind CSS"],
    projectPrimayImage: dispense,
    carouselImages: [],
  },
  {
    isLive: true,
    projectName: "AST (Audio Support Tracker)",
    colorScheme: "text-sky-800",
    liveLink: "https://ast-nine.vercel.app/",
    skillsUsed: ["Next.js", "Tailwind CSS"],
    projectPrimayImage: ast,
    carouselImages: [],
  },
  {
    isLive: true,
    projectName: "WeBuy",
    colorScheme: "text-sky-800",
    liveLink: "https://we-buy-omega.vercel.app/",
    skillsUsed: [
      "Next.js",
      "NestJS",
      "Redux",
      "RTK Query",
      "FireBase",
      "React Hook Form",
    ],
    projectPrimayImage: we,
    carouselImages: [],
  },
  {
    isLive: false,
    projectName: "Airly Forms",
    colorScheme: "text-sky-800",
    projectPrimayImage: airlyFormBuilder,
    liveLink: "",
    skillsUsed: ["React.js", "Next.js", "Redux", "Express.js", "Tailwind CSS"],
    carouselImages: [],
  },
  {
    isLive: false,
    colorScheme: "text-sky-800",
    projectName: "Airly Carrers",
    liveLink: "",
    projectPrimayImage: airlyCareer,
    skillsUsed: ["React.js", "Next.js", "Redux", "Express.js", "Tailwind CSS"],
    carouselImages: [],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  console.log({ selectedProject });
  const selectedProjectDetails = projects.find(
    (pro) => pro.projectName === selectedProject
  );

  return (
    <Element name="Projects">
      <div className="w-full min-h-screen pt-12">
        <SectionHeader headingText="Completed Projets">
          <Projector className="text-sky-600 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
        </SectionHeader>

        <ProjectIntro />

        <section className="flex flex-col gap-8 md:gap-12 mt-4">
          {projects.map((p) => {
            return <SingleProjectBox key={v4()} project={p} />;
          })}
        </section>
      </div>
    </Element>
  );
};

export default Projects;
