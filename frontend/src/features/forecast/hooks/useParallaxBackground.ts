import { useEffect, useRef } from 'react';

interface UseParallaxBackgroundOptions {
    limitRatio?: number;
    middleSpeed?: number;
    frontSpeed?: number;
}

export default function useParallaxBackground({
    limitRatio = 0.4,
    middleSpeed = 0.4,
    frontSpeed = 0.8,
}: UseParallaxBackgroundOptions = {}) {
    const middleLayerRef = useRef<HTMLDivElement>(null);
    const frontLayerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const updateLayerPosition = () => {
            const scrollY = window.scrollY;
            const pageHeight = window.innerHeight;
            const limit = pageHeight * limitRatio;
            const effectiveScroll = Math.min(scrollY, limit);

            if (middleLayerRef.current) {
                middleLayerRef.current.style.transform = `translate3d(0, ${-(effectiveScroll * middleSpeed)}px, 0)`;
            }

            if (frontLayerRef.current) {
                frontLayerRef.current.style.transform = `translate3d(0, ${-(effectiveScroll * frontSpeed)}px, 0)`;
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;
            window.requestAnimationFrame(updateLayerPosition);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [frontSpeed, limitRatio, middleSpeed]);

    return {
        middleLayerRef,
        frontLayerRef,
    };
}
