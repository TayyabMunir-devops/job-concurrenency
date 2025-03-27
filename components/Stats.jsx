"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 8,
    text: "Projects Compeleted",
  },
  {
    num: 5,
    text: "Languages Completed",
  },

  {
    num: 200,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="lg:container mx-auto bg-black lg:bg-white lg:shadow-lg lg:shadow-black border-y-2 border-accent lg:border-none lg:rounded-2xl px-10 py-14 lg:py-4 flex justify-center text-center mt-10 lg:mt-0 mb-0 lg:mb-10">
        <div className="flex items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 flex-col lg:flex-row">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-0 items-center bg-white lg:bg-transparent py-1 md:py-3 w-56 md:w-64 rounded-xl">
                <CountUp
                  end={item.num}
                  start={0}
                  duration={5}
                  delay={2}
                  className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-black"
                />
                <p className="font-semibold text-[12px] md:text-[16px] text-gray-700">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
