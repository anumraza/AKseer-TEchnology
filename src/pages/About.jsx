// src/pages/About.jsx
import React from 'react';
// Ensure you have Framer Motion installed: npm install framer-motion
import { motion } from 'framer-motion';

// Framer Motion Variants for Staggered Section Entrance
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
    const milestones = [
        {
            year: "14+ Years",
            title: "Research & Development",
            description: "Extensive research leading to innovative fiberglass composite blades"
        },
        {
            year: "Tested in UAE",
            title: "Quality Assurance",
            description: "Rigorously tested and manufactured in the UAE for optimal performance"
        },
        {
            year: "2024",
            title: "Akseer Pankh Launch",
            description: "Latest generation wind turbine with enhanced efficiency and reliability"
        }
    ];

    const advantages = [
        "Lightweight fiberglass composite blades",
        "Works at very low wind speeds",
        "Sand and dust does not reduce efficiency",
        "Long life with minimal maintenance",
        "Can be both on-grid and off-grid (battery)"
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
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <motion.h1
                            className="text-5xl md:text-6xl font-extrabold mb-4 border-l-4 border-teal-300 pl-4"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            About Akseer Technology
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Pioneering sustainable wind energy solutions with innovation and excellence since 2010.
                        </motion.p>
                    </div>
                </div>
            </motion.section>

            {/* Company Story (Our Journey) with Transitions */}
            <motion.section
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Our Journey</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Akseer Technology has been at the forefront of renewable energy innovation,
                                dedicating over 14 years to research and development of efficient wind energy solutions.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our flagship product, Akseer Pankh, represents the culmination of years
                                of expertise, designed to bring sustainable wind power to homes, businesses, and
                                communities across diverse environments.
                            </p>
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
                                <p className="text-emerald-800 font-semibold italic">
                                    "Wind power costs just 40% as much as solar power" - American Wind Energy Association
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <video
                                src={`${import.meta.env.BASE_URL}images/aboutUs.mp4`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-emerald-200/50"
                                width={600}
                                height={400}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Milestones (Timeline) with Transitions */}
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
                        variants={itemVariants}
                    >
                        Key Milestones
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={sectionVariants}
                    >
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-teal-500 hover:shadow-xl transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-4xl font-black text-teal-600 mb-4">{milestone.year}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{milestone.title}</h3>
                                <p className="text-gray-600">{milestone.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Technology Advantages with Transitions */}
            <motion.section
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            className="text-4xl font-extrabold text-center mb-16 text-gray-800"
                            variants={itemVariants}
                        >
                            Akseer Pankh Technology Advantages
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
                            variants={sectionVariants}
                        >
                            {advantages.map((advantage, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100"
                                    variants={itemVariants}
                                >
                                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                        <span className="text-white text-lg font-bold">✓</span>
                                    </div>
                                    <p className="text-gray-800 text-lg font-medium">{advantage}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Energy Efficiency Note */}
                        <motion.div
                            className="mt-16 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500 shadow-md"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Energy Efficiency Fact</h3>
                            <p className="text-gray-700 text-lg">
                                Energy in the wind increases with the cube of the wind speed ($P \propto v^3$). A 20 mph wind has
                                8 times as much energy as a 10 mph wind, making efficient low-speed operation crucial—a core feature of Akseer Pankh.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;