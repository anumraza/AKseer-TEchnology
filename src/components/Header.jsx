import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            style={{ backgroundColor: '#E6E6E6' }}
            className="shadow-md sticky top-0 z-50"
        >
            {/* Reduced padding on mobile */}
            <div className="container mx-auto px-4 py-2 md:py-3">
                <div className="flex justify-between items-center">
                    {/* Logo - Smaller on mobile */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo1.png`}
                            alt="Akseer Technology"
                            className="h-10 md:h-12 w-auto" // Smaller logo on mobile
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-primary font-medium transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-primary font-medium transition duration-300"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            className="text-gray-700 hover:text-primary font-medium transition duration-300"
                        >
                            Services
                        </Link>
                    </nav>

                    {/* Mobile Menu Button - Smaller */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8" // Smaller button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div
                            className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                }`}
                        ></div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white shadow-lg border-t border-gray-200 z-50 relative"
                    >
                        <nav className="container mx-auto px-4 py-2"> {/* Reduced padding */}
                            <div className="flex flex-col space-y-3"> {/* Reduced spacing */}
                                <Link
                                    to="/"
                                    className="text-gray-800 hover:text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-gray-800 hover:text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/services"
                                    className="text-gray-800 hover:text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Services
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 bg-black/20 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;