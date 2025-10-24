// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Ensure you have Framer Motion installed: npm install framer-motion
import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import GallerySection from '../components/GallerySection'; // Assuming this uses Framer Motion or custom transitions

// Framer Motion Variants for Staggered Section Entrance
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
    const features = [
        {
            title: "Cost Effective",
            description: "Operates at 40% of solar power costs, making wind energy affordable for everyone.",
            icon: "💰"
        },
        {
            title: "Compact Design",
            description: "Requires only 1/10th the space of solar panels, perfect for urban settings.",
            icon: "🏠"
        },
        {
            title: "High Efficiency",
            description: "Works at very low wind speeds with daily capacity of around 100 kWh.",
            icon: "⚡"
        },
        {
            title: "Hybrid Ready",
            description: "Can be combined with solar for increased power and better ROI.",
            icon: "🔋"
        }
    ];

    const applications = [
        "Homes",
        "Buildings",
        "Farms",
        "Industries",
        "Open Landscapes"
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title="Akseer Pankh Wind Turbine - Sustainable Home & Industrial Energy Solutions"
                description="Discover Akseer Pankh wind turbine by Akseer Technology. Cost-effective, compact wind energy solutions for homes, buildings, farms & industries. 100 kWh daily capacity."
            />

            {/* NEW ANIMATED HERO SECTION (Uses your custom CSS animations) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white py-24 md:py-36">
                {/* Background Animation Placeholders - Ensure your custom CSS is loaded! */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Gentle background glow/orb effects for visual interest */}
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-slow"></div>
                    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse-slow delay-1000"></div>
                </div>

                {/* Content with Staggered CSS Transitions */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up delay-100">
                        Akseer <span className="text-emerald-300 drop-shadow-xl">Pankh</span>
                    </h1>
                    <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in-up delay-300 text-emerald-100 max-w-4xl mx-auto">
                        Harness Nature's Power for Your Energy Needs
                    </p>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-200 animate-fade-in-up delay-500">
                        Revolutionary wind turbine technology delivering clean, sustainable energy
                        for homes and businesses at unprecedented efficiency.
                    </p>
                    <div className="space-x-4 space-y-4 sm:space-y-0 animate-fade-in-up delay-700 mt-10">
                        <motion.button
                            onClick={() => {
                                window.location.href = "mailto:info@akseertechnology.com";
                            }}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 inline-block"
                            aria-label="Contact us for wind energy solutions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Discover Solutions
                        </motion.button>
                        <Link
                            to="/about"
                            className="border-2 border-emerald-400/80 hover:border-white bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 inline-block"
                            aria-label="About Akseer Technology"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION (Enhanced with Framer Motion) */}
            <motion.section
                aria-labelledby="features-heading"
                className="py-20 bg-gradient-to-b from-slate-50 to-blue-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        id="features-heading"
                        className="text-4xl font-extrabold text-center mb-16 text-slate-800"
                        variants={itemVariants}
                    >
                        Why Choose Akseer Pankh Wind Turbine?
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={sectionVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.article
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 border-t-4 border-emerald-400/0 hover:border-emerald-500 group"
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="text-5xl mb-4 text-emerald-600 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Gallery Section - Assuming this component has its own internal Framer Motion animations */}
            <GallerySection />

            {/* APPLICATIONS SECTION (Enhanced with Framer Motion) */}
            <motion.section
                aria-labelledby="applications-heading"
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants}>
                            <video
                                src={`${import.meta.env.BASE_URL}images/home.mp4`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-emerald-200/50"
                                width={600}
                                height={400}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h2 id="applications-heading" className="text-4xl font-extrabold mb-6 text-gray-800 border-l-4 border-emerald-500 pl-4">
                                Perfect For Every Setting
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The Akseer Pankh wind turbine is compact, silent, and aesthetically pleasing, making it an ideal energy solution for diverse environments, from dense urban areas to remote open landscapes.
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                {applications.map((app, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center space-x-3 bg-emerald-50 p-3 rounded-lg shadow-sm font-medium text-emerald-800"
                                        variants={itemVariants} // Staggered list items
                                    >
                                        <span className="text-lg" aria-hidden="true">✅</span>
                                        <span>{app}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* STATS SECTION (Enhanced with Framer Motion) */}
            <motion.section
                aria-labelledby="stats-heading"
                className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        id="stats-heading"
                        className="text-4xl font-extrabold mb-12 text-emerald-100"
                        variants={itemVariants}
                    >
                        Global Wind Energy Growth
                    </motion.h2>
                    <motion.div
                        className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border-4 border-emerald-500/50 max-w-3xl mx-auto shadow-2xl"
                        variants={itemVariants}
                    >
                        <p className="text-xl mb-4 text-gray-200">
                            Over the past decade, cumulative wind power capacity worldwide has increased by an average of
                        </p>
                        <motion.div
                            className="text-7xl font-black text-teal-300 mb-6 drop-shadow-xl"
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
                            viewport={{ once: true }}
                        >
                            28%
                        </motion.div>
                        <p className="text-lg text-emerald-100 font-medium">
                            Join the rapid renewable energy revolution with Akseer Pankh technology today.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;