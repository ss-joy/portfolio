import tw from "@/lib/utils";
import { Pointer } from "lucide-react";
import React, { ReactNode } from "react";

type PointedListItemProps = {
  children: ReactNode;
  className?: string;
};
const PointedListItem = ({ children, className }: PointedListItemProps) => {
  return (
    <li className={tw("flex gap-2 items-center justify-start", className)}>
      <Pointer className="rotate-90 shrink-0 my-2" /> {children}
    </li>
  );
};

export default PointedListItem;
