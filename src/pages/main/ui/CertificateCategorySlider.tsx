// CertificateCategorySlider.tsx
import React, { useState } from 'react';
import '@/pages/main/styles/CertificateCategorySlider.css';

const categories = [
    {
        title: '컴퓨터소프트웨어학과',
        items: ['정보처리기사', '정보처리기능사', '정보처리산업기사', '리눅스 마스터', '정보관리기술사', '정보보안산업기사', '전자계산기기사', '전자계산기기능사', '전자계산기기사', '컴퓨터활용능력']
    },
    {
        title: '자격증 TOP 10',
        items: ['지게차운전기능사', '정보처리기사', '전기기사', '한식조리산업기사', '전기산업기사', '산림기능사', '산업위생관리기사', '소방설비기사', '한식조리산업기사', '조경기능사']
    },
    {
        title: '자격증 난이도 TOP 10',
        items: ['철도차량기사', '섬유기사', '로봇하드웨어개발기사', '항공기사', '건설기계설비기사', '궤도장비정비기사', '조경기사', '농업기계기사', '자동차정비기사', '용접기사']
    }
];

const CertificateCategorySlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? categories.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === categories.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="slider-wrapper">
            <button onClick={handlePrev} className="slider-arrow">{'<'}</button>
            <div
                className="slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {categories.map((category, index) => {
                    let className = 'slide';
                    if (index === currentIndex) className += ' active';
                    else if (index === currentIndex - 1) className += ' prev';
                    else if (index === currentIndex + 1) className += ' next';

                    return (
                        <div className={className} key={index}>
                            <h3>{category.title}</h3>
                            <ol>
                                {category.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    );
                })}
            </div>
            <button onClick={handleNext} className="slider-arrow">{'>'}</button>
        </div>
    );
};

export default CertificateCategorySlider;