import SectionHeader from "../common/SectionHeader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SkillName } from "@/types";
import {
  ExternalLink,
  ExternalLinkIcon,
  Pointer,
  Projector,
} from "lucide-react";
import React, { JSX } from "react";
import { Element } from "react-scroll";
import ProjectIntro from "./ProjectIntro";
import SingleProjectBox from "./SingleProjectBox";
import { v4 } from "uuid";

import riseStaffing from "@/../public/images/uplift/cropped/staffing_3.png";
import uplift1 from "@/../public/images/uplift/caro/1.png";
import uplift2 from "@/../public/images/uplift/caro/2.png";
import uplift3 from "@/../public/images/uplift/caro/3.png";
import uplift4 from "@/../public/images/uplift/caro/4.png";

import boxyClient from "@/../public/images/boxy/cropped/boxy_client_3.png";
import boxyC1 from "@/../public/images/boxy/caro/boxyc1.png";
import boxyC2 from "@/../public/images/boxy/caro/boxyc2.png";
import boxyC3 from "@/../public/images/boxy/caro/boxyc3.png";

import boxyFighter from "@/../public/images/boxy/cropped/boxy_fighter_3.png";
import boxyF1 from "@/../public/images/boxy/caro/boxyf1.png";
import boxyF2 from "@/../public/images/boxy/caro/boxyf2.png";
import boxyF3 from "@/../public/images/boxy/caro/boxyf3.png";

import dispense from "@/../public/images/dispense-go/cropped/dispense_3.png";
import dispesne1 from "@/../public/images/dispense-go/caro/1.png";
import dispesne2 from "@/../public/images/dispense-go/caro/2.png";

import airlyFormBuilder from "@/../public/images/airly-forms/cropped/admin_form_3.png";
import airlyFormBuilder1 from "@/../public/images/airly-forms/caro/1.png";
import airlyFormBuilder2 from "@/../public/images/airly-forms/caro/2.png";
import airlyFormBuilder3 from "@/../public/images/airly-forms/caro/3.png";
import airlyFormBuilder4 from "@/../public/images/airly-forms/caro/4.png";

import airlyAdmin from "@/../public/images/airly/cropped/airly_career_3.png";
import airlyAdmin1 from "@/../public/images/airly/caro/1.png";
import airlyAdmin2 from "@/../public/images/airly/caro/2.png";
import airlyAdmin3 from "@/../public/images/airly/caro/3.png";
import airlyAdmin4 from "@/../public/images/airly/caro/4.png";

import ast from "@/../public/images/ast/cropped/ast_3.png";
import ast1 from "@/../public/images/ast/caro/1.png";
import ast2 from "@/../public/images/ast/caro/2.png";

import we from "@/../public/images/webuy/cropped/we_3.png";
import we1 from "@/../public/images/webuy/caro/1.png";
import we2 from "@/../public/images/webuy/caro/2.png";
import we3 from "@/../public/images/webuy/caro/3.png";
import we4 from "@/../public/images/webuy/caro/4.png";
import Link from "next/link";
import ProjectDescriptionHeader from "./ProjectDescriptionHeader";
import PointedListItem from "./PointedListItem";

