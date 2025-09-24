import { TimerIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import airly from "@/../public/icons/airly.jpg";
import ExperienceCalender from "./ExperienceCalender";
import CardWithAnimatedBorder from "../common/CardWithAnimatedBorder";
import SectionHeader from "../common/SectionHeader";
import ExperienceYearAnimated from "./ExperienceYearAnimated";
import SectionComeIntoViewWithAnimation from "../common/SectionComeIntoViewWithAnimation";

const Experience = () => {
  return (
    <SectionComeIntoViewWithAnimation>
      <Element name="Experience">
        <section className="w-full min-h-fit pt-12 my-10">
          <SectionHeader headingText="Experience">
            <TimerIcon className="text-sky-600 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
          </SectionHeader>
          <p className="text-sky-800">
            As a hobby, I always try to keep up with the latest trends in the
            industry. With over <ExperienceYearAnimated />
            of experience, which includes 1 year of professional experience, I
            have had hands-on experience in developing multiple feature-rich,
            user-friendly, cross-bowser compatible and fully responsive web
            applications, maintaining them. <br />I Have hands-on experience
            with technologies like <strong>Node.JS</strong>,{" "}
            <strong>Express.Js</strong>, <strong>NestJs</strong>,{" "}
            <strong>NextJs</strong>, <strong>ReactJs</strong>,{" "}
            <strong>VueJs</strong>, <strong>MongoDb</strong>,
            <strong>MongooseJs</strong>, <strong>Mysql</strong>,{" "}
            <strong>Docker</strong>, ORMS such as <strong>Drizzle</strong> and{" "}
            <strong>Prisma</strong>.
          </p>

          <ExperienceCalender years={1} />

          <CardWithAnimatedBorder
            imageLink={airly}
            companyOrInstitutionLink="https://airlystudio.com/"
            description={
              <>
                Developed and maintained web applications tailored to client
                requirements using modern JavaScript frameworks and
                technologies. Ensured responsiveness and cross-browser
                compatibility. Worked extensively with{" "}
                <strong>MERN stack</strong>, <strong>Next.js</strong>,{" "}
                <strong>ReduxJs</strong>, <strong>VueJs</strong> to build while
                collaborating with team members. Wrote maintainable code for
                backend, developed <strong>REST API endpoints</strong> and
                handled <strong>SQL</strong> database. With the help of some
                figma designs, had the opportunity to design many eye catching
                webpages with tools such as <strong>tailwindcss</strong>,
                <strong> antd Library</strong> and manage entire{" "}
                <strong>state management flow</strong> of many data-heavy sites
                with <strong>Redux</strong>.
              </>
            }
            institutionOrCompanyName="Airly Studio"
            positionOrCourse="Full Stack Softwate Engineer (2024 - Present)"
          />
        </section>
      </Element>
    </SectionComeIntoViewWithAnimation>
  );
};

export default Experience;
