import { School } from "lucide-react";
import React, { ReactNode } from "react";
import { Element } from "react-scroll";
import mzs from "@/../public/images/education/mzs.png";
import amc from "@/../public/images/education/amc.png";
import sust from "@/../public/images/education/sust.png";
import SectionHeader from "./common/SectionHeader";
import SectionComeIntoViewWithAnimation from "./common/SectionComeIntoViewWithAnimation";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type EduCardProps = {
  insName: string;
  degreeName: string;
  logo: StaticImageData;
};

function EduCard({ degreeName, insName, logo }: EduCardProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={logo}
        width={200}
        height={200}
        alt="company logo"
        className="size-[200px] rounded-l p-4"
      />
      <h2 className="text-center text-2xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
        {insName}
      </h2>

      <h2 className="text-center text-2xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
        {degreeName}
      </h2>
    </div>
  );
}

function ExpandingHr({ delay }: { delay: number }) {
  return (
    <motion.hr
      className="bg-app-blue-main h-[2px] w-0"
      whileInView={{ width: "50%" }}
      transition={{
        duration: 1,
        delay,
      }}
    />
  );
}

const Education = () => {
  return (
    <SectionComeIntoViewWithAnimation>
      <Element name="Education">
        <section className="w-full min-h-fit pt-12">
          <SectionHeader headingText="Education">
            <School className="text-sky-300 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-300 rounded-full p-2 animate-pulse" />
          </SectionHeader>
          <section className="flex flex-col justify-center items-center gap-10">
            <ExpandingHr delay={1} />
            <EduCard
              degreeName="B.Sc. (Engg.) in Computer Science and Engineering"
              insName="Shahjalal University of Science and Technology"
              logo={sust}
            />
            <ExpandingHr delay={1.3} />
            <EduCard
              degreeName="Higher Secondary Certificate (HSC)"
              insName="Ananda Mohan College,Mymensingh"
              logo={amc}
            />
            <EduCard
              degreeName="Secondary School Certificate (SSC)"
              insName="Mymensingh Zilla School"
              logo={mzs}
            />
          </section>
        </section>
      </Element>
    </SectionComeIntoViewWithAnimation>
  );
};

export default Education;
