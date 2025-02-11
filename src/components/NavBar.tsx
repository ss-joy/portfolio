import { NavItem } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  Building2Icon,
  Contact,
  PenIcon,
  ProjectorIcon,
  SettingsIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import circleMark from "@/../public/icons/mark.svg";
import { motion } from "motion/react";
import Image from "next/image";

const navItems: NavItem[] = [
  {
    title: "Experience",
    icon: <Building2Icon className="stroke-[#78909c] hover:stroke-sky-500" />,
  },
  {
    title: "Education",
    icon: <PenIcon className="stroke-[#78909c] hover:stroke-sky-500" />,
  },
  {
    title: "Projects",
    icon: <ProjectorIcon className="stroke-[#78909c] hover:stroke-sky-500" />,
  },
  {
    title: "Skills",
    icon: <SettingsIcon className="stroke-[#78909c] hover:stroke-sky-500" />,
  },
  {
    title: "Contact",
    icon: <Contact className="stroke-[#78909c] hover:stroke-sky-500" />,
  },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  console.log(activeLink);
  return (
    <nav className="max-w-[720px] mx-auto flex gap-2 justify-evenly items-center mt-8 mb-4">
      {navItems.map((navItem, index) => (
        <div
          key={index}
          className="hover:cursor-pointer flex justify-center items-center w-[100px] relative"
          onClick={() => setActiveLink(navItem.title)}
        >
          <Link
            to={navItem.title}
            smooth
            duration={1000}
            activeClass="bg-red-700 text-lg"
            spy={true}
            onClick={() => setActiveLink(navItem.title)}
          >
            {navItem.icon}
            {navItem.title === activeLink ? (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src={circleMark}
                  width={100}
                  height={100}
                  alt="Cirlce mark"
                  className="max-w-none w-full h-full -z-10"
                />
              </motion.div>
            ) : null}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
