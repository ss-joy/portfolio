import React, { JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CertificateCardProps = {
  image: StaticImport;
  title: string;
  link: string;
  issuedFrom: string;
};
const CertificateCard = ({
  image,
  title,
  link,
  issuedFrom,
}: CertificateCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-md p-2 aspect-square overflow-hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src={image}
            width={500}
            height={500}
            className="object-cover w-full"
            alt="certificate image"
          />
        </DialogTrigger>
        <DialogContent className="max-w-none w-[1080px] border border-black">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <Image
            src={image}
            width={1080}
            height={1080}
            className="object-cover w-full block mx-auto"
            alt="certificate image"
          />
        </DialogContent>
      </Dialog>
      <section className="m-2 flex flex-col justify-between">
        <p className="font-bold text-slate-500">{issuedFrom}</p>
        <p className="text-slate-500">{title}</p>
        <Link href={link} target="_blank" className="text-sky-600 font-bold">
          View Credentials
        </Link>
      </section>
    </div>
  );
};

export default CertificateCard;
