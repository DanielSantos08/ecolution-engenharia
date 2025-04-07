'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  height?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  className?: string;
}

const ImageCarousel = ({ 
  images, 
  height = 400, 
  autoplay = true, 
  autoplaySpeed = 5000,
  className = ''
}: ImageCarouselProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  if (!mounted) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div style={{ height: `${height}px`, position: 'relative' }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
