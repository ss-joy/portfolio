import type { Skill } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const skills: Skill[] = [
  {
    name: "JavaScript",
    iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  { name: "HTML", iconUrl: "https://cdn.simpleicons.org/html5/E34F26" },
  {
    name: "Tailwind CSS",
    iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { name: "CSS", iconUrl: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express.js", iconUrl: "https://cdn.simpleicons.org/express/000000" },
  { name: "NestJS", iconUrl: "https://cdn.simpleicons.org/nestjs/E0234E" },
  { name: "React.js", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Pug.js", iconUrl: "https://cdn.simpleicons.org/pug/61DAFB" },
  { name: "Pug.js", iconUrl: "https://cdn.simpleicons.org/ejs/61DAFB" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Redux", iconUrl: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "Vue.js", iconUrl: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
  {
    name: "Mongoose.js",
    iconUrl: "https://cdn.simpleicons.org/mongoose/A03430",
  },
  { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Linux", iconUrl: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/F05032" },

  { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Craft CMS", iconUrl: "https://cdn.simpleicons.org/craftcms/EF4A42" },
];
const Pills = () => {
  return (
    <section className="flex gap-2 flex-wrap justify-center w-full mx-auto">
      {skills.map((skill, index) => (
        <motion.p
          key={index}
          className="relative z-10 flex gap-1 bg-white items-center text-[#78909c] rounded-lg p-2 hover:cursor-pointer shadow-sm shadow-slate-300 hover:ring-2 hover:ring-sky-600 transition-all"
          initial={{
            opacity: 0.5,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.8,
            },
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              type: "spring",
              velocity: 2,
            },
          }}
        >
          {skill.name}
          <Image
            src={skill.iconUrl}
            alt="Skill icon"
            width={50}
            height={50}
            className="size-[18px]"
          />{" "}
        </motion.p>
      ))}
    </section>
  );
};

export default Pills;
