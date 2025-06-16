// src/components/CertificateList.tsx
import React, { useState } from 'react';
import CertificateCard from './CertificateCard';  // 해당 경로에 맞게 수정해주세요.
import { useCertificates } from '@/entities/certificate/api/useCertificates';  // 해당 경로에 맞게 수정해주세요.
import '@/pages/main/styles/CertificateList.css';  // 스타일링을 위한 CSS 파일

const CertificateList: React.FC = () => {
    const [page, setPage] = useState(0);
    const { certificates, totalPages, loading, error } = useCertificates(page);

    const handlePrevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="certificate-list">
            <div className="certificate-cards">
                {certificates.map((cert) => (
                    <CertificateCard
                        key={cert.certificate_id}
                        id={cert.certificate_id}
                        certificateName={cert.certificate_name}
                        imageUrl={cert.imageUrl!}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 0}>
                    이전
                </button>
                <span>{page + 1}/{totalPages}</span>
                <button onClick={handleNextPage} disabled={page >= totalPages - 1}>
                    다음
                </button>
            </div>
        </div>
    );
};
export default CertificateList;
