import { Calendar } from "lucide-react";
import React from "react";

type ExperienceCalenderProps = {
  years: number;
};
const ExperienceCalender = ({ years }: ExperienceCalenderProps) => {
  return (
    <div className="flex gap-5 items-center">
      <div className="size-[300px] relative">
        <Calendar className="stroke-sky-600 w-full h-full" />
        <span className="absolute top-[190px] left-1/2 text-8xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-sky-600 to-white bg-clip-text text-transparent font-bold">
          {years}
        </span>
      </div>
      <span className="text-7xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
        Year Professional Experience
      </span>
    </div>
  );
};

export default ExperienceCalender;
