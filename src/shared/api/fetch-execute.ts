import { isRequestCanceled } from "./axios-api"
import { handleApiError } from "./error-handler"

export async function executeFetch<T>({
  fetchFn,
  abortController,
  setLoading,
  setError,
  setData,
  clearError = false,
  onSuccess,
  onError,
}: {
  fetchFn: (signal?: AbortSignal) => Promise<T>
  abortController: AbortController
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setData: (data: T) => void
  clearError?: boolean
  onSuccess?: (data: T) => void
  onError?: (error: string) => void
}): Promise<void> {
  try {
    setLoading(true)
    if (clearError) setError(null)

    // fetchFn에 signal 전달
    const result = await fetchFn(abortController.signal)

    // 요청이 취소되지 않았다면 상태 업데이트
    if (!abortController.signal.aborted) {
      setData(result)
      onSuccess?.(result)
      setLoading(false)
    }
  } catch (error) {
    // axios의 CanceledError 또는 AbortError는 정상적인 취소로 처리
    if (isRequestCanceled(error) || (error instanceof Error && error.name === "AbortError")) {
      console.log("Fetch request was cancelled")
      return
    }

    console.error("Error fetching data:", error)

    // 요청이 취소되지 않았다면 에러 상태 업데이트
    if (!abortController.signal.aborted) {
      const errorMessage = handleApiError(error)
      setError(errorMessage)
      onError?.(errorMessage)
    }
  } finally {
    // 요청이 취소되지 않았다면 로딩 상태 업데이트
    if (!abortController.signal.aborted) {
      setLoading(false)
    }
  }
}
