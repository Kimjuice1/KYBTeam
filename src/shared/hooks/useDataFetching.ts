import { useState, useEffect, useCallback, useRef } from 'react';
import { executeFetch } from '../api';

type DependencyList = ReadonlyArray<unknown>;

interface UseDataFetchingOptions<T> {
    fetchFn: (signal?: AbortSignal) => Promise<T>;
    initialData?: T;
    dependencies?: DependencyList;
    onSuccess?: (data: T) => void;
    onError?: (error: string) => void;
}

interface UseDataFetchingResult<T> {
    data: T;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export function useDataFetching<T>({
                                       fetchFn,
                                       initialData,
                                       dependencies = [],
                                       onSuccess,
                                       onError
                                   }: UseDataFetchingOptions<T>): UseDataFetchingResult<T> {
    const [data, setData] = useState<T>(initialData as T);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // AbortController 참조 저장
    const abortControllerRef = useRef<AbortController | null>(null);

    // fetchData 함수
    const fetchData = useCallback(async (): Promise<void> => {
        // 이전 요청이 있다면 취소
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // 새 AbortController 생성
        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        await executeFetch({
            fetchFn,
            abortController,
            setLoading,
            setError,
            setData,
            clearError: true, // 수동 리페치에서는 에러를 지움
            onSuccess,
            onError,
        })

    }, [fetchFn, onSuccess, onError]);

    useEffect(() => {
        // 새 AbortController 생성
        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        void executeFetch({
            fetchFn,
            abortController,
            setLoading,
            setError,
            setData,
            clearError: false,
            onSuccess,
            onError,
        })

        // 클린업 함수에서 요청 취소
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
                abortControllerRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return { data, loading, error, refetch: fetchData };
}