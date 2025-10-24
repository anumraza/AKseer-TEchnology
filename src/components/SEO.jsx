// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Akseer Technology - Akseer Pankh Wind Turbine | Sustainable Energy Solutions",
    description = "Advanced wind turbine for homes, buildings, farms & industries. Sustainable energy solutions with 100 kWh daily capacity. Cost-effective and compact wind power.",
    keywords = "wind turbine, renewable energy, sustainable energy, Akseer Pankh, Akseer Technology, compact wind generator", // Added default keywords
    canonical,
    ogImage = `${import.meta.env.BASE_URL}images/og-image.jpg` // Ensures BASE_URL is respected
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} /> {/* Added Twitter image */}

            {/* Canonical */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Structured Data (Schema.org) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Akseer Pankh Wind Turbine",
                    "description": description,
                    "brand": {
                        "@type": "Brand",
                        "name": "Akseer Technology"
                    },
                    "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "USD",
                        "category": "Wind Turbine"
                    },
                    "image": ogImage // Added product image for Schema
                })}
            </script>
        </Helmet>
    );
};

export default SEO;