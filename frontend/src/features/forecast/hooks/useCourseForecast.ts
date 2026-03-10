import { keepPreviousData } from '@tanstack/react-query';
import useApiQuery from '../../../hooks/useApiQuery';
import type { CourseForecast } from '../types/forecast.types';

export default function useCourseForecast(
    courseId: number,
    startDateTime: string,
) {
    return useApiQuery<CourseForecast>(
        `/card/course/${courseId}/forecast`,
        { startDateTime },
        {
            placeholderData: keepPreviousData,
            retry: 3,
            enabled: !!courseId,
        },
    );
}
