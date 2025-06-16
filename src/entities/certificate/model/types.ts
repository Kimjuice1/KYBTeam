export interface Certificate {
    certificate_id: number,
    certificate_name: string,
    jmcd: string
}

export interface CertData {
    certificate_id: number,
    infogb: string,
    contents: string
}

export interface CertDept {
    cert_dept_id: number,
    certificate_id: number,
    dept_map_id: number
}