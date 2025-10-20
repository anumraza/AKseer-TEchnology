import React from 'react';

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
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">About Akseer Technology</h1>
                        <p className="text-xl text-gray-300">
                            Pioneering sustainable wind energy solutions with innovation and excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Journey</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Akseer Technology has been at the forefront of renewable energy innovation,
                                dedicating over 14 years to research and development of efficient wind energy solutions.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Our flagship product, <strong>Akseer Pankh</strong>, represents the culmination of years
                                of expertise, designed to bring sustainable wind power to homes, businesses, and
                                communities across diverse environments.
                            </p>
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                                <p className="text-green-800 font-semibold">
                                    "Wind power costs just 40% as much as solar power" - American Wind Energy Association
                                </p>
                            </div>
                        </div>
                        <div>
                            <video
                                src={`${import.meta.env.BASE_URL}images/aboutUs.mp4`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-lg shadow-lg w-full h-auto"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Milestones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-3xl font-bold text-primary mb-3">{milestone.year}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{milestone.title}</h3>
                                <p className="text-gray-600">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Advantages */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Akseer Pankh Technology Advantages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <p className="text-gray-700 text-lg">{advantage}</p>
                                </div>
                            ))}
                        </div>

                        {/* Energy Efficiency Note */}
                        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Energy Efficiency Fact</h3>
                            <p className="text-gray-700 text-lg">
                                Energy in the wind increases with the cube of the wind speed. A 20 mph wind has
                                8 times as much energy as a 10 mph wind, making efficient low-speed operation crucial.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;