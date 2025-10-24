// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Note: Ensure you have Framer Motion installed: npm install framer-motion

// --- Framer Motion Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2, // Stagger children animations
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Services = () => {
    const serviceCategories = [
        {
            title: "Residential Solutions",
            icon: "🏡",
            applications: ["Homes", "Buildings", "Backyards"],
            description: "Perfect for home energy with easy rooftop installation.",
            features: ["Reduce electricity bills", "On-grid & off-grid options", "Easy installation"]
        },
        {
            title: "Commercial & Industrial",
            icon: "🏭",
            applications: ["Commercial Installations", "Industries", "Office Buildings"],
            description: "Scalable solutions for businesses and industrial applications",
            features: ["High capacity", "Cost-effective", "Sustainable branding"]
        },
        {
            title: "Agricultural & Rural",
            icon: "🌾",
            applications: ["Farms", "Open Landscapes", "Rural Areas"],
            description: "Reliable power for agricultural and remote locations",
            features: ["Low maintenance", "Works in diverse conditions", "Hybrid ready"]
        }
    ];

    const hybridBenefits = [
        {
            title: "Increased Power Output",
            description: "Combine wind and solar for maximum energy generation throughout the day and night"
        },
        {
            title: "Improved ROI",
            description: "Hybrid systems provide better return on investment with consistent power generation"
        },
        {
            title: "Reliable Operation",
            description: "Continuous power supply regardless of weather conditions"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Animation */}
            <motion.section
                className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white py-24 md:py-36"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Our Renewable Energy Solutions
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Comprehensive wind energy solutions tailored to your specific needs and environment, powered by Akseer Pankh.
                    </motion.p>
                </div>
            </motion.section>

            {/* Service Categories with Animation */}
            <motion.section
                className="py-20 bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-extrabold text-center mb-16 text-gray-800"
                        variants={cardVariants}
                    >
                        Solutions for Every Sector
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                        variants={sectionVariants}
                    >
                        {serviceCategories.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-500 hover:shadow-2xl transition duration-300"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                            >
                                {/* Header with Icon */}
                                <div className="p-8 pb-4">
                                    <span className="text-5xl mb-4 block">{service.icon}</span>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                                    <p className="text-gray-500">{service.description}</p>
                                </div>

                                <div className="p-8 pt-4">
                                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Applications:</h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.applications.map((app, appIndex) => (
                                            <span
                                                key={appIndex}
                                                className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Core Features:</h4>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Hybrid Solutions (Wind + Solar) with Animation */}
            <motion.section
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={cardVariants}>
                            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Hybrid Solutions: Wind Meets Solar ☀️</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Maximize your energy generation and guarantee year-round power with our Hybrid Systems. By combining
                                the constant power of wind (day and night) with the peak power of solar (daytime), we achieve
                                optimal performance and energy independence.
                            </p>

                            <div className="space-y-6">
                                {hybridBenefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                                        variants={cardVariants}
                                    >
                                        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            {/* Using an icon instead of a number for better visual appeal */}
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1 text-gray-800">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            {/* Placeholder for the image/diagram */}
                            <div className="relative pt-[75%] bg-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/services-hybrid1.jpg`}
                                    alt="Hybrid Wind and Solar Solution Diagram"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Technical Specifications - Refined Table Style with Animation */}
            <motion.section
                className="py-20 bg-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
                        variants={cardVariants}
                    >
                        Akseer Pankh Technical Overview
                    </motion.h2>
                    <motion.div
                        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
                        variants={cardVariants}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                            {/* Key Features Column */}
                            <div className="bg-emerald-800 text-white p-8">
                                <h3 className="text-2xl font-bold mb-6 border-b border-emerald-600 pb-3">Key Features</h3>
                                <ul className="space-y-5">
                                    <li className="flex justify-between items-center">
                                        <span className="flex items-center space-x-3 text-lg font-medium">
                                            <span className="text-teal-300 text-2xl">⚡</span>
                                            <span>Daily Capacity</span>
                                        </span>
                                        <span className="font-extrabold bg-emerald-600 px-3 py-1 rounded">100 kWh</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="flex items-center space-x-3 text-lg font-medium">
                                            <span className="text-teal-300 text-2xl">🌬️</span>
                                            <span>Low Wind Operation</span>
                                        </span>
                                        <span className="font-extrabold text-teal-300">Enabled</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="flex items-center space-x-3 text-lg font-medium">
                                            <span className="text-teal-300 text-2xl">🏗️</span>
                                            <span>Space Requirement</span>
                                        </span>
                                        <span className="font-extrabold bg-emerald-600 px-3 py-1 rounded">1/10th Solar</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="flex items-center space-x-3 text-lg font-medium">
                                            <span className="text-teal-300 text-2xl">🔌</span>
                                            <span>Grid Compatibility</span>
                                        </span>
                                        <span className="font-extrabold text-teal-300">On/Off-Grid</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Performance Column */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Performance Data</h3>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex justify-between border-b border-dashed pb-3">
                                        <span className='font-medium'>Cut-in Speed:</span>
                                        <span className="font-bold text-teal-600">Ultra-Low</span>
                                    </li>
                                    <li className="flex justify-between border-b border-dashed pb-3">
                                        <span className='font-medium'>Dust/Sand Impact:</span>
                                        <span className="font-bold text-teal-600">None (Unaffected)</span>
                                    </li>
                                    <li className="flex justify-between border-b border-dashed pb-3">
                                        <span className='font-medium'>Mounting Flexibility:</span>
                                        <span className="font-bold text-teal-600">Rooftop & Ground</span>
                                    </li>
                                    <li className="flex justify-between pb-2">
                                        <span className='font-medium'>Cost Effectiveness:</span>
                                        <span className="font-bold text-teal-600">~40% of Solar</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section - Refined button style */}
            <motion.section
                className="py-20 bg-gradient-to-r from-teal-600 to-emerald-700 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Ready to Start Your Wind Project?</h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto text-teal-100">
                        Get a customized consultation to see how Akseer Pankh can revolutionize your energy usage and savings.
                    </p>
                    <a
                        href="mailto:info@akseertechnology.com"
                        className="inline-block bg-white text-emerald-800 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-teal-200 hover:text-emerald-900 transition duration-300 text-lg uppercase tracking-wider transform hover:scale-105"
                    >
                        Contact Us for a Free Estimate 🚀
                    </a>
                </div>
            </motion.section>
        </div>
    );
};

export default Services;