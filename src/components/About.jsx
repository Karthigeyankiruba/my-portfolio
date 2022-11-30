import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odit provident beatae quasi corporis quod laudantium veniam. Culpa
          asperiores eius similique aliquid, maiores nam hic sint error animi
          quod eveniet neque nihil nulla cumque quis at maxime dignissimos
          doloribus aperiam, accusantium assumenda sed! Aliquam assumenda id
          nihil, quis eveniet molestias.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odit provident beatae quasi corporis quod laudantium veniam. Culpa
          asperiores eius similique aliquid, maiores nam hic sint error animi
          quod eveniet neque nihil nulla cumque quis at maxime dignissimos
          doloribus aperiam, accusantium assumenda sed! Aliquam assumenda id
          nihil, quis eveniet molestias.
        </p>


      </div>
    </div>
  );
};

export default About;
