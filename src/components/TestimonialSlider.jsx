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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Sarah Johnson",
    position: "CEO, TechCorp Solutions",
    message:
      "Working with this team has been transformative for our business. Their attention to detail and innovative solutions have helped us achieve remarkable results. Highly recommended for any enterprise looking for excellence.",
  },
  {
    image: "/t-avt-2.png",
    name: "Michael Chen",
    position: "Director of Operations, InnovatePro",
    message:
      "The level of professionalism and technical expertise demonstrated by this team is outstanding. They delivered our project ahead of schedule and exceeded all expectations. A truly reliable technology partner.",
  },
  {
    image: "/t-avt-3.png",
    name: "Emily Rodriguez",
    position: "Head of Digital Strategy, GlobalTech",
    message:
      "Their strategic approach to problem-solving and commitment to quality sets them apart. The solutions provided have significantly improved our operational efficiency and user experience.",
  },
];

const TestimonialSlider = () => {
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
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="h-[480px] [&_.swiper-button-prev]:text-accent [&_.swiper-button-next]:text-accent [&_.swiper-button-prev]:bg-transparent [&_.swiper-button-next]:bg-transparent"
    >
      <AnimatePresence>
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-12 text-center max-w-4xl mx-auto relative"
            >
              {/* Background gradient and effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-black/50 to-black/10 rounded-2xl backdrop-blur-sm" />
              <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 animate-pulse" />

              {/* Content */}
              <div className="relative z-10">
                <div className="relative w-32 h-32 mb-8">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover shadow-lg border-2 border-accent/20"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full opacity-30 animate-spin-slow blur-md" />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl leading-relaxed mb-6 max-w-3xl text-white/90 font-light italic relative"
                >
                  <span className="absolute -left-4 -top-2 text-4xl text-accent opacity-40">
                    "
                  </span>
                  {testimonial.message}
                  <span className="absolute -right-4 -bottom-2 text-4xl text-accent opacity-40">
                    "
                  </span>
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mb-2 text-white bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-accent font-medium text-lg inline-block relative"
                >
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  {testimonial.position}
                </motion.span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </AnimatePresence>
    </Swiper>
  );
};

export default TestimonialSlider;
