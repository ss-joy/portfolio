import React from "react";
import Pills from "./Pills";
import { Element } from "react-scroll";
import { DraftingCompass } from "lucide-react";
import SectionHeader from "./common/SectionHeader";

const Skills = () => {
  return (
    <Element name="Skills">
      <div className="w-full min-h-screen pt-12 relative">
        <SectionHeader headingText="Skills">
          <DraftingCompass className="text-sky-600 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
        </SectionHeader>
        <Pills />
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
  );
};

export default Skills;
