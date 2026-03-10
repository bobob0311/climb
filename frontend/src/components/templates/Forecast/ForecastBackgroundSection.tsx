import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import useParallaxBackground from '../../../features/forecast/hooks/useParallaxBackground';

export default function ForecastBackgroundSection() {
    const [searchParams] = useSearchParams();
    const courseId = Number(searchParams.get('courseid'));
    const backgroundImageIndex = (courseId % 3) + 1;

    const { middleLayerRef, frontLayerRef } = useParallaxBackground({
        limitRatio: 0.4,
        middleSpeed: 0.4,
        frontSpeed: 0.8,
    });

    return (
        <div>
            <div css={topLayerStyles(backgroundImageIndex)} />
            <div
                ref={middleLayerRef}
                css={middleLayerStyles(backgroundImageIndex)}
            />
            <div
                ref={frontLayerRef}
                css={bottomLayerStyles(backgroundImageIndex)}
            />
            <div css={overlayGradient} />
        </div>
    );
}

const topLayerStyles = (index: number) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: url('/images/mountain${index}_layer3.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -40;
    will-change: transform;
`;

const middleLayerStyles = (index: number) => css`
    position: absolute;
    top: 5%;
    left: 0;
    right: 0;
    height: 110%;
    background-image: url('/images/mountain${index}_layer2.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -30;
    will-change: transform;
`;

const bottomLayerStyles = (index: number) => css`
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    height: 120%;
    background-image: url('/images/mountain${index}_layer1.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -20;
    will-change: transform;
`;

const overlayGradient = css`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.8) 80%,
        rgba(0, 0, 0, 1) 100%
    );
    z-index: -11;
    pointer-events: none;
`;
