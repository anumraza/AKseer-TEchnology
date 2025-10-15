import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Akseer Technology - Pankh v2 Wind Turbine | Sustainable Energy Solutions",
    description = "Advanced wind turbine for homes, buildings, farms & industries. Sustainable energy solutions with 100 kWh daily capacity.",
    canonical,
    ogImage = "/images/og-image.jpg"
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="wind turbine, renewable energy, sustainable energy, Pankh v2, Akseer Technology" />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Canonical */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Pankh v2 Wind Turbine",
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
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;