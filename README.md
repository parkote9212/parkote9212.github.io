# 🚀 Portfolio Website - Park GC

> 안정적인 서비스를 구축하는 Full Stack Developer의 포트폴리오 사이트

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [성능 최적화](#-성능-최적화)
- [배포](#-배포)
- [연락처](#-연락처)

## 🎯 프로젝트 소개

다양한 경험을 바탕으로 기획부터 배포까지 전체 사이클을 이해하는 개발자의 포트폴리오 사이트입니다.
React + TypeScript + Vite를 기반으로 제작되었으며, 현대적인 UI/UX와 성능 최적화에 중점을 두었습니다.

### ✨ 특징

- 🎨 **모던 디자인**: Tailwind CSS를 활용한 깔끔하고 세련된 디자인
- 🌓 **다크모드**: Context API 기반 다크모드 지원 (localStorage 저장)
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크탑 모든 기기 지원
- ⚡ **고성능**: Lazy Loading, Code Splitting으로 최적화
- 🎭 **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 경험
- ♿ **접근성**: 시맨틱 HTML과 ARIA 속성으로 웹 접근성 준수

## 🎨 주요 기능

### 📄 섹션 구성

1. **Hero** - 메인 인트로 섹션
   - 역동적인 그라디언트 배경 애니메이션
   - CTA 버튼 (프로젝트 보기, 이력서 다운로드)

2. **About** - 개발자 스토리
   - 인터랙티브 타임라인
   - 성장 과정 시각화
   - 강점 카드 (끈기, 문제 해결, 소통)

3. **Tech Stack** - 기술 스택
   - 카테고리별 필터링
   - 숙련도 시각화 (프로그레스 바)
   - 20+ 기술 스택 표시

4. **Projects** - 프로젝트 포트폴리오
   - 상세 모달 뷰
   - 상태별 필터링 (완료/진행 중)
   - GitHub 링크, Demo 링크

5. **Resume** - 이력서 다운로드
   - PDF 다운로드 기능
   - 경력 요약 카드

6. **Contact** - 연락처
   - 이메일 폼 (Formspree 연동 가능)
   - 소셜 링크
   - 연락처 정보

7. **Footer** - 하단 정보
   - Quick Links
   - Scroll to Top 버튼
   - Built with 정보

### 🎭 애니메이션

- **페이지 로드**: 순차적 Fade-in 효과
- **스크롤**: Section별 Reveal 애니메이션
- **호버**: 카드 Lift-up, 버튼 Scale
- **모달**: 부드러운 Open/Close 전환

## 🛠️ 기술 스택

### Frontend

- **React 19.2.0** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 7.2.4** - 빌드 도구
- **Tailwind CSS 3.4.18** - 스타일링

### 라이브러리

- **Framer Motion 12.1.0** - 애니메이션
- **React Icons 5.4.0** - 아이콘
- **React Router DOM 7.1.3** - 라우팅 (준비)

### 개발 도구

- **ESLint** - 코드 품질
- **TypeScript ESLint** - 타입 체크
- **PostCSS** - CSS 처리
- **Autoprefixer** - 벤더 프리픽스

## 🚀 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/parkote9212/parkote9212.github.io.git

# 디렉토리 이동
cd parkote9212.github.io

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열기

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
parkote9212.github.io/
├── public/                  # 정적 파일
│   ├── resume.pdf          # 이력서 파일
│   └── projects/           # 프로젝트 이미지
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── common/        # 공통 컴포넌트
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── OptimizedImage.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Resume.tsx
│   │   └── Footer.tsx
│   ├── context/           # Context API
│   │   └── ThemeContext.tsx
│   ├── data/              # 데이터
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── hooks/             # 커스텀 훅
│   │   └── useDarkMode.ts
│   ├── utils/             # 유틸리티
│   │   └── animations.ts
│   ├── App.tsx            # 메인 App
│   ├── main.tsx           # 진입점
│   └── index.css          # 글로벌 스타일
├── index.html
├── package.json
├── tailwind.config.js     # Tailwind 설정
├── tsconfig.json          # TypeScript 설정
└── vite.config.ts         # Vite 설정
```

## ⚡ 성능 최적화

### 적용된 최적화 기법

1. **Code Splitting**
   - React.lazy()로 컴포넌트 지연 로딩
   - Route-based splitting

2. **이미지 최적화**
   - Lazy Loading (loading="lazy")
   - OptimizedImage 컴포넌트
   - WebP 포맷 권장

3. **번들 최적화**
   - Vite의 자동 코드 분할
   - Tree shaking
   - Manual chunks (react-vendor, framer-motion)

4. **애니메이션 최적화**
   - Framer Motion의 viewport once
   - GPU 가속 (transform, opacity)

### Lighthouse 점수 목표

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🌐 배포

### GitHub Pages

```bash
# 빌드 및 배포
npm run build
```

GitHub Actions를 통한 자동 배포 설정됨 (`.github/workflows/deploy.yml`)

### 환경 변수

프로젝트에 환경 변수가 필요한 경우 `.env` 파일 생성:

```env
# Formspree (Contact Form)
VITE_FORMSPREE_ID=your_form_id_here
```

## 🎨 커스터마이징

### 색상 테마 변경

`tailwind.config.js`에서 색상 수정:

```javascript
colors: {
  primary: { ... },   // 블루 계열
  secondary: { ... }, // 그레이 계열
  accent: { ... },    // 포인트 컬러
}
```

### 데이터 수정

- **기술 스택**: `src/data/skills.ts`
- **프로젝트**: `src/data/projects.ts`
- **About 타임라인**: `src/components/About.tsx`

## 📝 스크립트

```bash
npm run dev       # 개발 서버 실행
npm run build     # 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
npm run lint      # ESLint 실행
```

## 🤝 기여

이슈와 PR은 언제나 환영입니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📧 연락처

**Park GC**

- 📧 Email: parkote9212@gmail.com
- 💼 GitHub: [@parkote9212](https://github.com/parkote9212)
- 🌐 Portfolio: [parkote9212.github.io](https://parkote9212.github.io)

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요! ⭐**

Made with ❤️ by [Park GC](https://github.com/parkote9212)

</div>
