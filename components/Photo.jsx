"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import haseeb from '@/app/assests/Haseeb.jpg'

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full mix-blend-difference mb-8 mt-4"
        >
          <Image
            src={haseeb}
            priority
            quality={100}
            width={500}

            alt="haseeb.png"
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
        className="absolute inset-0 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px]"
        fill="transparent"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="200" // Center the circle horizontally
          cy="204" // Center the circle vertically
          r="196" // Adjust radius to fit the container
          stroke="#00ff99"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial= {{ strokeDasharray: '24 10 0 0'}}
          animate= {{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
