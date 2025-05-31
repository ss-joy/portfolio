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

export function SideNavBar() {
  const [activeLink, setActiveLink] = useState<string>("");
  return (
    <Sheet>
      <SheetTrigger className="min-[960px]:hidden">
        <ChevronsLeft className="fixed right-2 top-1/2 z-[12] border-2 border-sky-500 bg-white/30 rounded-full stroke-sky-600 size-[24px] backdrop-blur-24 hover:cursor-pointer hover:scale-110" />
      </SheetTrigger>
      <SheetContent className="backdrop-blur-lg bg-white/80 w-[240px] border-l border-white/20">
        {"~[>_<]~"}
        <SheetHeader className="mb-6">
          <SheetTitle className="text-slate-800 dark:text-white text-center">
            Navigation
          </SheetTitle>
          <SheetDescription className="text-slate-600 dark:text-slate-400 text-center text-sm">
            Explore my portfolio
          </SheetDescription>
        </SheetHeader>
        <nav className="text-slate-600 flex flex-col justify-between items-center mt-8 mb-4 p-2 rounded-lg gap-4 relative z-[30]">
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
                  ? "text-white bg-sky-600 "
                  : "text-sky-600 "
              } gap-2 py-1 px-5 rounded-3xl hover:cursor-pointer`}
            >
              {navItem.title}
              {navItem.icon}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
