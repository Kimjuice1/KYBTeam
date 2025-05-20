# 📡 REST API 명세서

이 문서는 백엔드에서 제공하는 주요 REST API의 목록과 기본 구조를 정의하기 위한 공간입니다.

## ✅ 예시 API 구조 (작성 예정)

### [GET] /api/certificates
- 설명: 전체 자격증 목록 조회
- 요청 파라미터: 없음
- 응답 예시:
```json
[
  {
    "id": 1,
    "name": "정보처리기사",
    "agency": "큐넷",
    "exam_date": "2024-06-10"
  }
]
```

---

### [POST] /api/interest
- 설명: 관심 자격증 등록
- 요청 예시:
```json
{
  "user_id": 3,
  "certificate_id": 7
}
```

- 응답 예시:
```json
{
  "message": "저장되었습니다."
}
```

※ 추후 구체 명세 작성 예정
