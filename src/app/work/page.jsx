"use client";

import WorkSlider from "@/components/WorkSlider";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-12 sm:py-20 md:py-28 xl:py-36 flex items-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-x-8">
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent"
            >
              Featured Work
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/80 leading-relaxed"
            >
              Explore our portfolio of innovative digital solutions and transformative projects that showcase our expertise in creating impactful user experiences.
            </motion.p>
          </motion.div>

          {/* slider */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
