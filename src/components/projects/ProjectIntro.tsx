import React from "react";
import GradientText from "../common/GradientText";
import { PointerIcon } from "lucide-react";
import Image from "next/image";
import nodeJs from "@/../public/icons/nodejs.png";

const ProjectIntro = () => {
  return (
    <section className="grid grid-cols-auto-360 md:grid-cols-auto-500 gap-4 relative">
      <div
        id="years"
        className="md:col-span-2 border-2 bg-white/30 backdrop-blur-24 border-white/30 flex flex-col lg:flex-row items-center justify-between p-2 md:p-8 rounded-lg"
      >
        <div className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
          7+
        </div>
        <div className="text-5xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent  leading-[3]">
          Professional
        </div>{" "}
        <div className="text-3xl md:text-5xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent  leading-[3]">
          Projects Completed
        </div>{" "}
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <div className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
          Full Stack
        </div>{" "}
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <ul className="flex flex-col gap-4 text-slate-600 text-2xl">
          <li className="flex items-center gap-2">
            <PointerIcon className="rotate-90 stroke-sky-800" /> Covering
            Frontend
          </li>
          <li className="flex items-center gap-2">
            <PointerIcon className="rotate-90 stroke-sky-800" /> Integrating
            Backend
          </li>
          <li className="flex items-center gap-2">
            <PointerIcon className="rotate-90 stroke-sky-800" /> Databse
            Management
          </li>
          <li className="flex items-center gap-2">
            <PointerIcon className="rotate-90 stroke-sky-800" /> Figma to Code
          </li>
        </ul>
      </div>
      <div className="border-2 border-white/30 p-2 md:p-8 bg-white/30 backdrop-blur-24 rounded-lg">
        <div className="text-8xl md:text-9xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
          MERN
        </div>{" "}
      </div>
    </section>
  );
};

export default ProjectIntro;
