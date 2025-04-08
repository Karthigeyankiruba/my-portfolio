import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    label: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/karthigeyan-k-53116a19a/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    label: "GitHub",
    icon: <FaGithub size={20} />,
    href: "https://github.com/Karthigeyankiruba",
  },
  {
    id: 3,
    label: "Email",
    icon: <HiOutlineMail size={20} />,
    href: "mailto:karthigeyan0901@gmail.com",
  },
  {
    id: 4,
    label: "Resume",
    icon: <BsFillPersonLinesFill size={20} />,
    href: "Karthigeyan-resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden xl:flex flex-col fixed top-[35%] left-0 z-50">
      <ul>
        {links.map(({ id, label, icon, href, style, download }) => (
          <motion.li
            key={id}
            initial={{ x: -120 }}
            animate={{ x: -10 }}
            whileHover={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-center justify-between w-44 h-12 px-4 ml-[-100px] bg-gray-800 bg-opacity-70 text-white hover:bg-cyan-600 hover:text-white rounded-md duration-300 cursor-pointer mb-2 shadow-md ${style}`}
          >
            <a
              href={href}
              className="flex items-center justify-between w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-medium">{label}</span>
              {icon}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
