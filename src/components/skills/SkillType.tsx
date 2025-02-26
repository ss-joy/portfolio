import { Skill } from "@/types";
import React, { JSX } from "react";
import Pills from "./Pills";

type SkillTypeProps = {
  skills: Skill[];
  icon: JSX.Element;
  skillName: string;
};
const SkillType = ({ skills, icon, skillName }: SkillTypeProps) => {
  return (
    <section className="mt-5">
      <div className="flex justify-start items-center gap-2 py-5">
        <span className="text-4xl  bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
          {skillName}
        </span>
        {icon}
      </div>
      <Pills skills={skills} />
    </section>
  );
};

export default SkillType;
