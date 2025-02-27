import { NavItem } from "@/types";

import {
  BookCheck,
  Building2Icon,
  Contact,
  PenIcon,
  ProjectorIcon,
  SettingsIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";

export const navItems: NavItem[] = [
  {
    title: "Experience",
    icon: <Building2Icon className="h-4" />,
  },
  {
    title: "Education",
    icon: <PenIcon className="h-4" />,
  },
  {
    title: "Projects",
    icon: <ProjectorIcon className="h-4" />,
  },
  {
    title: "Certifications",
    icon: <BookCheck className="h-4" />,
  },
  {
    title: "Skills",
    icon: <SettingsIcon className="h-4" />,
  },
  {
    title: "Contact",
    icon: <Contact className="h-4" />,
  },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string>("");

  return (
    <nav
      onMouseLeave={() => setHoveredLink(activeLink)}
      className="bg-sky-600/80 backdrop-blur-12 fixed top-2 left-1/2 -translate-x-1/2 w-fit mx-auto justify-between items-center gap-2 mt-8 mb-4 shadow-sm shadow-sky-300 p-2 rounded-3xl z-[11] hidden min-[960px]:flex"
    >
      {navItems.map((navItem, index) => (
        <Link
          to={navItem.title}
          smooth
          key={index}
          duration={1000}
          spy={true}
          onClick={() => setActiveLink(navItem.title)}
          onMouseOver={() => setHoveredLink(navItem.title)}
          className={`flex items-center justify-between font-bold relative ${
            activeLink === navItem.title || hoveredLink === navItem.title
              ? "text-sky-600"
              : "text-white"
          } gap-2 py-1 px-4 rounded-3xl hover:cursor-pointer`}
        >
          {navItem.title}
          {navItem.icon}
          {hoveredLink === navItem.title ? (
            <motion.div
              layoutId="follow-nav-cursor"
              className="absolute w-full rounded-3xl bg-white h-full inset-0 z-[-1]"
            ></motion.div>
          ) : null}
          {activeLink === navItem.title ? (
            <motion.div className="absolute w-full rounded-3xl bg-white h-full inset-0 z-[-2]"></motion.div>
          ) : null}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
