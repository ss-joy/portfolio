import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

type CardWithAnimatedBorderProps = {
  imageLink: StaticImport;
  institutionOrCompanyName: string;
  positionOrCourse: string;
  description: JSX.Element;
  companyOrInstitutionLink: string;
  cardCss?: string;
};

const CardWithAnimatedBorder = ({
  imageLink,
  institutionOrCompanyName,
  positionOrCourse,
  description,
  companyOrInstitutionLink,
  cardCss,
}: CardWithAnimatedBorderProps) => {
  return (
    <div className="relative z-10 mt-8 rounded-lg p-[2px] overflow-hidden">
      <div
        className={cn(
          "relative w-full h-full p-7 flex items-start gap-4 bg-sky-100 rounded-lg after:content-[''] after:h-[600%] after:w-[200%] after:absolute after:rounded-lg after:gradient-border-background after:animate-spin-slow after:animate-reverse after:-top-[250%] after:-left-1/2 after:z-[-1]",
          cardCss
        )}
      >
        <Image
          src={imageLink}
          width={200}
          height={200}
          alt="company logo"
          className="min-w-[200px]"
        />
        <div className="px-2 flex flex-col gap-2">
          <Link
            href={companyOrInstitutionLink}
            target="_blank"
            className="text-3xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent w-fit"
          >
            {institutionOrCompanyName}
          </Link>
          <h2 className="text-2xl bg-gradient-to-r from-sky-900 via bg-sky-500 to-sky-600 bg-clip-text text-transparent">
            {positionOrCourse}
          </h2>
          <p className="text-sky-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWithAnimatedBorder;
