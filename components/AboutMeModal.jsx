import { useState } from "react";
import { FaBootstrap, FaFigma, FaGithub } from "react-icons/fa";
import { FaDatabase, FaNodeJs, FaReact, FaRegChartBar } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; // Assuming you're using this for the icon
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiDaisyui, SiFramer, SiMongodb, SiMui, SiShadcnui } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import Tooltip from "./Tooltip";

const technologies = [
  { name: "React JS", icon: <FaReact />, link: "https://react.dev/" },
  { name: "Next JS", icon: <RiNextjsLine />, link: "https://nextjs.org/" },
  { name: "Node JS", icon: <FaNodeJs />, link: "https://nodejs.org/" },
  { name: "Mongo DB", icon: <SiMongodb />, link: "https://www.mongodb.com/" },
  { name: "My SQL", icon: <FaDatabase />, link: "https://www.mysql.com/" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, link: "https://tailwindcss.com/" },
  { name: "Bootstrap", icon: <FaBootstrap />, link: "https://getbootstrap.com/" },
  { name: "Shadcn", icon: <SiShadcnui />, link: "https://ui.shadcn.com/" },
  { name: "Daisy UI", icon: <SiDaisyui />, link: "https://daisyui.com/" },
  { name: "Material UI", icon: <SiMui />, link: "https://mui.com/" },
  { name: "Ant Design", icon: <SiAntdesign />, link: "https://ant.design/" },
  { name: "Framer Motion", icon: <SiFramer />, link: "https://www.framer.com/motion/" },
  { name: "Chart JS", icon: <FaRegChartBar />, link: "https://www.chartjs.org/" },
  { name: "Matter JS", icon: "⚙️", link: "https://brm.io/matter-js/" },
  { name: "Figma", icon: <FaFigma />, link: "https://www.figma.com/" },
  { name: "Github", icon: <FaGithub />, link: "https://github.com/" },
  { name: "Git", icon: <BiLogoGit />, link: "https://git-scm.com/" }
];

const AboutMeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <div className="duration-300 flex flex-row justify-center lg:justify-start items-center mt-10">
        <div
          onClick={openModal} // Open the modal on button click
          className="flex items-center bg-black rounded-md py-2 px-4 text-sm lg:py-2 lg:pl-4 lg:pr-8 duration-300 hover:cursor-pointer"
        >
          <p className="font-semibold text-sm md:text-lg hover:cursor-pointer">
            About Me
          </p>
        </div>
        <div className="-ml-4 text-white duration-300">
          <HiOutlineArrowNarrowRight size={40} className="hidden lg:flex" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-primary animate__bounce p-8 rounded-lg max-w-full lg:w-[80%] lg:h-[90%] h-full overflow-y-auto">
            <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-center mb-4 text-accent">About Me</h2>
            <button onClick={closeModal} className="px-2 py-2 hover:text-accent">x</button>
            </div>
            <div className="flex flex-col lg:flex-row justify-center w-full mt-10 gap-10">
            <div className="w-full">
                <p className="text-lg text-white">
                Hello! I'm Haseeb Mazhar, a passionate Frontend Developer with experience in building dynamic and responsive web applications. I specialize in technologies like React.js, Next.js, Tailwind CSS, and more. I have a strong ability to pick up new concepts quickly and adapt to emerging technologies, allowing me to work efficiently in diverse tech stacks. With a keen eye for detail and a problem-solving mindset, I focus on creating seamless user experiences and scalable solutions. Let’s connect and collaborate to build something amazing!
                </p>
              </div>
              <div className="w-full">
               <div className="flex gap-3 flex-wrap">
                  {technologies.map((tech, index) => (
                    <a
                      key={index}
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row text-xs gap-2 px-4 py-2 rounded-full border border-white/20 items-center hover:bg-accent hover:text-black hover:border-accent duration-300 hover:cursor-pointer"
                    >
                      {tech.icon}
                      <p>{tech.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          <div className="flex justify-center items-center w-full">
          <div className="flex justify-center w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%]">
          <Tooltip/>
          </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMeModal;


