import React from 'react';
import '../styles/CertificateCard.css';


// 자격증 이름에 따라 한 줄 설명을 동적으로 설정하는 함수
const getCertificateDescription = (certificateName: string) => {
    const descriptionMap: { [key: string]: string } = {
        '정보처리': '정보 시스템을 설계하고 관리하는 전문가 자격증',
        '건축': '건축 분야에서 필요한 설계 및 시공 자격증',
        '기계': '기계 설계와 제작, 유지 보수를 담당하는 자격증',
        '전기': '전기 회로 설계 및 전력 시스템 관련 전문가 자격증',
        '토목': '토목 공사 및 구조물 설계를 위한 자격증',
        '식품': '식품 생산 및 가공의 기술적 관리 전문가 자격증',
        '건설': '건설의 설계, 제작, 관리 및 운전 기술을 담당하는 자격증',
        '금속': '금속의 가공 및 제련 기술 관련 자격증',
        '해양': '해양 자원 개발 및 관리, 해양 환경 보호를 위한 기술적 전문성을 갖춘 자격증',
        '철도': '철도 운행, 관리, 유지보수에 대한 기술과 지식을 보유한 자격증',
        '공장': '공장 운영, 생산 관리 및 품질 개선을 위한 기술과 관리 능력을 갖춘 자격증',
        '항공': '항공기의 운항, 정비, 안전 관리에 필요한 기술과 지식을 갖춘 자격증',
        '가스': '가스의 안전한 사용과 관리, 점검 및 유지보수에 필요한 지식을 제공',
        '화약': '화약의 취급과 관리, 화약 제품의 제조 및 저장에 대한 기술을 갖춘 자격증',
    };

    // descriptionMap의 키워드를 순차적으로 확인하여 포함된 키워드를 찾으면 해당 설명 반환
    for (const key in descriptionMap) {
        if (certificateName.includes(key)) {
            return descriptionMap[key]; // 설명 반환
        }
    }

    // 설명이 없는 자격증 이름일 경우 기본 설명
    return '자격증에 대한 설명이 제공되지 않았습니다.';
};

const CertificateCard: React.FC<{certificateName: string; imageUrl: string }> = ({certificateName, imageUrl }) => {

    const description = getCertificateDescription(certificateName);

    return (
        <div className="certificate-card-v2">
            <div className="card-image-wrapper">
                <img src={imageUrl} alt={certificateName} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{certificateName}</h3>
                <p className="card-description">
                    {description}
                </p>

            </div>
        </div>
    );
};

export default CertificateCard;