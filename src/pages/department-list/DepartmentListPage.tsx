import { DepartmentList } from "./ui"
import { deptListStyles } from "./styles";

export const DepartmentListPage = () => {
    return (
        <div className={deptListStyles.container}>
            <h1>학과 목록</h1>
            <DepartmentList />
        </div>
    )
}

