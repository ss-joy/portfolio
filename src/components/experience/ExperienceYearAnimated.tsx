import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const ExperienceYearAnimated = () => {
  const [year, setYear] = useState(0.1);

  useEffect(() => {
    const t = setInterval(() => {
      setYear((p) => {
        if (p < 3) {
          return p + 0.5;
        }
        return p;
      });
    }, 500);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <span className="bg-white rounded-md font-bold shadow p-1 text-xl">
      <motion.span
        initial={{
          scale: 0.8,
          y: 10,
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.5, 1],
          y: [-10, 0],
          opacity: [1, 0, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 2,
        }}
        key={year}
        className="inline-block px-1"
      >
        {year < 2 ? year.toFixed(1) : year.toFixed(0)}
      </motion.span>{" "}
      years
    </span>
  );
};

export default ExperienceYearAnimated;
