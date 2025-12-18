import React, { useState, useEffect, useRef, use } from 'react';

const SubHeaders = (props) => {

    const Ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((R) => {
                    if (R.isIntersecting) {
                        R.target.classList.add("scale-100", "opacity-100");
                    }
                });
            },
            { threshold: 1 }
        );

        if (Ref.current) observer.observe(Ref.current);
        return () => { if (Ref.current) observer.unobserve(Ref.current); };

    }, []);

    return (
        <div className='flex items-center justify-center my-7 py-5'>
            <div ref={Ref} className="text-6xl sm:text-9xl font-bold bg-linear-to-b from-amber-700 to-amber-200/40 scale-80 opacity-0 delay-200 duration-1000 bg-clip-text text-transparent relative transition-all text-center">
                CAKE & COFFEE
            </div>
        </div>
    );
};

export default SubHeaders;