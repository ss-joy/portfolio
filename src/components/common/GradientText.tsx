import tw from "@/lib/utils";
import { ReactNode } from "react";

type GradientTextProps = {
  className?: string;
  children: ReactNode;
};
const GradientText = ({ className, children }: GradientTextProps) => {
  return (
    <span
      className={tw(
        "text-7xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
