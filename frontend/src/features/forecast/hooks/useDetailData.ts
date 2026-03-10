import useCourseForecast from './useCourseForecast';
import useSummaryInfo from './useSummaryInfoSection';

interface UseDetailDataProps {
    selectedCourseId: number;
    scrollSelectedTime: string;
}

export default function useDetailData({
    selectedCourseId,
    scrollSelectedTime,
}: UseDetailDataProps) {
    const {
        data: courseForecastData,
        isError: isCourseDataError,
        isLoading: isCourseDataLoading,
    } = useCourseForecast(selectedCourseId, scrollSelectedTime);

    const {
        data: summaryData,
        isError: isDurationError,
        isLoading: isDurationLoading,
    } = useSummaryInfo(selectedCourseId, scrollSelectedTime);

    const duration = summaryData?.duration;

    const isError = isCourseDataError || isDurationError;
    const isLoading = isDurationLoading || isCourseDataLoading;

    return {
        courseForecastData,
        duration,
        isError,
        isLoading,
    };
}
