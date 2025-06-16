export interface Faculty {
  faculty_id: number,
  faculty_name: string
}

export interface Department {
  department_id: number,
  department_name: string
}

export interface Major {
  major_id: number,
  major_name: string
}

export interface DeptMap {
  dept_map_id: number,
  faculty_id: number,
  department_id: number,
  major_id: number
}

export interface DeptChildList {
  child_type: string
  child_id: number
  child_name: string
  dept_map_id: number
}

export interface DeptList {
  parent_type: string
  parent_id: number
  parent_name: string
  child: DeptChildList[]
}

export interface DeptData{
  dept_map_id: number
  asdf: string
}

