"use client";

// next image
import Image from "next/image";

// next link
import Link from "next/link";

// motion
import { motion } from "framer-motion";

// icons
import { HiArrowRight } from "react-icons/hi2";

// image path
const roundedText = "/rounded-text.png";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:scale-110 transition-all duration-300"
      >
        <Image
          src={roundedText}
          width={148}
          height={148}
          alt="avatar"
          className="animate-spin-slow w-full h-full max-w-[148px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 text-accent" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
