// src/hooks/useLazyLoad.js
import { useEffect, useRef, useState } from 'react';

// Hook for triggering content or image loading when element is in view
export const useLazyLoad = (options = { threshold: 0.1 }) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target); // Stop observing once visible to prevent re-renders
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
};