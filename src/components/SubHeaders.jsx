import React, { useState, useEffect, useRef } from 'react';

const SubHeaders = (props) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="text-6xl sm:text-9xl font-bold bg-linear-to-b from-amber-700 to-amber-200/40 bg-clip-text text-transparent relative"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}>
                SAMPLE TEXT
            </div>
        </div>
    );
};

export default SubHeaders;