import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      // initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-20 flex justify-between items-center text-white">
        {/* <h1 className="text-4xl sm:text-5xl font-signature tracking-wider">
          Karthick
        </h1> */}

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-signature text-cyan-400"
        >
          Karthick
        </motion.h1>

        <ul className="hidden md:flex space-x-6">
          {links.map(({ link, id }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer capitalize text-gray-300 hover:text-cyan-400 font-medium duration-200"
            >
              <Link to={link} smooth duration={500} offset={-70}>
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-50 text-gray-300"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <motion.ul
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300"
          >
            {links.map(({ link, id }) => (
              <li key={id} className="py-6 text-4xl">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  // offset={-70}
                  onClick={() => setNav(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
