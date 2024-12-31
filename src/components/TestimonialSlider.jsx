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
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
  const swiperRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // Initial animation for the Swiper container
    gsap.from(swiperRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    });

    // Set up animations for slide changes
    const onSlideChange = () => {
      const activeSlide =
        testimonialRefs.current[swiperRef.current.swiper.activeIndex];

      gsap
        .timeline()
        .from(activeSlide.querySelector(".testimonial-image"), {
          duration: 0.8,
          scale: 0,
          rotation: 360,
          ease: "back.out",
        })
        .from(
          activeSlide.querySelector(".testimonial-message"),
          {
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          activeSlide.querySelector(".testimonial-name"),
          {
            duration: 0.4,
            x: -30,
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          activeSlide.querySelector(".testimonial-position"),
          {
            duration: 0.4,
            x: 30,
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.3"
        );
    };


  }, []);

  return (
    <Swiper
      ref={swiperRef}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
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
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="h-[480px] [&_.swiper-button-prev]:text-accent [&_.swiper-button-next]:text-accent [&_.swiper-button-prev]:bg-transparent [&_.swiper-button-next]:bg-transparent [&_.swiper-slide-shadow-left]:hidden [&_.swiper-slide-shadow-right]:hidden"
    >
      <AnimatePresence>
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            ref={(el) => (testimonialRefs.current[index] = el)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-12 text-center max-w-4xl mx-auto relative group"
            >
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-black/50 to-black/10 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:from-accent/20" />
              <div className="absolute inset-0 bg-mesh-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 animate-pulse group-hover:from-accent/10 group-hover:to-accent/10" />

              {/* Enhanced content */}
              <div className="relative z-10">
                <div className="testimonial-image relative w-32 h-32 mb-8 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover shadow-lg border-2 border-accent/20 transition-all duration-300 group-hover:border-accent"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full opacity-30 animate-spin-slow blur-md group-hover:opacity-50" />
                </div>
                <motion.p className="testimonial-message text-xl leading-relaxed mb-6 max-w-3xl text-white/90 font-light italic relative transition-all duration-300 group-hover:text-white">
                  <span className="absolute -left-4 -top-2 text-4xl text-accent opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                    "
                  </span>
                  {testimonial.message}
                  <span className="absolute -right-4 -bottom-2 text-4xl text-accent opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                    "
                  </span>
                </motion.p>
                <motion.h3 className="testimonial-name text-2xl font-bold mb-2 text-white bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-accent/80 group-hover:to-purple-400">
                  {testimonial.name}
                </motion.h3>
                <motion.span className="testimonial-position text-accent font-medium text-lg inline-block relative group-hover:text-accent/80 transition-colors duration-300">
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent group-hover:via-accent/80" />
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
