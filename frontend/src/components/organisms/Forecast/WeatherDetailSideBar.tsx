import { css } from '@emotion/react';
import { theme } from '../../../theme/theme';
import DetailSideBarContentColumn from './DetailSideBarContentColumn';
import DetailSideBarHeader from '../../molecules/Forecast/DetailSideBarHeader';
import DetailSideBarSummary from '../../molecules/Forecast/DetailSideBarSummary';
import type { SideBarProps } from '../../../features/forecast/types/forecast.types';

interface PropsState {
    sidebarData: SideBarProps;
    onClose: () => void;
}

type Background = 'sunny' | 'cloudy' | 'snow' | 'rain';

const { colors } = theme;

export default function WeatherDetailSideBar({
    sidebarData,
    onClose,
}: PropsState) {
    const {
        apparentTemperature,
        temperatureDescription,
        precipitation,
        probabilityDescription,
        sky,
        skyDescription,
        windSpeed,
        windSpeedDescription,
        humidity,
        humidityDescription,
        hikingActivity,
        temperature,
        precipitationType,
        title,
    } = sidebarData.data;

    const weatherDetailContentData = {
        apparentTemperature,
        temperatureDescription,
        precipitation,
        probabilityDescription,
        sky,
        skyDescription,
        windSpeed,
        windSpeedDescription,
        humidity,
        humidityDescription,
        precipitationType,
    };

    return (
        <div css={wrapperStyles(sidebarData.backgroundType)}>
            <div css={topSectionStyles}>
                <DetailSideBarHeader
                    courseAltitude={sidebarData.courseAltitude}
                    onClose={onClose}
                    type={title!}
                />
                <DetailSideBarSummary
                    temperature={temperature}
                    hikingActivity={hikingActivity}
                />
            </div>
            <DetailSideBarContentColumn {...weatherDetailContentData} />
        </div>
    );
}

const wrapperStyles = (background: Background) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60rem;
    padding: 3rem;
    box-sizing: border-box;
    background-color: ${colors.accentWeather[background]};
    animation: slideIn 0.3s ease-out forwards;

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

const topSectionStyles = css`
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
