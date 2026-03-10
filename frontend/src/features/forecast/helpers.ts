import type { CourseForecast } from './types/forecast.types';

export function formatForecastStartTimeFromNow(input: string) {
    const date = new Date(input);
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
    );

    const diffDays = Math.round(
        (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    let prefix = '';
    if (diffDays === 1) prefix = '내일 ';
    else if (diffDays === 2) prefix = '모레 ';

    const hours = date.getHours();
    const period = hours < 12 ? '오전' : '오후';
    const hour12 = hours % 12 === 0 ? 12 : hours % 12;

    return `${prefix}${period} ${hour12}시`;
}

export function getSelectedDayStartTime(dayOffset: number): string {
    const now = new Date();
    const targetDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + (dayOffset - 1),
    );

    const year = targetDate.getFullYear();
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    const day = targetDate.getDate().toString().padStart(2, '0');

    const hour =
        dayOffset === 1 ? now.getHours().toString().padStart(2, '0') : '00';

    return `${year}-${month}-${day}T${hour}:00:00`;
}

export function getRecommendComment(
    isToggleOn: boolean,
    courseForecastData: CourseForecast,
) {
    return isToggleOn
        ? courseForecastData.adjustedRecommendComment
        : courseForecastData.recommendComment;
}

export function getDisplayDuration(duration: number) {
    return Math.ceil(duration);
}

export function getCurrentHourString(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hour}:00:00`;
}

export function formatHour12(date: Date) {
    const hours = date.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 === 0 ? 12 : hours % 12;
    return `${hour12}${period}`;
}

export function formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return dateStr.split('T')[0].replace(/-/g, '.');
}
