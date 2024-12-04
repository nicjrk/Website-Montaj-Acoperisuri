import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  src: string; // Imaginea este trecută prin prop-ul 'src'
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, src }) => {
  return (
    <section
      className="relative h-[40vh] min-h-[400px] flex items-center justify-center text-white"
    >
      {/* Imaginea este setată ca element img */}
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-[-1]" // Stiluri pentru a face imaginea să fie de fundal
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
