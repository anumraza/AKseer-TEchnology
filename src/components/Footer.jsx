import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#E6E6E6" }} className="text-gray-700 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="/images/logoFooter.jpg"
                                alt="Akseer Technology"
                                className="h-24 w-auto"
                            />

                        </div>
                        <p className="text-gray-800 mb-4">
                            Providing sustainable wind energy solutions with Pankh v2 - the future of clean energy.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-800 hover:text-white transition duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-800 hover:text-white transition duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-800 hover:text-white transition duration-300">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="text-gray-800 space-y-2">
                            <p>Made in UAE</p>
                            <p>14+ Years of R&D</p>
                        </div>
                        <h3 className="text-lg font-semibold my-4">Email</h3>
                        <div className="text-gray-800 space-y-2">
                            <p>info@akseertechnology.com</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-800">
                    <p>&copy; 2025 Akseer Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;