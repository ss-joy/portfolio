import React from "react";
import Pills from "./Pills";
import { Element } from "react-scroll";
import { DraftingCompass } from "lucide-react";

const Skills = () => {
  return (
    <Element name="Skills">
      <div className="w-full h-screen pt-12">
        <h2 className="text-sky-600 text-5xl font-bold mt-[64px] pb-6 relative">
          Skills
          <DraftingCompass className="text-sky-600 absolute size-16 -top-12 left-[-64px] -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
        </h2>
        <Pills />
        <span className="text-white block text-5xl opacity-70 hover:opacity-85 animate-rotate absolute bottom-52 left-20 rotate-45">
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
  );
};

export default Skills;
