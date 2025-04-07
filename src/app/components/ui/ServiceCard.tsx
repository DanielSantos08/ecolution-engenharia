'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

interface ServiceCardProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  link: string;
}

const ServiceCard = ({ title, description, images, link }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ImageCarousel images={images} height={250} />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link
          href={link}
          className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
        >
          Saiba mais
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
