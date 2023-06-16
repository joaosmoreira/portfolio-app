import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#011627] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-500">
              About
            </p>
          </div>

          <div>{/* Empty */}</div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hey, I'm João Moreira. Nice to meet you! Take a look around, if
              you'd like.
            </p>
          </div>
          <div>
            <p>
              With over a decade of professional experience, I have developed
              skills in various areas, including graphic design, digital
              marketing and web development. Among my experiences, I've worked
              for Acushla and Tetribérica, both in digital roles. Apart from my
              professional experience, I attended a 14-week full stack
              programming bootcamp with the goal of changing my life. I'm highly
              motivated and eager to learn, and I'm excited to take on new
              challenges and expand my knowledge and skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
