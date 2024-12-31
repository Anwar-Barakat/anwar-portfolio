'use client';

import { motion } from 'framer-motion';
import TestimonialSlider from '@/components/TestimonialSlider';

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="max-w-5xl mx-auto">
          <TestimonialSlider />
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
