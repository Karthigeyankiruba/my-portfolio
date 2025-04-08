import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import mongo from "../assets/mongo.png";

const techs = [
  { id: 1, src: html, title: "HTML", ring: "ring-orange-400" },
  { id: 2, src: css, title: "CSS", ring: "ring-blue-400" },
  { id: 3, src: javascript, title: "JavaScript", ring: "ring-yellow-300" },
  { id: 4, src: reactImage, title: "React", ring: "ring-cyan-400" },
  { id: 5, src: tailwind, title: "Tailwind CSS", ring: "ring-sky-400" },
  { id: 6, src: bootstrap, title: "Bootstrap", ring: "ring-purple-400" },
  { id: 7, src: node, title: "Node.js", ring: "ring-green-400" },
  { id: 8, src: mongo, title: "MongoDB", ring: "ring-emerald-400" },
  { id: 9, src: github, title: "GitHub", ring: "ring-gray-300" },
];

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Skills
          </h2>
          <p className="mt-4 text-gray-400">
            Technologies I’ve worked with and use regularly
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {techs.map(({ id, src, title, ring }) => (
            <motion.div
              key={id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/5 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 flex flex-col items-center py-6 px-4"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center ring-4 ${ring} bg-white/10 backdrop-blur-md`}
              >
                <img src={src} alt={title} className="w-10 h-10" />
              </div>
              <p className="mt-4 text-white font-semibold text-sm tracking-wide">
                {title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
