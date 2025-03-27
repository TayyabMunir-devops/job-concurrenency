"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import myResume from "@/app/assests/myResume.png";
import Image from "next/image";

const about = [
    {
      fieldName: "Name",
      fieldValue: "Haseeb Mazhar",
    },
    {
      fieldName: "Age",
      fieldValue: "19",
    },
    {
      fieldName: "Gender",
      fieldValue: "Male",
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 3259871433",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email",
      fieldValue: "haseebmazhar35@gmail.com",
    },
  ]

const experience = {};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className=" min-h-[10vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
         <div className="flex flex-col lg:flex-row justify-between">
           <div>
            <div className=" text-[45px] font-bold text-gray-500 text-center lg:text-left">Info</div>
            <div>{about.map((items, key) => {
              return (
                <div key={key} className="flex">
                  <h1 className=" text-accent text-xl mt-1 font-semibold">{items.fieldName}:<span className=" text-white">{" "}{items.fieldValue}</span></h1>
                </div>
              )
            })}</div>
           </div>
           <div className="mt-10 lg:mt-0">
             <div className="text-[45px] font-bold text-gray-500 text-center">Skills</div>
             <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <FaHtml5 className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer">HTML 5</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <FaCss3 className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer">CSS 3</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <FaJs className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer text-center">Java Script</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <FaReact className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer">React JS</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <SiNextdotjs className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer">Next JS</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <FaNodeJs className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer">Node JS</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <SiTailwindcss className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer text-center">Tailwind CSS</h1>
              </div>
              <div className=" bg-gray-700 bg-opacity-[50%] py-4 px-10 rounded-md flex flex-col items-center justify-center hover:text-accent duration-500">
                <FaFigma className="text-[4rem]" />
                <h1 className=" text-xl mt-2 hover:cursor-pointer">Figma</h1>
              </div>
           </div>
           </div>
         </div>      
      </div>
    </motion.div>
  );
};

export default Resume;
