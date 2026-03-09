import {
    useQuery,
    type UseQueryOptions,
    type UseQueryResult,
} from '@tanstack/react-query';
import { getMockResponse, shouldUseMockData } from '../mocks/mockApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function useApiQuery<TResponse = any>(
    url: string,
    params?: Record<string, any>,
    options?: Omit<
        UseQueryOptions<
            TResponse,
            Error,
            TResponse,
            [string, Record<string, any>?]
        >,
        'queryKey' | 'queryFn'
    >,
): UseQueryResult<TResponse, Error> {
    const queryFn = async (): Promise<TResponse> => {
        const queryString =
            params && Object.keys(params).length
                ? '?' +
                  new URLSearchParams(
                      params as Record<string, string>,
                  ).toString()
                : '';

        if (shouldUseMockData()) {
            return getMockResponse(url, 'GET', params) as TResponse;
        }

        const token =
            localStorage.getItem('accessToken') ??
            sessionStorage.getItem('accessToken');

        try {
            const res = await fetch(`${API_BASE_URL}${url}${queryString}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.message || 'API 요청 실패');
            }

            return res.json() as Promise<TResponse>;
        } catch (error) {
            const mockResponse = getMockResponse(url, 'GET', params);
            if (mockResponse != null) return mockResponse as TResponse;
            throw error;
        }
    };

    return useQuery<
        TResponse,
        Error,
        TResponse,
        [string, Record<string, any>?]
    >({
        queryKey: [url, params ?? {}],
        queryFn,
        enabled: true,
        ...options,
    });
}
