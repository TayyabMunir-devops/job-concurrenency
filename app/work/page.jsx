import React from "react";
import BookStore from "@/app/assests/BookStore.PNG";
import LMS from "@/app/assests/LMS.PNG";
import RealEstate from "@/app/assests/Property.PNG";
import PMS from "@/app/assests/PMS.PNG";
import Image from "next/image";

const data = [
  {
    title: "Book Store",
    stack: "Full Stack",
    image: BookStore,
    languges: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Node JS" },
      { name: "Mongo DB" },
    ],
  },
  {
    title: "LMS",
    stack: "Frontend",
    image: LMS,
    languges: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Real Estate",
    stack: "Frontend",
    image: RealEstate,
    languges: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
  },
  {
    title: "PMS",
    stack: "Full Stack",
    image: PMS,
    languges: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Node JS" },
      { name: "MySQL" },
    ],
  },
];

const Work = () => {
  return (
    <div className=" min-h-[10vh] py-12 lg:py-4">
      <div className="container mx-auto">
        <h1 className="lg:text-[55px] mb-4 lg:mb-14 text-4xl text-gray-600 font-extrabold text-center">
          Projects
        </h1>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-4">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-600 rounded-lg hover:scale-105 duration-300"
                >
                  <Image
                    src={item.image}
                    priority
                    quality={100}
                    alt="haseeb.png"
                    className="contain w-full rounded-lg"
                  />
                  <div className=" px-4">
                    <h1 className="text-2xl font-semibold text-white mt-2">
                      {item.title}
                    </h1>
                    <h2 className=" text-gray-500 font-bold text-[18px]">
                      {item.stack}
                    </h2>
                    <p>
                      {item.languges.map((data, index) => {
                        return (
                          <span
                            key={index}
                            className="inline-block text-accent font-medium text-[16px]"
                          >
                            {data.name}{" "}
                            {index < item.languges.length - 1 && ", "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
