import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#011627]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-sky-500">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fdfffc]">
          João Moreira
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Developer & Designer.
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
          With over a decade of professional experience. I attended a full stack
          programming bootcamp with the goal of changing my life.
        </p>
        <div>
          <Link to="portfolio" smooth={true} duration={500}>
            <button className="text-white group rounded-sm border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-500 hover:border-sky-500 hover:text-[#011627]">
              Portfolio
              <span className="group-hover:translate-x-2.5 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
