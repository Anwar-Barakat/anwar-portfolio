"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const tooltipVariants = {
    initial: { 
      opacity: 0,
      x: 20,
      scale: 0.8,
      rotateX: 90
    },
    animate: {
      opacity: 1,
      x: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      x: 10,
      scale: 0.8,
      rotateX: -90,
      transition: {
        duration: 0.3,
        ease: "backIn"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      <motion.div 
        className="flex xl:flex-col items-center justify-between xl:justify-center w-full gap-y-10 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl font-bold xl:rounded-full"
        whileHover={{ 
          boxShadow: "0 0 20px rgba(230, 142, 46, 0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.12)"
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <AnimatePresence mode="wait">
          {navData.map((link, index) => (
            <motion.div
              key={index}
              variants={linkVariants}
              whileHover="hover"
              custom={index}
              className="relative"
            >
              <Link 
                href={link.path} 
                className={`${
                  link.path === pathname ? 'text-accent' : 'text-white/80'
                } relative flex items-center group hover:text-accent transition-all duration-500`}
              >
                <AnimatePresence>
                  {/* Enhanced Tooltip */}
                  <motion.div
                    variants={tooltipVariants}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    className="absolute pr-14 right-0 hidden xl:group-hover:flex items-center pointer-events-none perspective-1000"
                  >
                    <motion.div 
                      className="relative flex items-center bg-gradient-to-r from-accent/80 to-accent/60 text-white p-[8px] rounded-lg shadow-lg backdrop-blur-sm"
                      whileHover={{
                        scale: 1.05,
                        rotateY: [-5, 5, 0],
                        transition: { 
                          duration: 0.5,
                          ease: "easeInOut"
                        }
                      }}
                      animate={{
                        boxShadow: [
                          "0 4px 12px rgba(230, 142, 46, 0.2)",
                          "0 4px 20px rgba(230, 142, 46, 0.4)",
                          "0 4px 12px rgba(230, 142, 46, 0.2)"
                        ],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.div 
                        className="text-[12px] leading-none font-semibold capitalize whitespace-nowrap"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            delay: 0.1,
                            duration: 0.3
                          }
                        }}
                      >
                        {link.name}
                      </motion.div>
                      {/* Animated Triangle */}
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ 
                          scale: 1,
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }
                        }}
                        exit={{ scale: 0, rotate: -180 }}
                        className="border-solid border-l-accent/80 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    rotate: {
                      duration: 0.6,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  className={`relative ${
                    link.path === pathname 
                      ? 'text-accent after:w-full' 
                      : 'after:w-0'
                  } after:h-[2px] after:bg-accent after:absolute after:-bottom-2 after:left-0 after:transition-all after:duration-500 hover:after:w-full`}
                >
                  {link.icon}
                  {link.path === pathname && (
                    <motion.span
                      className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-full bg-accent"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.6, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
