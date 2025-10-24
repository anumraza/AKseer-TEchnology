// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About Us' },
        { path: '/services', name: 'Services' },
    ];

    const primaryColor = 'text-emerald-700';

    return (
        <header
            className=" shadow-lg sticky top-0 z-50 transition-shadow duration-300"
            style={{ backgroundColor: "#e5e5e6" }}
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo1.png`}
                            alt="Akseer Technology Logo"
                            className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                            width={120}
                            height={48}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-semibold transition duration-300 relative group py-2 
                                    ${location.pathname === item.path ? primaryColor : 'text-gray-700 hover:text-emerald-500'}`}
                            >
                                {item.name}
                                {/* Active link underline indicator */}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-700 transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <div
                            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                }`}
                        ></div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation (Framer Motion) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-xl absolute w-full z-40 overflow-hidden border-t border-gray-100"
                    >
                        <nav className="container mx-auto px-4 py-2">
                            <div className="flex flex-col space-y-1 pb-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-gray-800 border-l-4 
                                            ${location.pathname === item.path
                                                ? 'bg-emerald-50 border-emerald-600 text-emerald-700'
                                                : 'hover:bg-gray-50 border-transparent hover:border-emerald-400'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Simple backdrop overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 bg-black/20 z-30"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;