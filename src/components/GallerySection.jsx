// src/components/GallerySection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Image Paths ---
// NOTE: Please replace these with the actual paths to your 4 images.
const images = [
    { id: 1, src: `${import.meta.env.BASE_URL}images/1.jpg`, alt: 'Akseer Pankh installed on a rooftop', title: 'Rooftop Installation' },
    { id: 2, src: `${import.meta.env.BASE_URL}images/3.jpg`, alt: 'Akseer Pankh in an industrial setting', title: 'Industrial Application' },
    { id: 3, src: `${import.meta.env.BASE_URL}images/2.jpg`, alt: 'Close-up of the Akseer Pankh blades', title: 'High-Efficiency Blades' },
    { id: 4, src: `${import.meta.env.BASE_URL}images/4.jpg`, alt: 'Akseer Pankh in a wide open field', title: 'Remote Area Power' },
];

// Framer Motion variant for staggered entrance
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
};


const GallerySection = () => {
    return (
        <section className="py-20 md:py-28 bg-white" id="gallery">
            <div className="container mx-auto px-4">

                {/* Section Header with Fade-In Transition */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-3">
                        Innovation in Action
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See the Akseer Pankh operating in diverse environments, delivering reliable and clean energy.
                    </p>
                </motion.header>

                {/* Image Gallery Grid with Staggered Transition */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                loading="lazy"
                            />
                            {/* Overlay Title */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h4 className="text-white text-lg font-semibold border-b-2 border-teal-400">
                                    {image.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;