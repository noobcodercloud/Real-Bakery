import React, { useState, useEffect, useRef } from 'react';

const ProductCard = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const opacity = Math.min(scrollY / 300, 1);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${props.slideFrom === 'left' ? '-100px' : '100px'})`,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={props.image_url}
            alt={props.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title and Price Section */}
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <span className="font-bold text-gray-900 text-base truncate pr-3">{props.title}</span>
          <span className="font-black text-amber-700 text-lg whitespace-nowrap">₹{props.price}</span>
        </div>
      </div>

      {/* Accent bar on hover */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
    </div>
  );
};

export default ProductCard;