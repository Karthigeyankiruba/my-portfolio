import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-zinc-300">
          <p className="text-xl mt-10">
            Greetings! I'm Karthigeyan, a dedicated Frontend Developer with a
            year of hands-on experience. My specialization includes crafting
            seamless user interfaces using technologies such as ReactJS, NextJS,
            Material UI, Bootstrap, Tailwind CSS, Redux, and other related
            libraries.
          </p>

          <br />

          <p className="text-xl">
            In my professional journey, I've been actively involved in
            developing UI solutions for diverse SaaS products. I thrive in
            solving complex problems and have successfully contributed to
            projects dealing with significant challenges, including the
            integration of complex and big data sets into user interfaces.
          </p>
          <br />
          <p className="text-xl">
            My approach involves not just creating visually impressive
            interfaces but ensuring seamless integration with Restful APIs. I
            take pride in my ability to deliver interactive and user-centric
            designs.
          </p>
          <br />
          <p className="text-xl">
            I am honored to have been recognized with the Employee of the Month
            award for my dedication and hard work on projects. Now, I am
            actively seeking new career opportunities that will not only propel
            my professional growth but also allow me to enhance my skills
            further.
          </p>
          <br />
          <p className="text-xl">
            Let's collaborate on innovative projects and create impactful user
            experiences together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
