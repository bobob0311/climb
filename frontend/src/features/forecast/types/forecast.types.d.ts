export type HikingActivityStatus = '좋음' | '매우 좋음' | '나쁨' | '약간 나쁨';
export type Background = 'sunny' | 'cloudy' | 'snow' | 'rain';

export interface CardData {
    dateTime: string;
    hikingActivity: HikingActivityStatus;
    temperature: number;
    apparentTemperature: number;
    temperatureDescription: string;
    precipitation: string;
    probabilityDescription: string;
    precipitationType: string;
    sky: string;
    skyDescription: string;
    windSpeed: number;
    windSpeedDescription: string;
    humidity: number;
    humidityDescription: string;
    highestTemperature: number;
    lowestTemperature: number;
    title?: string;
}

export interface SideBarProps {
    backgroundType: Background;
    title: string;
    courseAltitude?: number;
    data: CardData;
}

export interface CourseForecast {
    startCard: CardData;
    arrivalCard: CardData;
    adjustedArrivalCard: CardData;
    descentCard: CardData;
    courseAltitude: number;
    recommendComment: string;
    adjustedRecommendComment: string;
}
