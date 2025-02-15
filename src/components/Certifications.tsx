import { PaperclipIcon } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
import hackerRankReactBasics from "@/../public/certifications/hacker-rank-react-basics.png";
import hackerRankSqlBasics from "@/../public/certifications/hacker-rank-sql-basics.png";
import udeymyGitBasics from "@/../public/certifications/udemy-git-basics.jpg";
import CertificateCard from "./certifications/CertificateCard";
import BookMarkIcon from "@/../public/icons/bookmark.png";
import Image from "next/image";

const Certifications = () => {
  return (
    <Element name="Certifications">
      <section className="w-full min-h-screen pt-12">
        <h2 className="text-white text-5xl font-bold mt-[64px] pb-6 relative">
          Certifications
          <PaperclipIcon className="text-white absolute size-16 -top-12 left-[-64px] border-2 border-white rounded-full p-2 animate-pulse" />
        </h2>
        <div className="relative z-20 grid grid-cols-auto-200 gap-x-6 gap-y-6">
          <Image
            src={BookMarkIcon}
            alt="book mark icon"
            width={500}
            height={500}
            className="-rotate-45 absolute z-[-1] w-[800px] top-0 left-0 animate-tilt-small"
          />
          <CertificateCard
            image={hackerRankReactBasics}
            link="https://www.hackerrank.com/certificates/iframe/563541e3a03a"
            title="React (Basic)"
            issuedFrom="HackerRank"
          />

          <CertificateCard
            image={hackerRankSqlBasics}
            link="https://www.hackerrank.com/certificates/iframe/5c39a15f60f0"
            title="SQL (Basic)"
            issuedFrom="HackerRank"
          />

          <CertificateCard
            image={udeymyGitBasics}
            link="https://www.udemy.com/certificate/UC-eab97efd-7a6b-469d-be7a-72c3cc8962e4/"
            title="Git and Github"
            issuedFrom="Udemy"
          />
        </div>
      </section>
    </Element>
  );
};

export default Certifications;
