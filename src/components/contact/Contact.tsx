import { Satellite } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";
import { Element } from "react-scroll";
import { motion } from "motion/react";
import BlurBall from "./BlurBall";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LinkedIn from "@/../public/images/contacts/LinkedInIcon.svg";
import SectionHeader from "../common/SectionHeader";
import { v4 } from "uuid";

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
        <SectionHeader headingText="Contact Me" className="text-white">
          <Satellite className="text-white absolute size-16 -top-16 lg:-top-20 right-2 lg:-left-16 -rotate-45 border-2 border-white rounded-full p-2 animate-pulse" />
        </SectionHeader>

        <div className="grid grid-cols-2 gap-y-4 gap-x-16 items-center place-items-center h-1/2 w-1/2 mx-auto relative z-[2]">
          {contactInfos.map((cinfo) => {
            return (
              <motion.div
                key={v4()}
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
                  href={cinfo.idLink}
                  target="_blank"
                  className={`block size-[100px] md:size-[200px] hover:border-b-[10px] pb-8 border-b-white transition-all`}
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
        <svg
          width="1087"
          height="475"
          viewBox="0 0 1087 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-h-[100px] md:max-h-[300px]"
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 5,
            }}
            d="M325.597 24.5058C318.627 30.7328 310.087 34.706 302.871 40.7337C289.177 52.1726 274.865 62.8303 261.177 74.2593C245.089 87.6918 229.523 104.993 217.873 122.408C201.018 147.603 187.318 176.311 206.599 204.26C215.926 217.78 237.064 225.846 252.498 229.761C275.763 235.663 305.337 232.085 328.639 227.978C353.7 223.561 375.332 213.726 398.516 203.725C420.501 194.242 442.018 185.033 463.383 174.123C492.36 159.326 520.313 139.363 542.207 115.186C559.091 96.5414 589.235 62.9148 579.159 34.2247C567.443 0.86575 526.941 19.9768 507.492 35.2055C486.461 51.6735 473.066 75.8836 458.194 97.442C442.474 120.228 426.631 142.694 411.579 165.92C378.477 216.998 354.537 273.839 307.523 314.645C278.93 339.464 251.743 366.659 219.752 387.314C186.217 408.966 150.25 428.189 114.265 445.36C84.8408 459.4 50.0924 476.543 16.3828 469.077C-6.09279 464.1 6.3692 429.157 12.9829 416.649C28.7204 386.886 52.6697 365.659 81.0708 348.528C147.646 308.371 224.986 298.794 301.081 290.571C382.805 281.74 465.459 277.324 544.802 254.014C574.695 245.232 605.402 234.791 631.858 218.081C656.754 202.356 677.358 180.895 694.935 157.538C719.212 125.281 735.12 86.9931 733.05 46.2618C732.49 35.232 725.428 24.1783 717.661 16.6594C696.568 -3.76043 670.068 3.15283 647.337 17.551C624.251 32.1734 613.039 64.8811 607.522 90.3088C599.664 126.528 600.85 174.979 631.768 201.051C660.741 225.482 705.549 200.64 734.124 187.854C767.813 172.781 797.6 155.678 825.206 131.324C835.348 122.377 845.783 110.03 853.837 99.2252C859.747 91.2974 868.331 79.3419 868.331 69.3553C868.331 56.5447 866.347 48.1828 854.374 41.447C837.838 32.1446 819.14 34.9646 802.838 43.2303C759.538 65.1842 717.412 116.392 741.908 166.277C749.479 181.694 757.455 195.58 776.176 197.484C796.944 199.596 812.893 193.817 832.185 187.408C900.024 164.873 963.563 112.326 964.961 35.7405C965.024 32.2679 967.055 18.9755 963.35 16.8377C950.112 9.1999 935.737 35.2022 931.14 43.8544C918.346 67.9385 912.471 97.128 906.625 123.478C903.348 138.247 898.82 152.733 895.71 167.525C892.173 184.342 890.279 200.412 883.542 216.387C874.113 238.742 862.555 261.639 848.558 281.566C829.51 308.684 797.019 336.451 765.976 348.349C751.9 353.745 730.74 353.897 719.451 342.197C706.302 328.569 717.665 307.464 727.682 295.386C751.814 266.29 789.427 245.742 823.327 230.029C852.802 216.367 884.87 210.129 916.288 202.655C934.957 198.214 953.017 191.854 971.403 186.428C988.417 181.406 1005.51 177.635 1021.42 169.486C1052.33 153.656 1080.76 120.643 1082.53 85.494"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        <section className="text-center text-white relative">
          <p>2025 - Sakil Sazzad Joy. All rights reserved.</p>
        </section>

        <BlurBall />
      </section>
    </Element>
  );
};

export default Contact;
