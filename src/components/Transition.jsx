'use client';
import { motion, AnimatePresence } from 'framer-motion';

// Transition Variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
    opacity: 1,
  },
  animate: {
    x: "0%",
    width: "0%",
    opacity: 0,
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
    opacity: 1,
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
