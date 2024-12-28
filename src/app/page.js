"use client";

import Image from "next/image";

// components
import Avatar from "@/components/Avatar";
import ProjectsBtn from "@/components/ProjectsBtn";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/helpers/variants";

// images
import bgExplosion from "/public/bg-explosion.png";
import ParticlesContainer from "@/components/ParticlesContainer";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full relative">
      <ParticlesContainer />

      {/* Text */}
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-10">
        <div className="text-center flex flex-col justify-center items-start xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Hero text */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="h1"
          >
            <span className="text-white">
              Transforming Ideas <br /> Into{" "}
            </span>
            <span className="text-accent">Digital Experiences</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="text-white max-w-[700px] lg:text-4xl font-medium mt-4 lg:text-left text-center mx-auto xl:mx-0"
          >
            Building modern web applications with Laravel, Vue.js, and React for
            exceptional user experiences.
          </motion.p>

          {/* Particles */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full flex justify-center xl:justify-start mt-8"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Image */}
      <div className="hidden xl:block w-[90%] h-[90%] absolute right-0 bottom-0">
      <div className="relative w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0">     <Image
            src={bgExplosion}
            alt="background explosion"
            quality={100}
            priority
            className="object-cover object-right opacity-60 mix-blend-color-dodge animate-pulse blur-sm"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
