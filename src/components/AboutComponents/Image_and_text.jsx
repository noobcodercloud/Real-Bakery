import React, { useRef, useEffect, useState } from "react";
import cook from '../../images/cook.png'

function About() {

    const [IsVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }

    }, [])


    return (
        <div
            ref={ref}
            className="max-w-7xl mx-auto px-6 sm:px-10 py-16"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section - Replace src with your image path */}
                <div 
                    className="relative transition-all duration-1000 delay-200"
                    style={{
                        opacity: IsVisible ? '100%' : '0%',
                        transform: IsVisible ? 'translateX(0)' : 'translateX(-50px)'
                    }}
                >
                    <div className="relative aspect-4/5 bg-linear-to-br from-amber-100 to-amber-50 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder - Replace this div with your <img> tag */}
                        <img src={cook} alt="cook" />
                        
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-700/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/10 blur-3xl"></div>
                    </div>

                    {/* Floating badge */}
                    <div 
                        className="absolute -bottom-6 -right-6 bg-amber-700 text-white px-8 py-4 rounded-2xl shadow-xl transition-all duration-1000 delay-700"
                        style={{
                            opacity: IsVisible ? '100%' : '0%',
                            transform: IsVisible ? 'scale(1)' : 'scale(0.8)'
                        }}
                    >
                        <div className="text-3xl font-bold">20+</div>
                        <div className="text-xs uppercase tracking-wider">Years Experience</div>
                    </div>
                </div>

                {/* Content Section */}
                <div 
                    className="transition-all duration-1000 delay-400"
                    style={{
                        opacity: IsVisible ? '100%' : '0%',
                        transform: IsVisible ? 'translateX(0)' : 'translateX(50px)'
                    }}
                >
                    <div className="space-y-6">
                        {/* Small heading */}
                        <div className="text-amber-700 text-sm uppercase tracking-widest font-semibold">
                            Passion & Expertise
                        </div>

                        {/* Main heading */}
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            Crafting <span className="text-amber-700">Perfection</span> Daily
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, est? Cumque, esse in nemo velit non minima ratione alias consequuntur iure distinctio, quaerat quae optio explicabo, veniam molestiae quam labore.
                        </p>

                        {/* Stats or features */}
                        <div className="grid grid-cols-2 gap-6 pt-8">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-amber-700">500+</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">Recipes Mastered</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-amber-700">100%</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">Fresh Daily</div>
                            </div>
                        </div>

                        {/* Decorative line */}
                        <div className="pt-6">
                            <div className="w-20 h-1 bg-amber-700 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About