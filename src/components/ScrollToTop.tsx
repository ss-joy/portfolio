import { ArrowUp } from "lucide-react";
import React from "react";
import { animateScroll } from "react-scroll";

const ScrollToTop = () => {
  return (
    <div
      className="bg-sky-600 text-white font-bold rounded-full size-[40px] flex items-center justify-center hover:cursor-pointer my-4 animate-bounce hover:ring-8 hover:ring-sky-100 transition-all"
      onClick={() => animateScroll.scrollToTop()}
    >
      <ArrowUp />
    </div>
  );
};

export default ScrollToTop;
