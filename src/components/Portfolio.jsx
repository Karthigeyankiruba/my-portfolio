import React from "react";

import weatherApp from "../assets/portfolio/weather.png";
import fizziCook from "../assets/portfolio/fizziecook.png";
import uchef from "../assets/portfolio/uchef.png";
import dapplLanding from "../assets/portfolio/dappllanding.png";
import board from "../assets/portfolio/board-dashbord.png";
import bitcot from "../assets/portfolio/bitcot.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherApp,
      demo: "https://peaceful-vacherin-455fb2.netlify.app/",
      code: "https://github.com/Karthigeyankiruba/weather-app",
    },
    {
      id: 2,
      src: fizziCook,
      demo: "https://legendary-rugelach-da590a.netlify.app/",
      code: "https://github.com/Karthigeyankiruba/react-recipe-app",
    },
    {
      id: 3,
      src: uchef,
      demo: "https://amazing-buttercream-79511e.netlify.app/",
      code: "https://github.com/Karthigeyankiruba/recipe-app-v2",
    },
    {
      id: 4,
      src: dapplLanding,
      demo: "https://ephemeral-blancmange-2dba0b.netlify.app/",
      code: "https://github.com/Karthigeyankiruba/dappl-project",
    },
    {
      id: 5,
      src: board,
      demo: "https://ornate-mooncake-9ae007.netlify.app/",
      code: "https://github.com/Karthigeyankiruba/listed-dashboard",
    },
    {
      id: 6,
      src: bitcot,
      demo: "https://lighthearted-frangipane-d46a96.netlify.app/",
      code: "https://github.com/Karthigeyankiruba/bitcot-task",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounder-lg">
              <img
                src={src}
                alt=""
                style={{
                  objectFit: "cover",
                  maxHeight: 200,
                  width: "100%",
                }}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
