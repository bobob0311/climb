import {
    useInfiniteQuery,
    type UseInfiniteQueryOptions,
    type UseInfiniteQueryResult,
    type InfiniteData,
} from '@tanstack/react-query';
import { getMockResponse, shouldUseMockData } from '../mocks/mockApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function useApiInfiniteQuery<TItem>(
    url: string,
    {
        params,
        pageSize,
        idField,
    }: {
        params?: Record<string, any>;
        pageSize: number;
        idField?: string;
    },
    options?: Omit<
        UseInfiniteQueryOptions<
            TItem[],
            Error,
            InfiniteData<TItem[], number | null>,
            [string, Record<string, any>],
            number | null
        >,
        'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
    >,
): UseInfiniteQueryResult<InfiniteData<TItem[], number | null>, Error> {
    return useInfiniteQuery<
        TItem[],
        Error,
        InfiniteData<TItem[], number | null>,
        [string, Record<string, any>],
        number | null
    >({
        queryKey: [url, { ...(params ?? {}), pageSize }],
        initialPageParam: null,
        queryFn: async ({ pageParam, queryKey }) => {
            const [_url, baseParams] = queryKey;
            const allParams = {
                ...(baseParams ?? {}),
                ...(pageParam != null ? { lastId: pageParam } : {}),
            };

            const queryString =
                allParams && Object.keys(allParams).length
                    ? `?${new URLSearchParams(allParams as Record<string, string>).toString()}`
                    : '';

            if (shouldUseMockData()) {
                return getMockResponse(_url, 'GET', allParams) as TItem[];
            }

            const token =
                localStorage.getItem('accessToken') ??
                sessionStorage.getItem('accessToken');
            const headers: HeadersInit = token
                ? { Authorization: `Bearer ${token}` }
                : {};

            try {
                const res = await fetch(`${API_BASE_URL}${_url}${queryString}`, {
                    headers,
                });
                if (!res.ok) throw new Error('요청 실패');
                return (await res.json()) as TItem[];
            } catch (error) {
                const mockResponse = getMockResponse(_url, 'GET', allParams);
                if (mockResponse != null) return mockResponse as TItem[];
                throw error;
            }
        },
        getNextPageParam: (lastPage) => {
            if (!lastPage || lastPage.length < pageSize) return undefined;
            if (!idField) return undefined;
            const last = lastPage[lastPage.length - 1];
            const next = (last as Record<string, any>)[idField];
            return typeof next === 'number' ? next : undefined;
        },
        ...options,
    });
}
