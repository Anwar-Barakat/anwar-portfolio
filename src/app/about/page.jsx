"use client";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaLaravel,
  FaVuejs,
  FaPhp,
  FaGitAlt,
  
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiRedis
} from "react-icons/si";

// Professional experience and skills data
const aboutData = [
  {
    title: "Technical Skills",
    info: [
      {
        title: "Backend Development",
        icons: [
          <FaPhp key="php" title="PHP" />,
          <FaLaravel key="laravel" title="Laravel" />,
          <SiMysql key="mysql" title="MySQL" />,
          <SiPostgresql key="postgresql" title="PostgreSQL" />,
          <SiRedis key="redis" title="Redis" />,
          <FaDocker key="docker" title="Docker" />,
        ],
      },
      {
        title: "Frontend Development", 
        icons: [
          <FaVuejs key="vue" title="Vue.js" />,
          <FaReact key="react" title="React" />,
          <SiNextdotjs key="next" title="Next.js" />,
          <FaJs key="js" title="JavaScript" />,
          <SiTailwindcss key="tailwind" title="Tailwind CSS" />,
          <SiFramer key="framer" title="Framer Motion" />,
        ],
      },
      {
        title: "Development Tools",
        icons: [
          <FaGitAlt key="git" title="Git" />,
          <FaDocker key="docker" title="Docker" />,
          <FaFigma key="figma" title="Figma" />,
        ],
      }
    ],
  },
  {
    title: "Professional Experience",
    info: [
      {
        title: "Senior Full Stack Developer - Freelance",
        stage: "2021 - Present",
      },
      {
        title: "Backend Development Specialist", 
        stage: "2019 - 2021",
      },
      {
        title: "Junior Web Developer",
        stage: "2018 - 2019", 
      },
    ],
  },
  {
    title: "Education & Certifications",
    info: [
      {
        title: "Bachelor of Science in Computer Science",
        stage: "2015 - 2019",
      },
      {
        title: "Professional Certifications",
        stage: "Udemy & Coursera",
      }
    ],
  },
  {
    title: "Professional Services",
    info: [
      {
        title: "Enterprise Web Applications",
        stage: "Full Stack Development",
      },
      {
        title: "API Architecture & Development",
        stage: "RESTful & GraphQL Solutions", 
      },
      {
        title: "Database Engineering",
        stage: "Design & Performance Optimization",
      },
    ],
  },
];

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/helpers/variants";

const About = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="h-full bg-primary/30 relative pt-32 pb-16 text-center xl:text-left">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Circles />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h2 font-bold tracking-tight"
          >
            Transforming <span className="text-accent">Visions</span> into Digital Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-[600px] mx-auto xl:mx-0 mb-8 xl:mb-12 px-2 xl:px-0 text-lg leading-relaxed"
          >
            As a seasoned Full Stack Developer with deep expertise in Laravel and modern JavaScript frameworks,
            I architect and build enterprise-grade web applications. Leveraging my comprehensive understanding of both 
            backend architecture and frontend development, I deliver scalable, performant solutions that 
            drive meaningful business outcomes.
          </motion.p>

          <motion.a
            href="https://www.linkedin.com/in/anwar-barakat-dev/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ duration: 0.3 }}
            className="text-accent underline self-start hidden xl:flex items-center gap-2 text-lg font-medium"
          >
            View Professional Profile
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="grid grid-cols-2 gap-4 xl:gap-6 mx-auto xl:mx-0 mb-6">
            {aboutData.map((item, itemInd) => (
              <motion.div
                key={itemInd}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setItemIndex(itemInd)}
                className={`${
                  itemInd === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg font-medium relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:rounded-full transition-all duration-300`}
              >
                {item.title}
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={itemIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="p-4 xl:p-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start bg-pink-400/20 rounded-lg shadow-lg backdrop-blur-sm"
            >
              {aboutData[itemIndex].info.map((item, ind) => (
                <motion.div
                  key={ind}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: ind * 0.1 }}
                  onHoverStart={() => setIsHovered(ind)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-4 items-center text-white/80 px-6 py-3 hover:bg-pink-400/30 rounded-md transition-colors duration-300"
                >
                  <motion.div 
                    className="font-medium mb-2 md:mb-0"
                    animate={{ 
                      scale: isHovered === ind ? 1.05 : 1,
                      color: isHovered === ind ? "#e68e2e" : "#ffffff" 
                    }}
                  >
                    {item.title}
                  </motion.div>
                  <div className="hidden md:flex text-accent">•</div>
                  <motion.div 
                    className="text-white/60"
                    animate={{ 
                      scale: isHovered === ind ? 1.05 : 1
                    }}
                  >
                    {item.stage}
                  </motion.div>
                  <div className="flex gap-x-6">
                    {item.icons?.map((icon, iconInd) => (
                      <motion.div
                        key={iconInd}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          color: "#e68e2e"
                        }}
                        transition={{ 
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="text-2xl text-white/90 cursor-pointer"
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
