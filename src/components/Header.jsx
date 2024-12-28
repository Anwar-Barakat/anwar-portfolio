"use client";

import { motion, useAnimate } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [scope, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: MdEmail, href: "mailto:example@email.com", label: "Email" },
  ];

  const handleLogoHover = () => {
    animate(".social-icon", {
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    });
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.8,
      rotate: -45,
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgb(230, 142, 46)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <header
      ref={scope}
      className="fixed top-0 z-30 w-full bg-black/5 backdrop-blur-sm "
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="/"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={handleLogoHover}
            className="logo-text text-2xl md:text-3xl font-bold tracking-tight"
          >
            <span className="text-white">Anwar</span>
            <span className="text-accent">.RM</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-6"
          >
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 + 0.3 },
                }}
                className="social-icon group flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <HiMenuAlt3 className="text-2xl" />
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 40,
            },
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                  transition: { delay: index * 0.1 },
                }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-white/80 hover:text-accent px-4 py-2"
              >
                <Icon className="text-xl" />
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
