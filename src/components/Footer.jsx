// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" text-gray-700 py-12 border-t-4 border-emerald-500" style={{ backgroundColor: "#e5e5e6" }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">

                    {/* 1. Company Info & Logo */}
                    <div>
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            <img
                                src={`${import.meta.env.BASE_URL}images/logoFooter.png`}
                                alt="Akseer Technology Logo"
                                className="h-20 w-auto"
                                loading="lazy"
                                width={100}
                                height={80}
                            />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pioneering sustainable wind energy solutions with Akseer Pankh – cost-effective and highly efficient power generation since 2010.
                        </p>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-teal-500 pb-1 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-emerald-700 transition duration-300 font-medium hover:pl-1 block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-emerald-700 transition duration-300 font-medium hover:pl-1 block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-600 hover:text-emerald-700 transition duration-300 font-medium hover:pl-1 block">
                                    Services & Specs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Contact Info - Addresses (Fixed Alignment) */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-teal-500 pb-1 inline-block">Locations</h3>
                        <div className="text-gray-600 space-y-4">
                            <p className="flex flex-col items-center md:items-start text-sm">
                                <strong className="text-gray-800 flex items-center mb-1">
                                    <span className="text-emerald-600 mr-2">📍</span>Head Office:
                                </strong>
                                46/1 Lane 23, Khayaban-E-Badban, Phase VII, DHA, Karachi
                            </p>
                            <p className="flex flex-col items-center md:items-start text-sm">
                                <strong className="text-gray-800 flex items-center mb-1">
                                    <span className="text-emerald-600 mr-2">🏭</span>Factory:
                                </strong>
                                Plot No. 55, Sector 27, Industrial Area, Korangi, Karachi
                            </p>
                        </div>
                    </div>

                    {/* 4. Phone and Email */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-teal-500 pb-1 inline-block">Get in Touch</h3>
                        <div className="text-gray-600 space-y-3 text-sm">
                            <strong className="block text-gray-700 mt-2">Sales Hotline:</strong>
                            <a href="tel:03332134393" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition">
                                📱 0333-2134393
                            </a>
                            <strong className="block text-gray-700 pt-2">Landline:</strong>
                            <a href="tel:02135060170" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition">
                                📞 021-35060170
                            </a>
                            <strong className="block text-gray-700 pt-2">Email:</strong>
                            <a href="mailto:info@akseertechnology.com" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition truncate">
                                ✉️ info@akseertechnology.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-xs">
                    <p>
                        &copy; {new Date().getFullYear()} Akseer Technology. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;