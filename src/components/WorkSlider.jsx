"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaLaravel,
  FaShoppingCart,
  FaVuejs,
  FaNodeJs,
  FaMobile,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiSocketdotio,
  SiGraphql,
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiD3Dotjs,
} from "react-icons/si";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "E-Commerce Platform",
          description:
            "A full-featured online shopping platform built with Next.js and Laravel",
          path: "/thumb1.jpg",
          link: "https://project1.com",
          icons: [
            <SiNextdotjs key="next" />,
            <FaLaravel key="laravel" />,
            <FaShoppingCart key="ecom" />,
          ],
        },
        {
          title: "Portfolio Website",
          description:
            "Modern portfolio site with stunning animations and interactions",
          path: "/thumb2.jpg",
          link: "https://project2.com",
          icons: [
            <FaReact key="react" />,
            <motion.div key="framer">🎨</motion.div>,
            <SiTailwindcss key="tailwind" />,
          ],
        },
        {
          title: "Admin Dashboard",
          description: "Comprehensive admin panel with real-time analytics",
          path: "/thumb3.jpg",
          link: "https://project3.com",
          icons: [
            <FaVuejs key="vue" />,
            <FaNodeJs key="node" />,
            <SiMongodb key="mongo" />,
          ],
        },
        {
          title: "Mobile App",
          description:
            "Cross-platform mobile application built with React Native",
          path: "/thumb4.jpg",
          link: "https://project4.com",
          icons: [
            <FaReact key="react-native" />,
            <SiFirebase key="firebase" />,
            <FaMobile key="mobile" />,
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Social Network",
          description: "Feature-rich social platform with real-time messaging",
          path: "/thumb4.jpg",
          link: "https://project5.com",
          icons: [
            <SiSocketdotio key="socket" />,
            <SiExpress key="express" />,
            <SiMongodb key="mongo" />,
          ],
        },
        {
          title: "Blog Platform",
          description: "Modern blogging platform with markdown support",
          path: "/thumb1.jpg",
          link: "https://project6.com",
          icons: [
            <SiNextdotjs key="next" />,
            <SiGraphql key="graphql" />,
            <SiPostgresql key="postgres" />,
          ],
        },
        {
          title: "Task Manager",
          description: "Collaborative task management application",
          path: "/thumb2.jpg",
          link: "https://project7.com",
          icons: [
            <FaReact key="react" />,
            <SiRedux key="redux" />,
            <FaNodeJs key="node" />,
          ],
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time data visualization platform",
          path: "/thumb3.jpg",
          link: "https://project8.com",
          icons: [
            <SiD3Dotjs key="d3" />,
            <SiExpress key="express" />,
            <SiMongodb key="mongo" />,
          ],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="h-[280px] sm:h-[480px]"
    >
      <AnimatePresence>
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 cursor-pointer p-4">
              {slide.images.map((image, imageIndex) => (
                <Link
                  href={image.link}
                  key={imageIndex}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      delay: imageIndex * 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative h-[140px] sm:h-[220px]">
                      <Image
                        src={image.path}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 p-6 flex flex-col justify-end"
                        >
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {image.title}
                          </h3>
                          <p className="text-sm mb-4 text-white/80 line-clamp-2">
                            {image.description}
                          </p>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex gap-4"
                          >
                            {image.icons.map((icon, iconIndex) => (
                              <motion.div
                                key={iconIndex}
                                whileHover={{
                                  scale: 1.2,
                                  rotate: 360,
                                  color: "#e68e2e",
                                }}
                                transition={{
                                  duration: 0.4,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                className="text-xl text-white/90 hover:text-accent"
                              >
                                {icon}
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </AnimatePresence>
    </Swiper>
  );
};

export default WorkSlider;
