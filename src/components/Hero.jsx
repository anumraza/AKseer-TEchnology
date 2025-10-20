import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 text-white py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Moving gradient orbs */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce-slow"></div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${10 + Math.random() * 10}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Wind line animation */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-wind-line"
                            style={{
                                top: `${20 + i * 10}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${8 + i * 2}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                    Akseer <span className="text-green-300 drop-shadow-lg">Pankh</span>
                </h1>
                <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in-up delay-200">
                    Harness Nature's Power for Your Energy Needs
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
                    Revolutionary wind turbine technology delivering clean, sustainable energy
                    for homes and businesses at unprecedented efficiency.
                </p>
                <div className="space-x-4 space-y-4 sm:space-y-0 animate-fade-in-up delay-500">
                    <Link
                        to="/services"
                        className="bg-green-400 hover:bg-green-300 text-green-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1 inline-block"
                        aria-label="Learn more about our wind turbine services"
                    >
                        Discover Solutions
                    </Link>
                    <Link
                        to="/about"
                        className="border-2 border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 inline-block"
                        aria-label="About Akseer Technology"
                    >
                        Our Story
                    </Link>
                </div>
            </div>

            {/* Wind turbine icon animation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="text-white text-4xl">🌬️</div>
            </div>
        </section>
    );
};

export default HeroSection;