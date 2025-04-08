import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "ABC (Cybersecurity/Cloud Security)",
    role: "Frontend Developer",
    period: "2023 - Present",
    points: [
      "Led frontend architecture and UI implementation for NHI IDP and IAM Analyzer features.",
      "Built reusable, performant components using React and Tailwind CSS.",
      "Collaborated with security engineers to translate complex logic into clean UIs.",
    ],
  },
  {
    company: "Sysotel.ai (AI for Hospitality Tech)",
    role: "Frontend Developer",
    period: "2022 - 2023",
    points: [
      "Developed rich dashboards and responsive UI components using React.",
      "Integrated APIs to visualize AI-driven insights for hotel analytics.",
      "Contributed to improving UI performance and accessibility.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block mb-8">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <p className="text-cyan-400 font-medium">{exp.role}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc ml-6 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
