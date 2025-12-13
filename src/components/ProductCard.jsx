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
      className="group border border-amber-200/50 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${props.slideFrom === 'left' ? '-100px' : '100px'})`,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="bg-white h-56 w-full rounded-2xl overflow-hidden flex sm:flex-col shadow-sm items-center justify-evenly">
        <div className="h-3/5 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/50 rounded-xl m-3 flex items-center justify-center text-amber-800 font-semibold overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <img src={props.image_url} alt="IMAGE" className="w-full h-full object-cover" />
        </div>
        <div className="w-[77%] flex flex-col sm:flex-row sm:justify-between items-center border border-amber-200/50 rounded-xl mx-3 mb-3 px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50">
          <span className="font-bold text-amber-900 text-lg">{props.title}</span>
          <span className="font-bold text-green-600 text-lg">₹{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;