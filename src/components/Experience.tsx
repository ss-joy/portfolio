import { TimerIcon } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
import airly from "@/../public/experience/airly.jpg";
import Image from "next/image";
import Link from "next/link";
import ExperienceCalender from "./experience/ExperienceCalender";
import CardWithAnimatedBorder from "./common/CardWithAnimatedBorder";

const Experience = () => {
  return (
    <Element name="Experience">
      <section className="w-full min-h-screen pt-12">
        <h2 className="text-sky-600 text-5xl font-bold mt-[64px] pb-6 relative">
          Experience
          <TimerIcon className="absolute size-16 -top-12 left-[-64px] -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
        </h2>
        <p className="text-sky-800">
          As a hobby, I always try to keep up with the latest trends in the
          industry. With over{" "}
          <span className="bg-white rounded-md font-bold shadow p-1">
            2 years
          </span>{" "}
          of experience, which includes 1 year of professional experience, I
          have had hands-on experience in developing multiple feature-rich,
          user-friendly, cross-bowser compatible and fully responsive web
          applications, maintaining them. <br />I Have hands-on experience with
          technologies like <strong>Node.JS</strong>,{" "}
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
            <p className="text-sky-800">
              Developed and maintained web applications tailored to client
              requirements using modern JavaScript frameworks and technologies.
              Ensured responsiveness and cross-browser compatibility. Worked
              extensively with <strong>MERN stack</strong>,{" "}
              <strong>Next.js</strong>, <strong>ReduxJs</strong>,{" "}
              <strong>VueJs</strong> to build while collaborating with team
              members. Wrote maintainable code for backend, developed{" "}
              <strong>REST API endpoints</strong> and handled{" "}
              <strong>SQL</strong> database. With the help of some figma
              designs, had the opportunity to design many eye catching webpages
              with tools such as <strong>tailwindcss</strong>,
              <strong> antd Library</strong> and manage entire{" "}
              <strong>state management flow</strong> of many data-heavy sites
              with <strong>Redux</strong>.
            </p>
          }
          institutionOrCompanyName="Airly Studio"
          positionOrCourse="Full Stack Softwate Engineer (2024 - Present)"
        />
      </section>
    </Element>
  );
};

export default Experience;