export type Project = {
  projectName: string;
  isLive: boolean;
  liveLink?: string;
  colorScheme: string;
  skillsUsed: SkillName[];
  projectPrimayImage: StaticImport;
  carouselImages: StaticImport[];
  projectDescription: JSX.Element;
  isGithubPrivate: boolean;
  githubRepoLink: string;
};
const projects: Project[] = [
  {
    isLive: true,
    projectName: "Uplift",
    liveLink: "https://upliftnw.org/",
    colorScheme: "text-green-800",
    skillsUsed: ["JavaScript", "CSS", "Php", "Twig", "Craft CMS", "MySQL"],
    projectPrimayImage: riseStaffing,
    carouselImages: [uplift1, uplift2, uplift3, uplift4],
    githubRepoLink: "",
    isGithubPrivate: true,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          Back in 1921, Martin Johanson pioneered a unique program where
          individuals could earn their meals by working in the kitchen. This
          innovative concept laid the foundation for what would later become
          known as the Millionair Club Charity. Today, under the name Uplift
          Northwest, this legacy lives on. Since its relocation to Belltown in
          1941, Uplift Northwest has remained one of Seattle's oldest and most
          impactful nonprofit organizations. Had the opportunity to contribute
          to this amazing project.
        </p>
        <ProjectDescriptionHeader>Contribution</ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Had the opportunity to contribute to this amazing project. Developed
            4 fully responsive pages which are being extensively used for the
            platform serving hunderds of users.
          </PointedListItem>
          <PointedListItem>
            Ensured browser compatibility across different devices and
            platrforms such as Mobile Safari, Desktop Safari, Google Chrome.
          </PointedListItem>
          <PointedListItem>
            Wrote custom javascript to meet client requirements which could not
            be solved by Craft Cms Existing plugins.
          </PointedListItem>
          <PointedListItem>
            Restructured and organized data on the craft cms admin dashboard to
            overcome limitations imposed by craftcms.
          </PointedListItem>
        </ul>
        <ProjectDescriptionHeader>Developed Pages</ProjectDescriptionHeader>
        <ul>
          <PointedListItem className="hover:cursor-pointer">
            <Link
              href={"https://upliftnw.org/staffing-solutions"}
              target="_blank"
              className="font-bold text-sky-600 flex gap-2"
            >
              Staffing Solutions
              <ExternalLinkIcon className="stroke-sky-600" />
            </Link>
          </PointedListItem>
          <PointedListItem className="hover:cursor-pointer">
            <Link
              href={"https://upliftnw.org/rise"}
              target="_blank"
              className="font-bold text-sky-600 flex gap-2"
            >
              Rise Program
              <ExternalLinkIcon className="stroke-sky-600" />
            </Link>
          </PointedListItem>
          <PointedListItem className="hover:cursor-pointer">
            <Link
              href={"https://upliftnw.org/graffiti-removal-services"}
              target="_blank"
              className="font-bold text-sky-600 flex gap-2"
            >
              Grafitti Removal Servic
              <ExternalLinkIcon className="stroke-sky-600" />
            </Link>
          </PointedListItem>
          <PointedListItem className="hover:cursor-pointer">
            <Link
              href={"https://upliftnw.org/public-works"}
              target="_blank"
              className="font-bold text-sky-600 flex gap-2"
            >
              Public Works
              <ExternalLinkIcon className="stroke-sky-600" />
            </Link>
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: false,
    projectName: "Boxy Client Dashboard",
    colorScheme: "text-cyan-800",
    skillsUsed: [
      "React.js",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Formik",
      "Yup",
    ],
    projectPrimayImage: boxyClient,
    carouselImages: [boxyC1, boxyC2, boxyC3],
    githubRepoLink: "",
    isGithubPrivate: true,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          Boxy is a platform built for professional fighters where they can
          connect to others and extend their careers. It was developed for the
          professional boxers!
        </p>
        <ProjectDescriptionHeader>Contribution</ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Developed the full boxy Client Dashboard.
          </PointedListItem>
          <PointedListItem>
            Converted figma design with complex color gradients and layers into
            production ready code while maintaing cross-browser compatibility.
          </PointedListItem>
          <PointedListItem>
            Ensured responsiveness for all screen sizes.
          </PointedListItem>
          <PointedListItem>
            Built complex multi step forms for the client dashboard.
          </PointedListItem>
          <PointedListItem>
            Built complex multi step forms for authenticating users.
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: false,
    projectName: "Boxy Fighter Dashboard",
    colorScheme: "text-cyan-800",
    skillsUsed: ["React.js", "Next.js", "Tailwind CSS", "Formik", "Yup"],
    projectPrimayImage: boxyFighter,
    carouselImages: [boxyF1, boxyF2, boxyF3],
    githubRepoLink: "",
    isGithubPrivate: true,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          This was a seperate part of the Boxy project which involved developing
          the Fighter Dashboard!
        </p>
        <ProjectDescriptionHeader>Contribution</ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Contributed to making existing code responsive.
          </PointedListItem>
          <PointedListItem>
            Contributed to pre-existing complex react components, made changes
            to them while ensuring backwards-compatibility!
          </PointedListItem>
          <PointedListItem>
            Collaborated closely with teammates and made sure the workflow was
            smooth.
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: false,
    projectName: "Dispense Go",
    colorScheme: "text-green-800",
    skillsUsed: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Express.js",
      "Tailwind CSS",
    ],
    projectPrimayImage: dispense,
    carouselImages: [dispesne1, dispesne2],
    githubRepoLink: "",
    isGithubPrivate: true,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          Dispense GO is a e-commerce web platform for selling and purchasing
          cannabis products using <strong>vending machnies.</strong>
        </p>
        <ProjectDescriptionHeader>Contribution</ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            <p>
              {" "}
              Integrated Redux state management library to{" "}
              <strong>pre-fetch</strong>, <strong>manage</strong>,{" "}
              <strong>render</strong> all products throughout the entire
              application.
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              {" "}
              Used redux to efficiently <strong>store</strong> and{" "}
              <strong>manage</strong> products into carts.{" "}
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Implemented API(with Redux) calls to a <span>flask</span> backend
              to retrive <span>product data</span>,
              <strong> user comments</strong>,<span> ratings</span> and manage
              payments.
            </p>
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: true,
    projectName: "Airly Forms",
    colorScheme: "text-sky-800",
    projectPrimayImage: airlyFormBuilder,
    liveLink: "https://admin.airlystudio.com/",
    skillsUsed: [
      "React.js",
      "Next.js",
      "Redux",
      "Express.js",
      "Tailwind CSS",
      "CSS",
      "MySQL",
    ],
    carouselImages: [
      airlyFormBuilder1,
      airlyFormBuilder2,
      airlyFormBuilder3,
      airlyFormBuilder4,
    ],
    githubRepoLink: "",
    isGithubPrivate: true,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          Airly Forms is a dynamic form builder with a{" "}
          <strong>drag and drop interface</strong> developed for company
          internal use. Users(Admins) can <strong>create</strong>,{" "}
          <strong>update</strong>, <strong>delete</strong> and{" "}
          <strong>share</strong> forms with anyone to gather information. They
          are provided with an interface which lets them make any custom form
          with <strong>checkboxes</strong>, <strong>radio buttons</strong> and{" "}
          <strong>file uploads</strong>. They can also view the form responses
          and filter them via 4 <strong>categories</strong>.
        </p>
        <ProjectDescriptionHeader>
          Contribution On the Admin Site
        </ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Was in charge of the whole service including{" "}
            <strong>frontend</strong>, <strong>backend</strong>,{" "}
            <strong>database migrations</strong>.
          </PointedListItem>
          <PointedListItem>
            Developed the admin site with a easy-to-use UI with the help of{" "}
            <strong>ReactJs</strong>,<strong>NextJS</strong>,{" "}
            <strong>ReduxJS</strong> and <strong>CSS Modules</strong>.
          </PointedListItem>
          <PointedListItem>
            Integrated thrid party <strong>Drag and Drop library</strong> on the
            admin site to make the form builder easy to use.
          </PointedListItem>
          <PointedListItem>
            <p>
              Wrote fairly complex state management logic in{" "}
              <strong>vanilla ReactJS</strong> for handling all{" "}
              <strong>Form Fields</strong>, <strong>types</strong>,{" "}
              <strong>Form Responses</strong> and <strong>Filterings</strong>.
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Added <strong>interactive graphs and charts</strong> to show user
              responses and statistics of user responses.
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Integrated ReduxJS for handling{" "}
              <strong>global state management</strong> and{" "}
              <strong>API requests</strong>.
            </p>
          </PointedListItem>
        </ul>
        <ProjectDescriptionHeader>
          Contribution On the Client Side
        </ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            <p>Used ReduxJS to sync with the backend.</p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Made some highly re-usable components that can be used to render
              any kind of form elements including <strong>radio buttons</strong>
              , <strong>checkboxes</strong>, <strong>file uploads</strong>.
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Added <strong>File Drag and Drop</strong> ,{" "}
              <strong>File size limiting</strong> and{" "}
              <strong>type filtering</strong>.
            </p>
          </PointedListItem>
        </ul>
        <ProjectDescriptionHeader>
          Contribution On the Backend
        </ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Wrote complex <strong>SQL queries</strong> and{" "}
            <strong>migrations</strong> for handling dynamic forms and their
            responses.
          </PointedListItem>
          <PointedListItem>
            Implemented <strong>database level transactions</strong> for
            ensuring ACID props for database operations.
          </PointedListItem>
          <PointedListItem>
            Wrote complex logics for capturing and serving the{" "}
            <strong>dynamic form infotmation and responses</strong>.
          </PointedListItem>
          <PointedListItem>
            Added generic <strong>global error handlers</strong> for gracefully
            handling all compile time and runtime errors.
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: true,
    colorScheme: "text-sky-800",
    projectName: "Airly Admin Dashboard Statistics and Carrers",
    liveLink: "https://admin.airlystudio.com/",
    projectPrimayImage: airlyAdmin,
    skillsUsed: [
      "React.js",
      "Next.js",
      "Redux",
      "Express.js",
      "CSS",
      "Ant Design",
      "Mongoose.js",
      "MySQL",
    ],
    carouselImages: [airlyAdmin1, airlyAdmin2, airlyAdmin3, airlyAdmin4],
    githubRepoLink: "",
    isGithubPrivate: true,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          The statistics service is a custom and closed service for airly studio
          that is only available for airly admin users. This service provides
          various insights to the admins about users visiting their sites, their
          countries and so on.
        </p>
        <p>
          The Airly Career Section is a service that allows airly admins to hire
          talents through their own platform. Admins are able to control hiring
          posts and edit them which are then synced with the main airly website.{" "}
        </p>
        <ProjectDescriptionHeader>
          Contribution On the Main site
        </ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            <p>
              Used <strong>ReduxJS</strong> to call different APIs for geting
              recruitment data from the client.
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Developed ReactJS components to dynamically render recruitment
              data into a <strong>billboard like interface</strong> and render
              dynamic forms for gathering the recruitment info.{" "}
            </p>
          </PointedListItem>
          <PointedListItem>
            <p>
              Used <strong>Ant Design</strong> for making alll the relevant
              components.
            </p>
          </PointedListItem>
        </ul>
        <ProjectDescriptionHeader>
          Contribution On the Admin site
        </ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Developed a comprehensive admin site where admins can control each
            career post including required skills, due date, skill requirements.
          </PointedListItem>
          <PointedListItem>
            Implemented a Rich text editor where admins can freely format the
            career posts.
          </PointedListItem>
          <PointedListItem>
            Gathered backend data through API request and displayed graphs and
            charts to visually show user stastics.
          </PointedListItem>
        </ul>
        <ProjectDescriptionHeader>
          Contribution On the Backend
        </ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Wrote backend logic to store and serve user statistics to the main
            site.
          </PointedListItem>
          <PointedListItem>
            Wrote fairly complex SQL for storing and serving career post info.
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: true,
    projectName: "AST (Audio Support Tracker)",
    colorScheme: "text-sky-800",
    liveLink: "https://ast-nine.vercel.app/",
    skillsUsed: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "Shadcn UI",
    ],
    projectPrimayImage: ast,
    carouselImages: [ast1, ast2],
    githubRepoLink: "https://github.com/ss-joy/ast",
    isGithubPrivate: false,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>
        <p>
          Devloped a tracker/detector web application that detects different
          encoding formats for recording and playing audios. Since different
          browsers support different encodings for recording and playing audio
          files it often becomes difficult to debug what caused issues while
          playing or recording audio files. This application can detect what
          encodings are suupported for playing and recording audio files.
        </p>
        <ProjectDescriptionHeader>Contribution</ProjectDescriptionHeader>
        <ul>
          <PointedListItem>
            Developed a very easy to understand ui that will detect audio
            recorder APIs.
          </PointedListItem>
          <PointedListItem>
            Display what encodings are supported for recording and playing audio
            files.
          </PointedListItem>
          <PointedListItem>
            Integrated a supabase backend for storing the audio files.
          </PointedListItem>
        </ul>
      </>
    ),
  },
  {
    isLive: true,
    projectName: "WeBuy",
    colorScheme: "text-sky-800",
    liveLink: "https://we-buy-omega.vercel.app/",
    skillsUsed: [
      "React.js",
      "Tailwind CSS",
      "Next.js",
      "NestJS",
      "Redux",
      "RTK Query",
      "FireBase",
      "React Hook Form",
      "MongoDB",
      "Mongoose.js",
    ],
    projectPrimayImage: we,
    carouselImages: [we1, we2, we3, we4],
    githubRepoLink: "https://github.com/ss-joy/weBuy",
    isGithubPrivate: false,
    projectDescription: (
      <>
        <ProjectDescriptionHeader>Intro</ProjectDescriptionHeader>

        <p>
          This is a multi-vendor ecommerce platform where users can sell and buy
          products. This website also integrates with a fictional banking
          system. This site shows how different organizations communicate with
          each other through APIs.{" "}
        </p>
        <ProjectDescriptionHeader>Contribution</ProjectDescriptionHeader>

        <ul>
          <PointedListItem>
            Developed a simple and easy to use UI with ReactJS, Tailwindcss and
            tailwindcss.
          </PointedListItem>
          <PointedListItem>
            Used Redux for handling global state management.
          </PointedListItem>
          <PointedListItem>
            Added a comprehensive dashboard with graphs and charts for
            displaying statistics.
          </PointedListItem>

          <PointedListItem>
            Used RTk Query for caching, queries and mutations
          </PointedListItem>
        </ul>
      </>
    ),
  },
];

const Projects = () => {
  return (
    <Element name="Projects">
      <div className="w-full min-h-screen pt-12">
        <SectionHeader headingText="Completed Projets">
          <Projector className="text-sky-600 absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-sky-600 rounded-full p-2 animate-pulse" />
        </SectionHeader>

        <ProjectIntro />

        <section className="flex flex-col gap-8 md:gap-12 mt-4">
          {projects.map((p) => {
            return <SingleProjectBox key={v4()} project={p} />;
          })}
        </section>
      </div>
    </Element>
  );
};

export default Projects;
