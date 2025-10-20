import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#E6E6E6" }} className="text-gray-700 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Company Info */}
                    <div>
                        <div className="flex justify-center md:justify-start items-center space-x-2 mb-4">
                            <img
                                src={`${import.meta.env.BASE_URL}images/logoFooter.png`}
                                alt="Akseer Technology"
                                className="h-24 w-auto"
                            />
                        </div>
                        <p className="text-gray-800 mb-4">
                            Providing sustainable wind energy solutions with Akseer Pankh  - the future of clean energy.
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
                        <div className="text-gray-800 space-y-3">
                            <p>
                                <strong>Head Office:</strong><br />
                                46/1 Lane 23, Khayaban-E-Badban, Phase VII, DHA, Karachi
                            </p>
                            <p>
                                <strong>Factory:</strong><br />
                                Plot No. 55, Sector 27, Industrial Area, Korangi, Karachi
                            </p>
                            <p className="flex flex-col items-center">
                                <a href="tel:02135060170" className="flex items-center hover:text-blue-600">
                                    📞 021-35060170
                                </a>
                                <a href="tel:02135060171" className="flex items-center hover:text-blue-600">
                                    📞 021-35060171
                                </a>
                                <a href="tel:03332134393" className="flex items-center hover:text-blue-600">
                                    📞 0333-2134393
                                </a>
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold my-4">Email</h3>
                        <div className="text-gray-800 space-y-2">
                            <a href="mailto:info@akseertechnology.com" className="hover:text-blue-600">
                                ✉️ info@akseertechnology.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-800">
                    <p>
                        &copy; {new Date().getFullYear()} Akseer Technology. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
