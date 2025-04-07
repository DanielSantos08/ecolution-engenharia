'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
}

const TestimonialCard = ({ quote, author, position }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
      <blockquote className="mb-4 text-gray-700 dark:text-gray-300 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="text-right">
        <p className="font-semibold text-gray-800 dark:text-white">{author}</p>
        {position && (
          <p className="text-gray-600 dark:text-gray-400 text-sm">{position}</p>
        )}
      </footer>
    </motion.div>
  );
};

export default TestimonialCard;
