import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // More aggressive scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // or "smooth" if you prefer
        });

        // Alternative methods
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        console.log("ScrollToTop triggered for:", pathname); // Debug log
    }, [pathname]);

    return null;
}