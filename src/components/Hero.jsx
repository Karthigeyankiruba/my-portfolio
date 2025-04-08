import React from "react";
import { motion } from "framer-motion";

const sentence = "Hi, I’m Karthigeyan";

const letterVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: (i) => ({
    opacity: 1,
    y: `0em`,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          className="flex flex-col justify-center h-full text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white flex flex-wrap">
            {sentence.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            A Frontend Developer with 2+ years of experience building
            responsive, user-centric web applications. Skilled in creating
            scalable UI architectures, with hands-on experience in the
            cybersecurity domain.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
