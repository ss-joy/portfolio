import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import AnimatedChevronRight from "./AnimatedChevronRight";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type SingleProjectBoxProps = {
  image: StaticImport;
  projectName: string;
  projectNameColor: string;
};

const SingleProjectBox = ({
  image,
  projectName,
  projectNameColor,
}: SingleProjectBoxProps) => {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 45%"],
  });

  const { scrollYProgress: scrollYProgressForScaling } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // useMotionValueEvent(scrollYProgressForScaling, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const containerScale = useTransform(
    scrollYProgressForScaling,
    [0, 1],
    [1, 1.03]
  );

  return (
    <>
      <>
        {" "}
        <motion.div
          ref={containerRef}
          style={{
            opacity: containerOpacity,
            scale: containerScale,
          }}
          onClick={() => setShowModal((p) => !p)}
          className="p-3 bg-white/40 rounded-lg backdrop-blur-24 hover:cursor-pointer"
        >
          <motion.div
            initial="initial"
            whileHover="animate"
            className="flex justify-between items-center"
          >
            <h1
              className={"text-4xl md:text-7xl my-8 " + ` ${projectNameColor} `}
            >
              {projectName}
            </h1>
            <AnimatedChevronRight />
          </motion.div>
          <Image
            src={image}
            width={1100}
            height={900}
            alt="project image"
            className="w-full h-full rounded-lg"
          />
        </motion.div>
      </>
      <>
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-none w-[90%] mt-20">
            <DialogHeader>
              <DialogTitle
                className={
                  "text-4xl md:text-7xl my-8 " + ` ${projectNameColor} `
                }
              >
                {projectName}
              </DialogTitle>
              <DialogDescription>ssd</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Image
                src={image}
                width={1100}
                height={900}
                alt="project image"
                className="w-full h-full rounded-lg"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At est
                rerum sit nostrum sunt ad, aperiam, aliquid possimus maiores
                quisquam quam eaque doloremque molestias ut numquam fugiat ipsam
                hic odit. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. In, consequuntur a quis illum nesciunt dicta velit
                deserunt aperiam assumenda et reiciendis ducimus, aliquam
                placeat numquam ipsum doloremque, quos quidem blanditiis labore.
                Molestias sit quasi odit aliquid quidem vitae in excepturi porro
                commodi maxime sint asperiores, repudiandae architecto?
                Voluptatibus consequuntur, sunt reprehenderit recusandae est
                mollitia eos aliquid temporibus. Nemo corrupti quasi vero eos a
                numquam sed asperiores quod facere inventore quia expedita non
                fugiat provident minima vitae enim quos suscipit mollitia
                eligendi praesentium, autem incidunt perferendis? Rerum alias
                repudiandae odio ab nobis! Veniam, non ut iusto officia, dicta,
                molestiae ipsa odio qui explicabo eos ad! Dolores consequuntur
                sint cum obcaecati! Consequatur excepturi saepe deserunt
                adipisci repellat. Nesciunt eos inventore similique incidunt
                maiores praesentium aspernatur vero aut quam! Minima quibusdam
                repellat impedit nisi natus, quod repudiandae culpa labore vel
                officiis temporibus nemo nam excepturi? Repellat tenetur illo
                assumenda expedita dicta praesentium maiores consectetur magnam
                aliquid minima, suscipit, odio ut recusandae ad quos numquam
                nihil eius porro culpa natus distinctio. Consequuntur quasi
                impedit dolorum recusandae repudiandae! Eos nobis nihil natus,
                repudiandae soluta quas, doloribus voluptates eius fugit
                similique atque nulla mollitia illum quo qui laboriosam laborum
                nesciunt, dignissimos esse? Temporibus cumque doloremque aut
                omnis fugit suscipit corporis. Aut aliquam debitis illo
                accusamus dolore maiores assumenda blanditiis saepe commodi!
                Minus tempore earum iste magnam quae? Soluta iusto consequatur
                unde dignissimos enim, modi aliquam minima beatae iste? Totam
                ducimus sed voluptatem? Reiciendis enim itaque distinctio sed
                laborum explicabo recusandae est quaerat sequi aperiam. Nisi,
                ullam. Repellendus minus excepturi necessitatibus soluta
                pariatur assumenda ab similique libero amet facere molestiae
                reprehenderit nam laborum consequatur quam iure inventore culpa
                fuga expedita corporis, ea laboriosam aut perferendis dicta.
                Recusandae est delectus facere. Dolor obcaecati, rem suscipit
                vel porro eos, tenetur dolores consectetur dignissimos a
                voluptatibus quas facilis voluptate sit natus reprehenderit nam
                laudantium deleniti dolore, inventore earum assumenda corrupti
                accusamus. Doloremque hic voluptate incidunt itaque quasi eius
                deserunt, totam alias voluptates, consectetur necessitatibus
                aliquam expedita! Ipsam, itaque, iste veritatis quo laboriosam,
                voluptate rem possimus fuga ratione suscipit distinctio nam.
                Natus repudiandae dolore mollitia at ipsa nostrum, iure unde
                dolores consectetur, illo incidunt autem aspernatur consequatur
                alias sint cumque molestias veritatis sunt magni error optio ex
                aperiam? Molestiae debitis in recusandae deserunt? Nesciunt
                impedit officiis sapiente veritatis, doloremque assumenda
                exercitationem dignissimos maxime! Alias asperiores sequi quidem
                adipisci vero maiores error ipsa dolores, porro perspiciatis
                eveniet facilis nam quis facere commodi eum ut obcaecati aut
                ratione quo. Vero reprehenderit enim explicabo omnis quae vel
                magnam! Nulla repudiandae amet eligendi veritatis consectetur
                beatae, animi natus quam dignissimos quis pariatur fugit tempore
                cumque nostrum quas corporis placeat impedit nemo? Corporis ut
                ipsum, obcaecati quibusdam nesciunt saepe omnis atque quia
                facere excepturi cumque non provident nostrum velit culpa alias,
                dolorem sapiente aut nulla magni commodi iure aperiam.
                Voluptatem, nam recusandae beatae mollitia aperiam natus
                consectetur, iusto earum ullam odio perspiciatis voluptas eaque
                quas facilis saepe dicta ipsum quia porro officia dolore
                reiciendis vero! Corporis hic quis aliquid illum perspiciatis
                sint ea nemo accusantium perferendis.
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    </>
  );
};

export default SingleProjectBox;
