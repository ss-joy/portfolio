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

const navItems: NavItem[] = [
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
  console.log(activeLink);
  return (
    <nav className="bg-sky-600 w-fit mx-auto flex justify-between items-center mt-8 mb-4 shadow-sm shadow-sky-300 p-2 rounded-3xl gap-2">
      {navItems.map((navItem, index) => (
        <Link
          to={navItem.title}
          smooth
          key={index}
          duration={1000}
          spy={true}
          onClick={() => setActiveLink(navItem.title)}
          className={`flex items-center justify-between font-bold ${
            activeLink === navItem.title
              ? " bg-white text-sky-600"
              : "text-white"
          } gap-2 py-1 px-5 rounded-3xl hover:cursor-pointer hover:scale-105 transition-all hover:bg-white hover:text-sky-600`}
        >
          {navItem.title}
          {navItem.icon}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
