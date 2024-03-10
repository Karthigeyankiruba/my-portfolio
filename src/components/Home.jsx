import React from "react";
import Profile from "../assets/portfolio/profile3.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  let style = {
    backgroundColor: "royalblue",
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold textwhite">
            I'm a <font className="text-orange-400">Frontend Developer </font>
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-lg">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React Js, Next Js, Material UI, Tailwind CSS, Bootstrap.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="group text-white w-fit px-6 py-3 my-2 flex 
            items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
            cursor-pointer font-semibold"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            style={style}
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
