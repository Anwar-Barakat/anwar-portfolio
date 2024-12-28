"use client";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 relative py-32 text-center xl:text-left">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Circles />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex flex-col items-center justify-center h-full pt-12 xl:pt-32 pb-24 xl:pb-48">
          <h1 className="h1 xl:mt-12">About Me</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
