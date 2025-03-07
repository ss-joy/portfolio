import { School } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
import CardWithAnimatedBorder from "./common/CardWithAnimatedBorder";
import mzs from "@/../public/images/education/mzs.png";
import amc from "@/../public/images/education/amc.png";
import sust from "@/../public/images/education/sust.png";
import SectionHeader from "./common/SectionHeader";

const Education = () => {
  return (
    <Element name="Education">
      <section className="w-full min-h-fit pt-12">
        <SectionHeader headingText="Education" className="text-white">
          <School className="text-white absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-white rounded-full p-2 animate-pulse" />
        </SectionHeader>
        <CardWithAnimatedBorder
          imageLink={sust}
          companyOrInstitutionLink="https://www.sust.edu/"
          description={<>B.Sc. (Engg.)</>}
          institutionOrCompanyName="Shahjalal University of Science and Technology"
          positionOrCourse="B.Sc. (Engg.) in Computer Science and Engineering"
          cardCss="bg-sky-200"
        />{" "}
        <CardWithAnimatedBorder
          imageLink={amc}
          companyOrInstitutionLink="https://www.anandamohangovtcollege.edu.bd/"
          description={<>HSC</>}
          institutionOrCompanyName="Ananda Mohan College,Mymensingh"
          positionOrCourse="Higher Secondary Certificate (HSC)"
          cardCss="bg-sky-100"
        />
        <CardWithAnimatedBorder
          imageLink={mzs}
          companyOrInstitutionLink="http://www.mzs.edu.bd/"
          description={<>SSC</>}
          institutionOrCompanyName="Mymensingh Zilla School"
          positionOrCourse="Secondary School Certificate (SSC)"
          cardCss="bg-sky-50"
        />
      </section>
    </Element>
  );
};

export default Education;
