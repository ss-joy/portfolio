import tw from "@/lib/utils";
import React, { ReactNode } from "react";

type ProjectDescriptionHeaderProps = {
  children: ReactNode;
  className?: string;
};
const ProjectDescriptionHeader = ({
  children,
  className,
}: ProjectDescriptionHeaderProps) => {
  return (
    <h2 className={tw("text-slate-600 text-3xl md:text-5xl my-2 ", className)}>
      {children}
    </h2>
  );
};

export default ProjectDescriptionHeader;
