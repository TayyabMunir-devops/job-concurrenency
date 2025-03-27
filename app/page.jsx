"use client";
import Stats from "@/components/Stats";
import Image from "next/image";
import haseeb from "@/app/assests/Haseeb.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Work from "./work/page";
import Contact from "./contact/page";
import AboutMeModal from "@/components/AboutMeModal";

export default function Home() {

  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();
      setProject(data);
    };
    fetchProjects();
  }, []);
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:flex-row items-center lg:pt-8 lg:pb-24">
          <div className="flex justify-center items-center text-center lg:text-left">
            <div>
              <h2 className="font-semibold text-[30px] md:text-[48px] mt-4 lg:mt-0 lg:text-[48px] leading-tight text-accent">
                Haseeb Mazhar
              </h2>
              <h1 className="font-semibold text-[20px] md:text-[32px] mt-2 lg:text-[32px] leading-tight text-white">
                Frontend Developer
              </h1>
              <hr className="hidden md:flex border-4 border-[#2F2F2F] w-[350px] -mt-3 md:mx-auto lg:mx-0" />


              {/* <div className="duration-300 flex flex-row justify-center lg:justify-start items-center mt-10">
                <div className="flex items-center bg-black rounded-md py-2 px-4 text-sm lg:py-2 lg:pl-4 lg:pr-8 duration-300 hover:cursor-pointer">
                  <p className="font-semibold text-sm md:text-lg hover:cursor-pointer">
                    About Me
                  </p>
                </div>
                <div className="-ml-4 text-white duration-300 ">
                  <HiOutlineArrowNarrowRight
                    size={40}
                    className="hidden lg:flex"
                  />
                </div>
              </div> */}
              <AboutMeModal/>

            </div>
          </div>
          <div className="md:grid md:grid-cols-3 flex flex-col-reverse w-full justify-center md:justify-items-end lg:justify-center lg:flex">
            <div className="flex justify-center md:justify-end md:col-span-2 lg:col-span-1 lg:justify-center lg:items-center">
              <Image
                priority
                quality={100}
                src={haseeb}
                alt="Haseeb"
                className="rounded-full overflow-hidden h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[270px] lg:w-[270px] object-cover mix-blend-difference mt-10"
              />
            </div>

            <div className="flex justify-center md:justify-end items-end lg:hidden">
              <div className="">
                <div className="md:px-2 md:py-10 py-2 px-10 bg-black shadow-md shadow-black border border-gray-600 rounded-lg">
                  <div className="flex flex-row md:flex-col items-center justify-center gap-6">
                      <a
                        href="https://github.com/ha-seeb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={35} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/haseeb-mazhar-148274322/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={35} />
                      </a>
                      <a
                        href="https://www.instagram.com/haseeb_mazhar.14/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={35} />
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-center md:justify-end items-end hidden lg:flex">
              <div className="">
                <div className="md:px-2 md:py-10 py-2 px-10 bg-black shadow-md shadow-black border border-gray-600 rounded-lg">
                  <div className="flex flex-row md:flex-col items-center justify-center gap-6">
                  <a
                        href="https://github.com/ha-seeb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={35} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/haseeb-mazhar-148274322/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={35} />
                      </a>
                      <a
                        href="https://www.instagram.com/haseeb_mazhar.14/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={35} />
                      </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Stats />
      <hr className="border-2 border-accent mt-16 hidden lg:flex w-full xl:w-screen"/>
      <div className="flex justify-center">
      <h1 className="text-center font-bold text-3xl lg:text-5xl p-4 border-x-2 border-b-2 border-accent text-accent">Latest Work</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center content-center self-center border-b-2 border-accent">
          <div className="flex flex-col justify-center items-center border-r-0 md:border-r-[1px] md:border-accent">
            <div className="w-[90%] xl:w-[80%] mt-10">
              {project.slice(0, 3).map((data, index) => (
                <div
                  key={index}
                  className="mb-8 border border-gray-700 w-full flex flex-col justify-center px-10 py-10 md:px-6 rounded-[60px] hover:shadow-xl hover:shadow-black"
                >
                  <Image
                    src={data.images}
                    alt="Project Image"
                    width={800}
                    height={350}
                    className="rounded-2xl object-cover shadow-md"
                  />
                  <div className="font-extrabold text-base bg-white/10 text-accent border border-gray-500 lg:text-2xl px-4 py-3 mt-4 rounded-xl text-center">
                    {data.project_name}
                  </div>
                  <h1 className="text-gray-300 font-bold text-xs lg:text-lg mt-3">
                      {data.designation}
                  </h1>
                  <h1 className="text-gray-400 font-bold text-xs lg:text-sm mt-2">
                      {data.project_description}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border-l-0 md:border-l-[1px] md:border-accent">
            <div className="w-[90%] xl:w-[80%]">
              {project.slice(3, 5).map((data, index) => (
                <div
                  key={index}
                  className="mb-8 border border-gray-700 w-full flex flex-col justify-center px-10 py-10 md:px-6 rounded-[60px] hover:shadow-xl hover:shadow-black"
                >
                  <Image
                    src={data.images}
                    alt="Project Image"
                    width={800}
                    height={350}
                    className="rounded-2xl object-cover shadow-md"
                  />
                  <div className="font-extrabold text-base lg:text-2xl mt-4 px-4 py-3 rounded-lg text-center border border-gray-500 bg-white/10 text-accent">
                    {data.project_name}
                  </div>
                  <h1 className="text-gray-300 font-bold text-xs lg:text-lg mt-3">
                      {data.designation}
                  </h1>
                  <h1 className="text-gray-400 font-bold text-xs lg:text-sm mt-2">
                      {data.project_description}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
        <Contact/>
        </div>
    </section>
  );
}
