import React from 'react';

const Services = () => {
    const serviceCategories = [
        {
            title: "Residential Solutions",
            applications: ["Homes", "Buildings", "Backyards"],
            description: "Perfect for home energy with easy rooftop installation.",
            features: ["Reduce electricity bills", "On-grid & off-grid options", "Easy installation"]
        },
        {
            title: "Commercial & Industrial",
            applications: ["Commercial Installations", "Industries", "Office Buildings"],
            description: "Scalable solutions for businesses and industrial applications",
            features: ["High capacity", "Cost-effective", "Sustainable branding"]
        },
        {
            title: "Agricultural & Rural",
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
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Comprehensive wind energy solutions tailored to your specific needs and environment.
                    </p>
                </div>
            </section>

            {/* Service Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Service Categories
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {serviceCategories.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                <div className="bg-emerald-700 text-white p-6">
                                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-blue-100">{service.description}</p>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.applications.map((app, appIndex) => (
                                            <span key={appIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-2">
                                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hybrid Solutions */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">Hybrid Solutions</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Maximize your energy generation with our hybrid solutions that combine
                                wind and solar power for optimal performance and reliability.
                            </p>

                            <div className="space-y-6">
                                {hybridBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl">{(index + 1)}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src={`${import.meta.env.BASE_URL}images/services-hybrid1.jpg`}
                                alt="Hybrid Wind and Solar Solution"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Technical Specifications
                    </h2>
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="bg-primary text-white p-8">
                                <h3 className="text-2xl font-bold mb-6">Akseer Pankh Features</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center space-x-3">
                                        <span className="text-accent text-xl">⚡</span>
                                        <span>Daily Capacity: 100 kWh</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-accent text-xl">🌬️</span>
                                        <span>Works at very low wind speed</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-accent text-xl">🏗️</span>
                                        <span>Compact design - 1/10th of solar space</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-accent text-xl">🔌</span>
                                        <span>On-grid and off-grid capable</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Performance</h3>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex justify-between border-b pb-2">
                                        <span>Cut-in Speed:</span>
                                        <span className="font-semibold">Very Low</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span>Efficiency in Dust:</span>
                                        <span className="font-semibold">Unaffected</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span>Mounting:</span>
                                        <span className="font-semibold">Rooftop & Ground</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span>Cost Effectiveness:</span>
                                        <span className="font-semibold">40% of Solar Cost</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Harness Wind Energy?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join the renewable energy revolution with Akseer Pankh and start saving on your energy costs today.
                    </p>
                    <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition duration-300 text-lg">
                        Contact Us for Installation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;