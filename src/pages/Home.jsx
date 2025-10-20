import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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
        <div>
            <SEO
                title="Akseer Pankh Wind Turbine - Sustainable Home & Industrial Energy Solutions"
                description="Discover Akseer Pankh wind turbine by Akseer Technology. Cost-effective, compact wind energy solutions for homes, buildings, farms & industries. 100 kWh daily capacity."
            />

            {/* NEW ANIMATED HERO SECTION */}
            {/* UPDATED HERO SECTION WITH BETTER COLORS */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white py-20">
                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                        Akseer <span className="text-emerald-300 drop-shadow-lg">Pankh</span>
                    </h1>
                    <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in-up delay-200 text-emerald-100">
                        Harness Nature's Power for Your Energy Needs
                    </p>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200 animate-fade-in-up delay-300">
                        Revolutionary wind turbine technology delivering clean, sustainable energy
                        for homes and businesses at unprecedented efficiency.
                    </p>
                    <div className="space-x-4 space-y-4 sm:space-y-0 animate-fade-in-up delay-500">
                        <Link
                            to="/services"
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 inline-block"
                            aria-label="Learn more about our wind turbine services"
                        >
                            Discover Solutions
                        </Link>
                        <Link
                            to="/about"
                            className="border-2 border-emerald-400/80 hover:border-emerald-300 bg-transparent hover:bg-emerald-400/10 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 inline-block"
                            aria-label="About Akseer Technology"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section with Better Colors */}
            <section aria-labelledby="features-heading" className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <h2 id="features-heading" className="text-4xl font-bold text-center mb-12 text-slate-800">
                        Why Choose Akseer Pankh Wind Turbine?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <article key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section aria-labelledby="applications-heading" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <video
                                src={`${import.meta.env.BASE_URL}images/home.mp4`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-lg shadow-lg w-full h-auto"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div>
                            <h2 id="applications-heading" className="text-4xl font-bold mb-6 text-gray-800">
                                Perfect For Every Setting
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Akseer Pankh wind turbine is designed to meet diverse energy needs across various environments:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {applications.map((app, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true"></span>
                                        <span className="text-gray-700">{app}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-green-50 rounded-lg">
                                <p className="text-green-800 font-semibold">
                                    Designed for both rural and urban use with low cut-in speed for continuous operation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Better Colors */}
            <section aria-labelledby="stats-heading" className="py-16 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="stats-heading" className="text-4xl font-bold mb-12 text-emerald-100">Global Wind Energy Growth</h2>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 max-w-2xl mx-auto">
                        <p className="text-xl mb-4 text-gray-200">
                            Over the past 10 years, cumulative wind power capacity worldwide has increased by an average of
                        </p>
                        <div className="text-6xl font-bold text-emerald-300 mb-4 drop-shadow-lg">28%</div>
                        <p className="text-lg text-emerald-100">
                            Join the renewable energy revolution with Akseer Pankh wind turbine technology
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;