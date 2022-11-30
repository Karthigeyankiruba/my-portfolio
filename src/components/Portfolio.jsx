import React from "react";

import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo:'https://stellar-lamington-8dffc7.netlify.app/',
      code:'https://github.com/Karthigeyankiruba/Movie-List',
    },
    {
      id: 2,
      src: reactParallax,
      demo:'https://extraordinary-madeleine-1a824a.netlify.app/',
      code:'',
    },
    {
      id: 3,
      src: reactWeather,
      demo:'https://fantastic-cassata-7e5956.netlify.app/',
      code:'https://github.com/Karthigeyankiruba/Day19-Tsk-1',
    },
    {
      id: 4,
      src: arrayDestruct,
      demo:'',
      code:'',
    },
    {
      id: 5,
      src: reactParallax,
      demo:'',
      code:'',
    },
    {
      id: 6,
      src: reactWeather,
      demo:'',
      code:'',
    },

  ];




  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen pt-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounder-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer" className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code}  target="_blank" rel="noreferrer" className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
