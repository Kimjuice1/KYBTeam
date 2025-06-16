import { useState, useEffect } from 'react';
// alias sorry zz
import certificateData from '../../../../public/certificate.json';
// vite 원칙으로 public 폴더에서 import 하는 건 금지래
// 실행은 되는데 노란 줄이 뜨긴 해

export interface Certificate {
    certificate_id: number;
    certificate_name: string;
    jmcd: string;
    imageUrl?: string;
}

const imageMap: { [key: string]: string } = {
    '정보처리': 'https://www.gklibrarykor.com/wp-content/uploads/2023/10/프로그래밍_코딩-설명.jpg',
    '건축': '//i.namu.wiki/i/t2io7chOq8-ABLPdKcrT_E33XLdYbLqkbyZHpjss8lDmNmQ2SGTsGCWvNW8pd4yuR2fqbnPDWx6nSLcVuq7DKdwrCOv3Ha38W-ydPv3kQAY8QEjKv2Ihluel5IY43JTvd1L0JBtvQc1CP7YMisJMzQ.webp',
    '건설': '//i.namu.wiki/i/t2io7chOq8-ABLPdKcrT_E33XLdYbLqkbyZHpjss8lDmNmQ2SGTsGCWvNW8pd4yuR2fqbnPDWx6nSLcVuq7DKdwrCOv3Ha38W-ydPv3kQAY8QEjKv2Ihluel5IY43JTvd1L0JBtvQc1CP7YMisJMzQ.webp',
    '기계': 'https://pimg.mk.co.kr/meet/neds/2018/07/image_readtop_2018_463585_15323796613398026.jpg',
    '전기': 'https://www.lgcns.com/wp-content/uploads/2021/11/99DFC14C5B0BDD8D16.png',
    '토목': 'https://gangsan21.com/wp-content/uploads/2022/04/construction-site-1-scaled.jpg',
    '식품': 'https://cdn.kormedi.com/wp-content/uploads/2023/03/gettyimages-1437713519-700x487.jpg.webp',
    '항공': 'https://img0.yna.co.kr/etc/inner/KR/2024/07/22/AKR20240722143700003_01_i_P4.jpg',
    '가스': 'https://cdn.sanupin-news.kr/news/photo/202108/2010_3151_5650.jpg',
    '화약': 'https://ext.fmkorea.com/files/attach/new/20200812/486263/974847873/3033666160/3941e5b3bcd42c2f8d1ac7853437cb45.png',
    '해양': 'https://seesbk.snu.ac.kr/webdata/research/ed0z495zdeaz17fz774z46dz33bz280z450z07azbf.jpg',
    '공장': 'https://img.seoul.co.kr/img/upload/2023/01/15/SSC_20230115100604.jpg',
    '철도': 'https://c.pxhere.com/photos/8d/8d/train_track_train_tracks_railway_rails_transport-945907.jpg!d',
    '금속': 'https://cdn.class101.net/images/479d74e8-c021-4e48-899a-302d56812e47/original',
};

const getCertificateImageUrl = (certificateName: string): string => {
    for (const key in imageMap) {
        if (certificateName.includes(key)) {
            return imageMap[key]; // 자격증 이름에 키워드가 포함되면 해당 이미지 반환
        }
    }
    return '//i.namu.wiki/i/FYU32qsho4Zx4femUmKQBJLF-mZ1wuo9ZRQpUYpDc3IypISt4wiYO_dB_RtNetJaZkOs0Q82fMl_Mwm0c8A6zV2DCWkD8PuyKBGxUP0IArPMaZV7PUlmSBSqJVlEEzwNulOIXdcxeYtUmxO8TwYwyw.svg'; // 기본 이미지
};

const processedCertificates: Certificate[] = certificateData.map((cert: Certificate) => ({
    ...cert,
    imageUrl: getCertificateImageUrl(cert.certificate_name),
}));

export const useCertificates = (page: number = 0, size: number = 10) => {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        setCertificates(processedCertificates.slice(page * size, (page + 1) * size));
        setTotalPages(Math.ceil(processedCertificates.length / size));
    }, [page, size]);

    return { certificates, totalPages };
};