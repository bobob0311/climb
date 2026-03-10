import DetailInfoSection from '../../components/templates/Forecast/DetailInfoSection.tsx';
import ForecastBackgroundSection from '../../components/templates/Forecast/ForecastBackgroundSection.tsx';
import ForecastSearchSection from '../../components/templates/Forecast/ForecastSearchSection.tsx';
import SummaryInfoSection from '../../components/templates/Forecast/SummaryInfoSection.tsx';
import { css } from '@emotion/react';
import { theme } from '../../theme/theme.ts';
import usePageSnapScroll from '../../features/forecast/hooks/usePageSnapScroll.ts';

export default function ForecastPage() {
    usePageSnapScroll({ maxPage: 1, upDurationMs: 200, downDurationMs: 1400 });
    return (
        <div>
            <ForecastBackgroundSection />
            <ForecastSearchSection />
            <SummaryInfoSection />
            <div css={wrapperStyles}>
                <div css={wholeWrapper}>
                    <DetailInfoSection />
                </div>
            </div>
        </div>
    );
}

const { colors } = theme;

const wrapperStyles = css`
    position: relative;
    z-index: 100;
    background-color: ${colors.grey[0]};
    width: 100%;
    padding-top: 5rem;
    box-sizing: border-box;
    height: 100dvh;
    display: flex;
    flex-direction: column;
`;

const wholeWrapper = css`
    height: 100%;
    display: flex;
    position: relative;
`;
