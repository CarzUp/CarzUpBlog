"use client";
import { useState, useEffect } from 'react';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoading = ({ src, alt, className = '' }: ImageWithLoadingProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div 
        className={`w-full h-full bg-gray-100 ${!isLoaded ? 'animate-pulse' : ''}`}
      ></div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  );
};

export default ImageWithLoading;
