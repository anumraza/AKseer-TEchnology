// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-600 text-white py-24 md:py-36">
            {/* Animated Background Elements (Requires CSS from Step 1) */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Moving gradient orbs */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse-slow delay-1000"></div>

                {/* Wind line animation (for visual interest) */}
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

            {/* Content with Staggered Transitions */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up delay-100">
                    Akseer <span className="text-teal-300 drop-shadow-lg">Pankh</span>
                </h1>
                <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in-up delay-300 text-emerald-100 max-w-4xl mx-auto">
                    Cost-Effective, Compact, and High-Efficiency Wind Energy Solutions.
                </p>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500 text-emerald-100/90">
                    Revolutionary technology delivering clean, sustainable power with an impressive 100 kWh daily capacity.
                </p>

                {/* CTA Buttons with Transitions */}
                <div className="space-x-4 space-y-4 sm:space-y-0 animate-fade-in-up delay-700 mt-10">
                    <Link
                        to="/services"
                        className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 inline-block"
                        aria-label="Discover our cost-effective wind energy solutions"
                    >
                        View Specifications
                    </Link>
                    <Link
                        to="/about"
                        className="border-2 border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 inline-block"
                        aria-label="About Akseer Technology"
                    >
                        Our Mission
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;