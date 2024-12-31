"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineMail, HiOutlineUser, HiOutlinePencil, HiOutlineChatAlt } from "react-icons/hi";
import { useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setProgress(0);
    
    try {
      // Start progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      clearInterval(progressInterval);
      setProgress(100);
      
      if (result.text === 'OK') {
        setSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
      setProgress(0);
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    initial: {
      opacity: 0,
      y: -30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    initial: { 
      opacity: 0,
      x: -20,
      y: 10
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,142,46,0.1),transparent)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          variants={titleVariants}
          className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-accent via-purple-500 to-accent bg-clip-text text-transparent bg-[size:200%]"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          variants={titleVariants}
          className="text-center text-white/80 mb-12 text-lg"
        >
          Let's create something amazing together
        </motion.p>
        
        <motion.form
          ref={formRef}
          variants={formVariants}
          onSubmit={handleSubmit}
          className="relative p-8 rounded-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          
          {/* Enhanced border animations */}
          <motion.div 
            className="absolute inset-0 border-2 border-accent/0 rounded-2xl"
            whileHover={{
              borderColor: "rgba(230, 142, 46, 0.5)",
              boxShadow: "0 0 20px rgba(230, 142, 46, 0.2)",
              transition: {
                duration: 0.3
              }
            }}
          />
          
          {/* Animated corner accents */}
          <motion.div 
            className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/0 rounded-tl-2xl"
            animate={{
              borderColor: ["rgba(230, 142, 46, 0)", "rgba(230, 142, 46, 0.5)", "rgba(230, 142, 46, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/0 rounded-tr-2xl"
            animate={{
              borderColor: ["rgba(230, 142, 46, 0)", "rgba(230, 142, 46, 0.5)", "rgba(230, 142, 46, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/0 rounded-bl-2xl"
            animate={{
              borderColor: ["rgba(230, 142, 46, 0)", "rgba(230, 142, 46, 0.5)", "rgba(230, 142, 46, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/0 rounded-br-2xl"
            animate={{
              borderColor: ["rgba(230, 142, 46, 0)", "rgba(230, 142, 46, 0.5)", "rgba(230, 142, 46, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <motion.div variants={inputVariants} className="group relative">
              <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent transition-colors duration-300 group-hover:text-accent/80" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border-2 border-white/10 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-accent transition-all duration-300 placeholder:text-white/50 hover:border-white/30"
                placeholder="Your Name"
              />
            </motion.div>
            
            <motion.div variants={inputVariants} className="group relative">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent transition-colors duration-300 group-hover:text-accent/80" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border-2 border-white/10 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-accent transition-all duration-300 placeholder:text-white/50 hover:border-white/30"
                placeholder="Your Email"
              />
            </motion.div>
          </div>

          <motion.div variants={inputVariants} className="mt-6 relative group">
            <HiOutlinePencil className="absolute left-4 top-1/2 -translate-y-1/2 text-accent transition-colors duration-300 group-hover:text-accent/80" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-black/20 border-2 border-white/10 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-accent transition-all duration-300 placeholder:text-white/50 hover:border-white/30"
              placeholder="Subject"
            />
          </motion.div>

          <motion.div variants={inputVariants} className="mt-6 relative group">
            <HiOutlineChatAlt className="absolute left-4 top-6 text-accent transition-colors duration-300 group-hover:text-accent/80" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full bg-black/20 border-2 border-white/10 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-accent transition-all duration-300 placeholder:text-white/50 resize-none hover:border-white/30"
              placeholder="Your Message"
            />
          </motion.div>

          <motion.button
            variants={inputVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={sending}
            className={`mt-8 relative overflow-hidden group py-3 px-8 rounded-lg transition-all duration-300 w-full md:w-auto
              ${sending ? 'bg-accent/50' : success ? 'bg-green-500' : 'bg-accent hover:bg-accent/90'}`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={sending ? 'sending' : success ? 'success' : 'default'}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="relative z-10 font-semibold text-black flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full"
                    />
                    <span>{progress}%</span>
                  </>
                ) : success ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </motion.span>
            </AnimatePresence>
            
            {sending && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            )}
            
            <motion.div
              initial={false}
              animate={{ 
                x: sending ? "100%" : "-100%",
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-white/20"
            />
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
