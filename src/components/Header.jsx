import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={{ backgroundColor: "#E6E6E6" }} className=" shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/images/logo.png"
                            alt="Akseer Technology"
                            className="h-16 w-auto"
                        />
                        <span className="text-xl font-bold text-primary"></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary font-medium transition duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition duration-300">
                            About Us
                        </Link>
                        <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition duration-300">
                            Services
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-gray-700"></div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <Link
                            to="/"
                            className="block py-2 text-gray-700 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block py-2 text-gray-700 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            className="block py-2 text-gray-700 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;