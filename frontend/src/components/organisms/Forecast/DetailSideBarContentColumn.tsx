import { css } from '@emotion/react';
import { theme } from '../../../theme/theme';
import DetailSideBarContent from '../../molecules/Forecast/DetailSideBarContent';
import {
    convertToIconName,
    convertToWeatherByIconName,
    convertWeatherToKorean,
} from '../../../utils/utils';
import type { WeatherDetailContentData } from '../../../features/forecast/types/forecast.types';

export default function DetailSideBarContentColumn({
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
}: WeatherDetailContentData) {
    const weatherStatus = convertToWeatherByIconName(
        convertToIconName({ precipitationType, sky }),
    );

    const koreanWeather = convertWeatherToKorean(weatherStatus);

    const weatherDetailItems = [
        {
            iconName: 'temperature',
            title: '체감온도',
            value: `${apparentTemperature}°C`,
            description: temperatureDescription,
        },
        {
            iconName: 'rain',
            title: '강수 확률',
            value: precipitation,
            description: probabilityDescription,
        },
        {
            iconName: 'cloudy',
            title: '구름',
            value: koreanWeather,
            description: skyDescription,
        },
        {
            iconName: 'wind',
            title: '풍속/ 풍향',
            value: `${windSpeed}m/s`,
            description: windSpeedDescription,
        },
        {
            iconName: 'humidity',
            title: '습도',
            value: `${humidity}%`,
            description: humidityDescription,
        },
    ];

    return (
        <div css={wrapperStyles}>
            {weatherDetailItems.map((item) => (
                <DetailSideBarContent key={item.title} {...item} />
            ))}
        </div>
    );
}

const { colors } = theme;

const wrapperStyles = css`
    display: flex;
    flex-direction: column;
    height: 80%;
    padding-top: 1.25rem;
    box-sizing: border-box;
    border-top: 0.5px solid ${colors.grey[40]};
    gap: 8%;

    & > * {
        flex: 1;
    }
`;
