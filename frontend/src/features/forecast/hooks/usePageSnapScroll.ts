import { useEffect, useRef } from 'react';

interface UsePageSnapScrollOptions {
    maxPage: number;
    downDurationMs?: number;
    upDurationMs?: number;
    enabled?: boolean;
}

function smoothScrollTo(targetY: number, duration: number, done?: () => void) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, startY + diff * easedProgress);

        if (progress < 1) {
            requestAnimationFrame(step);
            return;
        }

        done?.();
    };

    requestAnimationFrame(step);
}

export default function usePageSnapScroll({
    maxPage,
    downDurationMs = 700,
    upDurationMs = 1200,
    enabled = true,
}: UsePageSnapScrollOptions) {
    const isScrollingRef = useRef(false);

    useEffect(() => {
        if (!enabled) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (isScrollingRef.current) return;
            if (Math.abs(e.deltaY) < 10) return;

            const pageHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const currentPage = Math.round(scrollY / pageHeight);
            const direction = e.deltaY > 0 ? 1 : -1;

            const targetPage = Math.max(
                0,
                Math.min(maxPage, currentPage + direction),
            );

            if (targetPage === currentPage) return;

            const targetTop = targetPage * pageHeight;
            const duration = direction > 0 ? downDurationMs : upDurationMs;

            isScrollingRef.current = true;

            smoothScrollTo(targetTop, duration, () => {
                isScrollingRef.current = false;
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [enabled, maxPage, downDurationMs, upDurationMs]);
}
