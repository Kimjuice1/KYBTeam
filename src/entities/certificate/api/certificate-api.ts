import { axiosApi } from "@/shared/api/axios-api.ts";
import { Certificate, CertData } from '../model/types';

export const certificateApi = {
    
    getCertificate: async (signal?: AbortSignal): Promise<Certificate> => {
        const response = await axiosApi.get<Certificate>("/api/cert/cert", { signal })
        return response.data
    },

    getCertData: async (id: number, signal?: AbortSignal): Promise<CertData> => {
        const response = await axiosApi.get<CertData>(`/api/cert/data/${id}`, { signal })
        return response.data
    },

    ///
    getCertDept: async (signal?: AbortSignal): Promise<CertData> => {
        const response = await axiosApi.get<CertData>("/api/cert/dept", { signal })
        return response.data
    }

}
