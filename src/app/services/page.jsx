"use client";

import Bulb from "@/components/Bulb";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Brand Strategy & Identity",
    description:
      "Elevate your brand with our comprehensive development approach. We craft data-driven strategies, conduct in-depth market analysis, and create distinctive visual identities that captivate your target audience and catalyze sustainable business growth.",
    icons: [<RxCrop key="1" />, <RxPencil2 key="2" />]
  },
  {
    icon: <RxPencil2 />,
    title: "User Experience Design",
    description:
      "Revolutionize user interactions with our research-backed design expertise. We create intuitive interfaces, develop comprehensive design systems, and deliver accessibility-optimized experiences that maximize engagement and drive exceptional conversion rates.",
    icons: [<RxPencil2 key="1" />, <RxDesktop key="2" />]
  },
  {
    icon: <RxDesktop />,
    title: "Enterprise Development", 
    description:
      "Engineer robust, scalable solutions with cutting-edge technology. Our full-stack mastery covers cloud-native architectures, microservices orchestration, and high-performance systems engineered for enterprise-scale excellence.",
    icons: [<RxDesktop key="1" />, <RxRocket key="2" />]
  },
  {
    icon: <RxReader />,
    title: "Content & Communication",
    description:
      "Amplify your digital presence through strategic content excellence. We integrate advanced SEO practices, leverage data analytics, and implement targeted communication strategies to enhance brand visibility and foster meaningful audience connections.",
    icons: [<RxReader key="1" />, <RxPencil2 key="2" />]
  },
  {
    icon: <RxRocket />,
    title: "Performance Optimization",
    description:
      "Maximize digital performance through cutting-edge optimization strategies. We deliver comprehensive technical audits, implement sophisticated analytics solutions, and execute conversion optimization tactics to amplify your digital ROI.",
    icons: [<RxRocket key="1" />, <RxCrop key="2" />]
  },
];

const Services = () => {
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
              Enterprise Solutions
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/80 leading-relaxed"
            >
              Empowering businesses with innovative digital solutions and strategic expertise to achieve unprecedented growth and market leadership.
            </motion.p>
          </motion.div>
          {/* services */}
          <div className="w-full">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 25,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 35,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 40,
                }
              }}
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 150,
                modifier: 1.5,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[FreeMode, Pagination, Navigation, EffectCoverflow, Autoplay]}
              className="h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px] px-4 sm:px-6 md:px-8"
            >
              <AnimatePresence mode="wait">
                {serviceData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="h-full border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 bg-pink-400/20 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/20 group"
                        whileHover={{
                          borderColor: '#e68e2e',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <motion.div 
                          initial={{ opacity: 0, rotateX: -30 }}
                          animate={{ opacity: 1, rotateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className="text-3xl sm:text-4xl text-accent mb-4 sm:mb-6 group-hover:scale-110 transform transition-transform duration-300"
                        >
                          {item.icon}
                        </motion.div>
                        <motion.h3 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-accent"
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-xs sm:text-sm leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300"
                        >
                          {item.description}
                        </motion.p>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex gap-x-3 sm:gap-x-4 mt-4 sm:mt-6 justify-end"
                        >
                          {item.icons?.map((icon, iconIndex) => (
                            <motion.div
                              key={iconIndex}
                              whileHover={{ 
                                scale: 1.3, 
                                rotate: 360,
                                color: "#e68e2e"
                              }}
                              transition={{ 
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200
                              }}
                              className="text-xl sm:text-2xl text-white/90 cursor-pointer hover:drop-shadow-[0_0_12px_rgba(230,142,46,0.8)]"
                            >
                              {icon}
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </AnimatePresence>
            </Swiper>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden sm:block"
      >
        <Bulb />
      </motion.div>
    </div>
  );
};

export default Services;
