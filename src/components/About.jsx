import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline mb-6">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg text-gray-300 leading-relaxed"
        >
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
            I'm a frontend developer with 2 years of experience, currently
            working at Unosecur, a cybersecurity product company. I specialize
            in building clean, performant, and intuitive interfaces using React
            and Tailwind CSS.
          </p>
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
            At Unosecur, I’ve contributed to developing and architecting
            large-scale features like National Health ID-based Identity
            Providers (NHI IDP) and IAM Analyzers. I take ownership of frontend
            architecture, component design, and user experience — while
            collaborating closely with backend and product teams.
          </p>
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
            I'm constantly exploring better ways to write scalable frontend code
            and refine UI interactions with a focus on accessibility,
            performance, and smooth animations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
