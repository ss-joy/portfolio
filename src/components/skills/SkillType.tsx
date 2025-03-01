import { Skill } from "@/types";
import React, { JSX } from "react";
import Pills from "./Pills";

type SkillTypeProps = {
  skills: Skill[];
  icon: JSX.Element;
  skillSectionName: string;
};
const SkillType = ({ skills, icon, skillSectionName }: SkillTypeProps) => {
  return (
    <section className="mt-5">
      <div className="flex justify-start items-center gap-2 py-5">
        <span className="text-4xl  bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
          {skillSectionName}
        </span>
        {icon}
      </div>
      <Pills skills={skills} skillSectionName={skillSectionName} />
    </section>
  );
};

export default SkillType;
