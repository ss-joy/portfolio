import { NavItem } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  BookIcon,
  Building2Icon,
  Contact,
  PenIcon,
  ProjectorIcon,
  SettingsIcon,
} from "lucide-react";
import React from "react";

const navItems: NavItem[] = [
  {
    title: "Experience",
    icon: <Building2Icon className="stroke-[#78909c] hover:stroke-slate-600" />,
  },
  { title: "Education", icon: <PenIcon className="stroke-[#78909c]" /> },
  { title: "Projects", icon: <ProjectorIcon className="stroke-[#78909c]" /> },
  { title: "Skills", icon: <SettingsIcon className="stroke-[#78909c]" /> },
  { title: "Contact", icon: <Contact className="stroke-[#78909c]" /> },
];
const NavBar = () => {
  return (
    <TooltipProvider>
      <nav className="max-w-[720px] mx-auto flex gap-2 justify-evenly items-center mt-8 mb-4">
        {navItems.map((navItem, index) => (
          <Tooltip>
            <TooltipTrigger>
              <span key={index} className="hover:cursor-pointer">
                {navItem.icon}
              </span>
              {index !== navItems.length - 1 ? (
                <i className="h-[16px] w-[1px] bg-[#78909c]"></i>
              ) : null}
            </TooltipTrigger>
            <TooltipContent>
              <p>{navItem.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
};

export default NavBar;
