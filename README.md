# [스위치원] 프론트엔드 개발자 사전 과제: 환전 애플리케이션

---

## 프로젝트 목표

- 실시간 환율 조회 -> 환전 견적 -> 환전 실행의 플로우 구현
- 인증이 필요한 페이지에 대한 안정적인 접근 제어
- 실시간 데이터 특성을 고려한 상태 동기화 및 에러 처리
- 사용자 행동에 즉각적인 피드백을 제공하는 UX 중심 설계

---

## 프로젝트 구조 요약

```
src/
 ├─ app/
 │   ├─ (auth)        # 로그인 관련 페이지
 │   ├─ (app)         # 인증이 필요한 메인 애플리케이션 영역
 │   ├─ api/          # Next.js API Routes (BFF)
 │   ├─ _features/    # 도메인 단위 기능 모듈
 │   ├─ _providers/   # Toast, Theme 등 전역 Provider
 │   ├─ _shared/      # 공통 UI / 유틸 / 타입
 │   ├─ _styles/      # 도메인 스타일 분리
 │   ├─ globals.css   # 전역 스타일 엔트리
 │   ├─ layout.tsx    # 루트 레이아웃
 │   ├─ page.tsx      # 진입 페이지
 │   └─ favicon.ico
 └─ proxy.ts          # 미들웨어 기반 라우트 보호
```

- feature 기반 구조로 도메인 책임 명확화
- UI / 상태 / API 로직 분리
- 확장 가능성을 고려한 구조 설계

## 주요 기능

1. **인증 및 라우트 보호**
   - 로그인 성공 시 HTTP Only Cookie 기반 인증
   - middleware(proxy.ts)로 서버 단 라우트 보호
   - (app) layout에 AuthGuardClient 적용
   - 로그아웃 후 뒤로가기 시 캐시된 페이지 노출 문제 해결
       - router.refresh() + client guard 병행
2. 환율 및 지갑 정보 조회
    - 최신 환율 및 지갑 잔액 조회 API 구성
    - 1분 주기 환율 자동 갱신
    - Zustand Store를 통한 전역 상태 동기화
3. 환전 견적 조회
    - 금액 입력 시 디바운스 기반 견적 요청
    - 입력 값 변경에 따른 실시간 견적 반영
4. 환전 실행
    - 환전 실행 시 현재 환율 ID 기준 요청
    - 성공 시
        - 지갑 잔액 즉시 갱신
    - 실패 시
        - 에러 코드 기반 Toast 피드백
        - 최신 환율 불일치(EXCHANGE_RATE_MISMATCH) 발생 시
            - 환율 강제 갱신 후 재시도 유도
5. Toast 시스템
   - 전역 Toast Provider 구성
   - Toast 타입을 variant로 관리
   - 성공 / 실패 / 안내 메시지 UX 일관성 유지
6. 환전 내역 조회
    - 환전 히스토리 조회 API 연동

---

## 사용 도구 및 라이브러리

### Core

- **Next.js**
    - API Route 기반 BFF 구성
    - Server / Client Component 분리
    - Layout 단위 인증 가드 적용

- **TypeScript**
    - API 응답/요청 타입 명세
    - 도메인 모델 기반 타입 안정성 확보

### UI / Styling

- **radix-ui, @radix-ui/themes**
    - Toast, Button, Layout 등 주요 UI 구성

- **tailwindcss**
    - 유틸리티 기반 CSS 프레임워크
    - 디자인 토큰과 병행 사용

- **clsx**
    - 조건부 클래스 관리

- **lucide-react**
    - SVG 아이콘 컴포넌트

### State / Data Handling

- **zustand**
    - 환율, 지갑 잔액 등 전역 상태 관리

### Tooling

- **prettier**
    - 코드 스타일 통일

- **ChatGPT**
    - 프로젝트 구조 설계
    - 컴포넌트 분리 전략 검토
    - 코드 리뷰 및 개선 아이디어 도출

---
