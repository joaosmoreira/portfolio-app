/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import GitNaAreia from "../assets/projects/gitnareia.jpg";
import Javabank from "../assets/projects/javabank.jpg";
import Frozen from "../assets/projects/frozen_shop.jpg";
import Acushla from "../assets/projects/acushla_gold.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-gray-300 bg-[#011627]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-sky-500">
            Work
          </p>

          <p className="py-6">// Some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid 1 */}
          <div
            style={{ backgroundImage: `url(${GitNaAreia})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                #GitNaAreia
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/joaosmoreira/perdi-o-git-na-areia-remastered"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div
            style={{ backgroundImage: `url(${Javabank})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Javabank
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/joaosmoreira/my-javabank/tree/step-13-to-work-with-js"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid 3 */}
          <div
            style={{ backgroundImage: `url(${Frozen})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Frozen Shop 24h hackathon
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/joaosmoreira/ac-hackathon-fozenshop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid 4 */}
          <div
            style={{ backgroundImage: `url(${Acushla})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Acushla Gold & Sport
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.behance.net/gallery/60633105/Acushla-Organic-Olive-Oil-Gold-Sport-Packaging"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid 5 */}

          {/* Grid 6 */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
