import { Satellite } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";
import { Element } from "react-scroll";
import { motion } from "motion/react";
import BlurBall from "./BlurBall";
import FooterGradient from "./FooterGradient";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LinkedIn from "@/../public/images/contacts/LinkedInIcon.svg";

type ContactInfo = {
  iconUrl: string | StaticImport;
  idLink: string;
  type: "link" | "gmail";
};

const contactInfos: ContactInfo[] = [
  {
    iconUrl: "https://cdn.simpleicons.org/facebook/ffffff",
    idLink: "https://www.facebook.com/profile.php?id=100080048493810",
    type: "link",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/github/ffffff",
    idLink: "https://github.com/ss-joy",
    type: "link",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/instagram/ffffff",
    idLink: "https://www.instagram.com/sakil_s_joy/",
    type: "link",
  },
  {
    iconUrl: LinkedIn,
    idLink: "https://www.linkedin.com/in/sakil-sazzad-joy-56a716274/",
    type: "link",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/gmail/ffffff",
    idLink: "sss.joy.one@gmail.com",
    type: "gmail",
  },
];
const Contact = () => {
  return (
    <Element name="Contact">
      <section className="w-full min-h-screen pt-12 relative">
        <h2 className="text-white text-4xl md:text-5xl font-bold mt-[64px] pb-6 relative">
          Contact Me
          <Satellite className="text-white absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-white rounded-full p-2 animate-pulse" />
        </h2>

        <div className="grid grid-cols-2 gap-y-4 gap-x-16 items-center place-items-center h-1/2 w-1/2 mx-auto relative z-20">
          {contactInfos.map((cinfo, index) => {
            return (
              <motion.div
                whileHover={{
                  scale: 0.7,
                  transition: {
                    type: "spring",
                    duration: 0.6,
                    stiffness: 100,
                  },
                }}
              >
                <Link
                  key={index}
                  href={cinfo.idLink}
                  target="_blank"
                  className={`block size-[100px] hover:border-b-[10px] pb-8 border-b-white transition-all`}
                >
                  <Image
                    src={cinfo.iconUrl}
                    alt="contact icon"
                    width={100}
                    height={100}
                    className="block w-full h-full"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
        <BlurBall />
        <FooterGradient />
      </section>
    </Element>
  );
};

export default Contact;
