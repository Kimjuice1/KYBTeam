import axios, { type AxiosError } from "axios"

export const handleApiError = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        if (axiosError.response) {
            console.error("Server response:", axiosError.response.data)
            return `서버 오류: ${axiosError.response.status} - ${JSON.stringify(axiosError.response.data)}`
        } else if (axiosError.request) {
            return "서버로부터 응답이 없습니다. 서버가 실행 중인지 확인하세요."
        } else {
            return `요청 오류: ${axiosError.message}`
        }
    }
    return "알 수 없는 오류가 발생했습니다."
}

