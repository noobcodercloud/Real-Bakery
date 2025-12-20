import React, { useEffect, useState, useRef } from "react"

function Header() {

    const [isVisible, setIsVisible] = useState(false)
    const text = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        );

        if (text.current) {
            observer.observe(text.current)
        }

        return () => {
            if (text.current) {
                observer.unobserve(text.current)
            }
        }

    }, [])

    return (
        <div className="relative py-20 overflow-hidden sm:mt-20">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 bg-amber-700 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
            </div>
            
            <div ref={text} className="relative">
                {/* Subtitle */}
                <div 
                    className='text-center text-amber-700 text-sm sm:text-base tracking-widest uppercase mb-4 transition-all duration-700'
                    style={{
                        opacity: isVisible ? '100%' : '0%',
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                >
                    Meet The Masters
                </div>
                
                {/* Main heading */}
                <div className="flex flex-col items-center">
                    <div 
                        className='text-center font-bold bg-linear-to-b from-amber-900 to-amber-600 bg-clip-text text-transparent text-7xl sm:text-9xl transition-all duration-1000 delay-100'
                        style={{
                            transform: isVisible ? 'translateX(0)' : 'translateX(240px)',
                            opacity: isVisible ? '100%' : '10%',
                        }}
                    >
                        Our
                    </div>
                    <div
                        className='text-center font-bold bg-linear-to-b from-amber-900 to-amber-600 bg-clip-text text-transparent text-7xl sm:text-9xl -mt-4 sm:-mt-8 transition-all duration-1000 delay-200'
                        style={{
                            transform: isVisible ? 'translateX(0)' : 'translateX(-240px)',
                            opacity: isVisible ? '100%' : '10%'
                        }}
                    >
                        Cooks
                    </div>
                </div>

                {/* Decorative line */}
                <div className="flex justify-center mt-8">
                    <div 
                        className="h-0.5 bg-linear-to-r from-transparent via-amber-700 to-transparent transition-all duration-1000 delay-500"
                        style={{
                            width: isVisible ? '200px' : '0px',
                            opacity: isVisible ? '100%' : '0%'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Header