import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronsLeft } from "lucide-react";
import { navItems } from "../NavBar";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "motion/react";

export function SideNavBar() {
  const [activeLink, setActiveLink] = useState<string>("");
  return (
    <Sheet>
      <SheetTrigger className="min-[960px]:hidden">
        <ChevronsLeft className="fixed right-2 top-1/2 z-[10] border-2 border-sky-500 bg-white/30 rounded-full stroke-sky-600 size-[24px] backdrop-blur-24 hover:cursor-pointer hover:scale-110" />
      </SheetTrigger>
      <SheetContent className="backdrop-blur-12 bg-white/5 w-fit">
        \**\
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className=" w-fit mx-auto flex flex-col justify-between items-center mt-8 mb-4 p-2 rounded-lg gap-4 relative z-[30]">
          {navItems.map((navItem, index) => (
            <Link
              to={navItem.title}
              smooth
              key={index}
              duration={1000}
              spy={true}
              onClick={() => setActiveLink(navItem.title)}
              className={`flex items-center justify-between font-bold relative  w-full ${
                activeLink === navItem.title
                  ? "text-sky-600 bg-white "
                  : "text-white bg-sky-600 "
              } gap-2 py-1 px-5 rounded-3xl hover:cursor-pointer`}
            >
              {navItem.title}
              {navItem.icon}

              {activeLink === navItem.title ? (
                <motion.div className="absolute w-full rounded-3xl bg-white h-full inset-0 z-[-2]"></motion.div>
              ) : null}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
