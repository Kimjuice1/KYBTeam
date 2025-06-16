import axios from "axios"

// API 인스턴스 생성
export const axiosApi = axios.create({
    baseURL: "",                                //import.meta.env.VITE_API_URL ||
    headers: {
        "Content-Type": "application/json",
    },
})

export const isRequestCanceled = axios.isCancel

// 인터셉터 설정을 모듈 초기화 시 바로 수행
// 응답 인터셉터
axiosApi.interceptors.response.use(
    (response) => {
        // 응답 데이터 전처리가 필요하면 여기서 수행
        return response
    },
    (error) => {

        if (isRequestCanceled(error)) {
            console.log("Request canceled:", error.message)
            return Promise.reject(error)
        }

        console.error("API Error:", error)
        // 여기서 401, 403 등 특정 에러에 대한 처리를 할 수 있음
        // 예: 401 에러 시 로그인 페이지로 리다이렉트
        return Promise.reject(error)
    },
)

// 요청 인터셉터
axiosApi.interceptors.request.use(
    (config) => {
        // 요청 전에 수행할 작업
        // 예: 인증 토큰 추가
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

