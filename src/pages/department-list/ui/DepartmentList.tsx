import { departmentApi } from "@/entities/department/api"
import { DepartmentSection } from "@/features/department/ui"
import { useDataFetching } from "@/shared/hooks";
import { deptListStyles } from "../styles";

export const DepartmentList = () => {

    const { data, loading, error, refetch } = useDataFetching({
        fetchFn:departmentApi.getDeptList
    })

    // 데이터가 없을 때의 처리
    const renderContent = () => {
        if (loading) {
            return (
                <div className={deptListStyles.loading}>
                    <div className={deptListStyles.loadingSpinner}></div>
                    <p>데이터를 불러오는 중입니다...</p>
                </div>
            )
        }

        if (error) {
            return (
                <div className={deptListStyles.error}>
                    <p>오류: {error}</p>
                    <button className={deptListStyles.retryButton} onClick={() => void refetch()}>
                        다시 시도
                    </button>
                </div>
            )
        }

        if (data.length === 0) {
            return (
                <div className={deptListStyles.emptyState}>
                    <p>표시할 학과 정보가 없습니다.</p>
                </div>
            )
        }

        return (
            <div className={deptListStyles.facultyList}>
                {
                data.map((dept) => (
                    <DepartmentSection key={`${dept.parent_type}-${dept.parent_id}`} department={dept} />
                ))}
            </div>
        )
    }

    return <div className="department-list-container">{renderContent()}</div>
}

