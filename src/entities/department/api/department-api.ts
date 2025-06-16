// import { axiosApi } from "@/shared/api/axios-api.ts";
import { /*Department, DeptData,*/ DeptList/*, DeptMap, Faculty, Major*/ } from '../model/types';

export const departmentApi = {

  getDeptList: async (): Promise<DeptList[]> => {
    const response = await fetch("/dept_list.json");  // public 폴더 기준 경로
    if (!response.ok) {
      throw new Error("Failed to load dept_list.json");
    }
    const data: DeptList[] = await response.json();
    return data;
  },

  // getFaculty: async (signal?: AbortSignal): Promise<Faculty> => {
  //   const response = await axiosApi.get<Faculty>("/api/dept/faculty", { signal })
  //   return response.data
  // },
  //
  // getDepartment: async (signal?: AbortSignal): Promise<Department> => {
  //   const response = await axiosApi.get<Department>("/api/dept/department", { signal })
  //   return response.data
  // },
  //
  // getManager: async (signal?: AbortSignal): Promise<Major> => {
  //   const response = await axiosApi.get<Major>("/api/dept/major", { signal })
  //   return response.data
  // },
  //
  // getDeptMap: async (signal?: AbortSignal): Promise<DeptMap> => {
  //   const response = await axiosApi.get<DeptMap>("/api/dept/map", { signal })
  //   return response.data
  // },
  //
  // getDeptList: async (signal?: AbortSignal): Promise<DeptList[]> => {
  //   const response = await axiosApi.get<DeptList[]>("/api/dept/list", { signal })
  //   return response.data
  // },
  //
  // getDeptData: async (id: number, signal?: AbortSignal): Promise<DeptData> => {
  //   const response = await axiosApi.get<DeptData>(`/api/dept/data/${id}`, { signal })
  //   return response.data
  // }

}