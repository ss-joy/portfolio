import { Satellite } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";
import { motion } from "motion/react";
import BlurBall from "./BlurBall";
type ContactInfo = {
  iconUrl: string;
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
    iconUrl: "https://cdn.simpleicons.org/gmail/ffffff",
    idLink: "sss.joy.one@gmail.com",
    type: "gmail",
  },
];
const Contact = () => {
  return (
    <Element name="Contact">
      <section className="w-full h-screen pt-12 relative">
        <h2 className="text-white text-5xl font-bold mt-[64px] pb-6 relative">
          Contact Me
          <Satellite className="absolute size-16 -top-12 left-[-64px] border-2 border-white rounded-full p-2 animate-pulse" />
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 items-center place-items-center h-1/2 w-1/2 mx-auto">
          {contactInfos.map((cinfo, index) => {
            if (cinfo.type === "link") {
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
                    className={`block ${
                      index === 0
                        ? "size-[200px]"
                        : "size-[130px] hover:border-b-[10px] pb-8 border-b-white transition-all"
                    }  `}
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
            } else if (cinfo.type === "gmail") {
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
                    href={`mailto:${cinfo.idLink}`}
                    target="_blank"
                    className="block size-[200px]"
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
            }
          })}
        </div>
        <BlurBall />
      </section>
    </Element>
  );
};

export default Contact;
