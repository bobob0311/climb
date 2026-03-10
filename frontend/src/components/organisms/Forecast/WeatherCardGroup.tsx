import { css } from '@emotion/react';
import { WeatherIndexLight } from '../../atoms/Text/WeatherIndex';
import WeatherCard from './WeatherCard';
import svg from '../../../assets/line.svg';
import type {
    SideBarProps,
    CardData,
} from '../../../features/forecast/types/forecast.types';

interface PropsState {
    cards: {
        startCard: CardData;
        arrivalCard: CardData;
        descentCard: CardData;
        adjustedArrivalCard: CardData;
    };
    isAdjustMode: boolean;
    courseAltitude: number;
    onSidebar: (data: SideBarProps) => void;
}

function getWeatherCards(
    cards: PropsState['cards'],
    isAdjustMode: boolean,
    courseAltitude: number,
) {
    const selectedArrivalCard = isAdjustMode
        ? cards.adjustedArrivalCard
        : cards.arrivalCard;

    return [
        { ...cards.startCard, title: '시작지점', altitude: undefined },
        { ...selectedArrivalCard, title: '최고점', altitude: courseAltitude },
        { ...cards.descentCard, title: '끝지점', altitude: undefined },
    ];
}

export default function WeatherCardGroup({
    courseAltitude,
    onSidebar,
    isAdjustMode,
    cards,
}: PropsState) {
    const weatherCardList = getWeatherCards(
        cards,
        isAdjustMode,
        courseAltitude,
    );

    return (
        <div css={weatherSummaryWrapperStyles}>
            <div css={weatherCardWrapperStyles}>
                {weatherCardList.map((card, index) => {
                    const {
                        sky,
                        windSpeed,
                        skyDescription,
                        temperature,
                        precipitationType,
                        altitude,
                        title,
                    } = card;
                    return (
                        <WeatherCard
                            key={title}
                            title={title}
                            weatherIconName={sky}
                            courseAltitude={altitude}
                            weatherIconText={skyDescription}
                            windSpeed={windSpeed}
                            temperature={temperature}
                            precipitationType={precipitationType}
                            onClick={(backgroundType, title, courseAltitude) =>
                                onSidebar({
                                    backgroundType,
                                    title,
                                    courseAltitude,
                                    data: card,
                                })
                            }
                        />
                    );
                })}
            </div>
            <img css={lineImageStyles} src={svg} />
            <WeatherIndexLight type={weatherCardList[0].hikingActivity} />
        </div>
    );
}

const weatherCardWrapperStyles = css`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    & > :nth-of-type(1) {
        transform: translateY(4rem);
        cursor: pointer;

        &:hover {
            transform: translateY(4rem) scale(1.15);
        }
    }

    & > :nth-of-type(2) {
        transform: translateY(-3rem);
        cursor: pointer;

        &:hover {
            transform: translateY(-3rem) scale(1.15);
        }
    }

    & > :nth-of-type(3) {
        transform: translateY(4rem);
        cursor: pointer;

        &:hover {
            transform: translateY(4rem) scale(1.15);
        }
    }
`;

const weatherSummaryWrapperStyles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const lineImageStyles = css`
    position: absolute;
    top: 36%;
    z-index: -1;
    width: 60%;
    height: 32%;
`;
