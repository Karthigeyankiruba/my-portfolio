import React from "react";
import { motion } from "framer-motion";

import weatherApp from "../assets/portfolio/weather.png";
import fizziCook from "../assets/portfolio/fizziecook.png";
import uchef from "../assets/portfolio/uchef.png";
import dapplLanding from "../assets/portfolio/dappllanding.png";
import board from "../assets/portfolio/board-dashbord.png";
import bitcot from "../assets/portfolio/bitcot.png";

const projects = [
  {
    id: 1,
    src: weatherApp,
    title: "Weather App",
    demo: "https://peaceful-vacherin-455fb2.netlify.app/",
    code: "https://github.com/Karthigeyankiruba/weather-app",
  },
  {
    id: 2,
    src: fizziCook,
    title: "FizziCook",
    demo: "https://legendary-rugelach-da590a.netlify.app/",
    code: "https://github.com/Karthigeyankiruba/react-recipe-app",
  },
  {
    id: 3,
    src: uchef,
    title: "Uchef",
    demo: "https://amazing-buttercream-79511e.netlify.app/",
    code: "https://github.com/Karthigeyankiruba/recipe-app-v2",
  },
  {
    id: 4,
    src: dapplLanding,
    title: "Dappl Landing Page",
    demo: "https://ephemeral-blancmange-2dba0b.netlify.app/",
    code: "https://github.com/Karthigeyankiruba/dappl-project",
  },
  {
    id: 5,
    src: board,
    title: "Dashboard - Board",
    demo: "https://ornate-mooncake-9ae007.netlify.app/",
    code: "https://github.com/Karthigeyankiruba/listed-dashboard",
  },
  {
    id: 6,
    src: bitcot,
    title: "Bitcot Task UI",
    demo: "https://lighthearted-frangipane-d46a96.netlify.app/",
    code: "https://github.com/Karthigeyankiruba/bitcot-task",
  },
];

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Projects
          </h2>
          <p className="text-gray-400 mt-4">
            Check out a few of the applications I’ve built
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, demo, code, title }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: id * 0.05 }}
              className="group relative overflow-hidden rounded-lg shadow-md shadow-gray-700"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-56 object-cover group-hover:scale-110 duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <div className="flex gap-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
