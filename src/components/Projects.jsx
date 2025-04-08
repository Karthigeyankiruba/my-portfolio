import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IAM Analyzer",
      description:
        "A powerful tool developed at ABC for analyzing identity access configurations in cloud platforms.",
      tech: ["React", "Tailwind", "Framer Motion"],
      codeLink: "https://github.com/your-iam-analyzer",
      liveLink: "",
    },
    {
      id: 2,
      title: "NHI IDP Integration",
      description:
        "Built the frontend integration for NHI Identity Provider, supporting SSO and MFA workflows.",
      tech: ["React", "OAuth2", "Security"],
      codeLink: "",
      liveLink: "",
    },
    {
      id: 3,
      title: "Sysotel.ai Dashboard",
      description:
        "Worked on dashboard UI for revenue and room inventory management in hospitality systems.",
      tech: ["React", "Tailwind", "Redux"],
      codeLink: "",
      liveLink: "",
    },
  ];

  return (
    <section
      name="projects"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Projects
          </h2>
          <p className="mt-4 text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid gap-10 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(
            ({ id, title, description, tech, codeLink, liveLink }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: id * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  {title}
                </h3>
                <p className="text-sm text-gray-300">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-cyan-900/30 rounded-full border border-cyan-500 text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {codeLink && (
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
