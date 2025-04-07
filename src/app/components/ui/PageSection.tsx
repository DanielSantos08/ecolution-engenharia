'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
  titleColor?: 'green' | 'blue' | 'orange' | 'default';
}

const PageSection = ({ 
  title, 
  children, 
  className = '', 
  id,
  titleColor = 'green'
}: PageSectionProps) => {
  const titleColorClasses = {
    green: 'text-green-600 dark:text-green-400',
    blue: 'text-blue-600 dark:text-blue-400',
    orange: 'text-orange-600 dark:text-orange-400',
    default: 'text-gray-800 dark:text-white'
  };

  return (
    <section 
      id={id} 
      className={`py-16 px-4 md:px-8 ${className}`}
    >
      <div className="container mx-auto">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold mb-8 text-center ${titleColorClasses[titleColor]}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageSection;
