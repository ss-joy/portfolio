import React from "react";
import Pills from "./Pills";
import { Element } from "react-scroll";
import { DraftingCompass, LaptopIcon } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { Skill } from "@/types";
import SkillType from "./SkillType";
import SectionComeIntoViewWithAnimation from "../common/SectionComeIntoViewWithAnimation";

export const frontendSkills: Skill[] = [
  {
    name: "JavaScript",
    iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "HTML",
    iconUrl: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS",
    iconUrl: "https://cdn.simpleicons.org/css3/1572B6",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "Shadcn UI",
    iconUrl: "https://cdn.simpleicons.org/shadcnui/000000",
  },
  {
    name: "Ant Design",
    iconUrl: "https://cdn.simpleicons.org/antdesign/06B6D4",
  },
  {
    name: "Framer Motion",
    iconUrl: "https://cdn.simpleicons.org/framer/0055f",
  },
  {
    name: "React.js",
    iconUrl: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next.js",
    iconUrl: "https://cdn.simpleicons.org/nextdotjs/000000",
  },
  {
    name: "Redux",
    iconUrl: "https://cdn.simpleicons.org/redux/764ABC",
  },
  {
    name: "React Query",
    iconUrl: "https://cdn.simpleicons.org/reactquery/FF4154",
  },
  {
    name: "RTK Query",
    iconUrl: "https://cdn.simpleicons.org/redux/764ABC",
  },
  {
    name: "Vue.js",
    iconUrl: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  },
  {
    name: "Pug.js",
    iconUrl: "https://cdn.simpleicons.org/pug/A86454",
  },
  {
    name: "EJS",
    iconUrl: "https://cdn.simpleicons.org/ejs/000000",
  },
  {
    name: "React Hook Form",
    iconUrl: "https://cdn.simpleicons.org/reacthookform/A03430",
  },
  {
    name: "Formik",
    iconUrl: "https://cdn.simpleicons.org/formik/764ABC",
  },
  {
    name: "Twig",
    iconUrl: "https://twig.symfony.com/images/logo.md.png",
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js",
    iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Express.js",
    iconUrl: "https://cdn.simpleicons.org/express/000000",
  },
  {
    name: "NestJS",
    iconUrl: "https://cdn.simpleicons.org/nestjs/E0234E",
  },
  {
    name: "MongoDB",
    iconUrl: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "Mongoose.js",
    iconUrl: "https://cdn.simpleicons.org/mongoose/A03430",
  },
  {
    name: "MySQL",
    iconUrl: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    name: "Prisma ORM",
    iconUrl: "https://cdn.simpleicons.org/prisma/2D3748",
  },
  {
    name: "Drizzle ORM",
    iconUrl: "https://cdn.simpleicons.org/drizzle/C5F74F",
  },
  {
    name: "Php",
    iconUrl: "https://cdn.simpleicons.org/php/777BB4",
  },
  {
    name: "Python",
    iconUrl: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "FireBase",
    iconUrl: "https://cdn.simpleicons.org/firebase/FFCA28",
  },
  {
    name: "Supabase",
    iconUrl: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
  {
    name: "Craft CMS",
    iconUrl: "https://cdn.simpleicons.org/craftcms/EF4A42",
  },
];

export const otherSkills: Skill[] = [
  {
    name: "Git",
    iconUrl: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "GitHub",
    iconUrl: "https://cdn.simpleicons.org/github/181717",
  },
  {
    name: "Docker",
    iconUrl: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "Zod",
    iconUrl: "https://cdn.simpleicons.org/zod/A03430",
  },
  {
    name: "Linux",
    iconUrl: "https://cdn.simpleicons.org/linux/FCC624",
  },
  {
    name: "Yup",
    iconUrl:
      "https://miro.medium.com/v2/resize:fit:1067/1*8pLiWUrglmnzfBYf1XJ4TA.jpeg",
  },
];

const Skills = () => {
  return (
    <SectionComeIntoViewWithAnimation>
      <Element name="Skills">
        <div className="w-full min-h-fit pt-12 relative">
          <SectionHeader headingText="Skills">
            <DraftingCompass className="text-sky-600 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
          </SectionHeader>
          <SkillType
            skills={frontendSkills}
            icon={<LaptopIcon className="size-[36px] stroke-sky-600" />}
            skillSectionName="Frontend"
          />
          <SkillType
            skills={backendSkills}
            icon={<LaptopIcon className="size-[36px] stroke-sky-600" />}
            skillSectionName="Backend"
          />
          <SkillType
            skills={otherSkills}
            icon={<LaptopIcon className="size-[36px] stroke-sky-600" />}
            skillSectionName="Other Tools"
          />

          <span className="text-white block w-fit text-5xl opacity-70 hover:opacity-85 animate-spin-slow absolute bottom-52 left-20">
            {"{ }"}
          </span>
          <span className="text-white block text-5xl opacity-70 hover:opacity-85 absolute bottom-72 right-80 animate-tilt-small">
            {"()=> {  }"}
          </span>
          <span className="text-white animate-tilt text-5xl opacity-70 block absolute top-60 right-[200px]">
            {"<% %>"}
          </span>
        </div>
      </Element>
    </SectionComeIntoViewWithAnimation>
  );
};

export default Skills;
