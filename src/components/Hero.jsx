import React, { useState, useEffect } from 'react';
import cookieImg from '../images/cookie.png';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-linear-to-t from-white to-amber-700 min-h-96 flex items-center justify-center">
      <div className="relative h-4/5 w-4/5 flex items-center justify-center">
        <span
          className="font-customBBH text-white font-bold text-4xl sm:text-6xl absolute top-4 sm:top-8 left-4 sm:left-8 z-10"
          style={{ transform: `translateX(${scrollY * 0.8}px)` }}
        >
          SHOP
        </span>
        <img src={cookieImg} alt="Cookie!" className="z-10 max-w-full h-auto" />
        <span
          className="font-customBBH text-amber-700 font-bold text-4xl sm:text-6xl absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-10"
          style={{ transform: `translateX(-${scrollY * 0.8}px)` }}
        >
          NOW
        </span>
      </div>
    </div>
  );
};

export default Hero;