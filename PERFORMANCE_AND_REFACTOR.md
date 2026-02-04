# 성능 최적화 & 리팩토링 제안

## 이미 잘 되어 있는 것
- **Lazy loading**: About, TechStack, Projects, Resume, Contact, Footer가 `React.lazy`로 분리됨
- **Vite manualChunks**: react, react-dom, framer-motion, react-icons 별도 청크로 분리
- **Projects**: `useMemo`로 필터 결과 캐시, `ProjectCard`에 `memo` 적용
- **이미지**: Projects 카드에 `loading="lazy"` 적용됨

---

## 1. 성능 최적화

### 1-1. Navbar 스크롤 핸들러 쓰로틀
**위치**: `src/components/Navbar.tsx`  
**문제**: `handleScroll`이 스크롤할 때마다 매번 실행되어 불필요한 연산·리렌더 발생  
**제안**: 100~150ms 쓰로틀 적용

```ts
// 예: requestAnimationFrame 또는 lodash.throttle 또는 간단한 throttle 유틸
let ticking = false;
const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    setScrolled(window.scrollY > 50);
    // ... activeSection 로직
    ticking = false;
  });
};
```

### 1-2. ThemeContext value 메모이제이션
**위치**: `src/context/ThemeContext.tsx`  
**문제**: `value = { theme, toggleTheme, isDark }`가 렌더마다 새 객체라서 구독 중인 컴포넌트가 불필요하게 리렌더됨  
**제안**: `useMemo`로 value 감싸기

```ts
const value = useMemo(() => ({
  theme,
  toggleTheme,
  isDark: theme === 'dark',
}), [theme]);
```

### 1-3. TechStack 모바일 감지 + categories
**위치**: `src/components/TechStack.tsx`  
**문제**:  
- `Object.entries(skillCategories)`가 매 렌더마다 새 배열 생성  
- resize 이벤트가 자주 오면 `setIsMobile`이 반복 호출될 수 있음  
**제안**:  
- `categories`는 컴포넌트 밖에서 한 번만 계산하거나 `useMemo`  
- resize는 간단한 throttle 또는 200ms 디바운스 후 한 번만 체크

### 1-4. Google Fonts 로딩
**위치**: `src/index.css`  
**문제**: `@import url("https://fonts.googleapis.com/...")`는 렌더 블로킹 가능  
**제안**:  
- `index.html`에서 `<link rel="preconnect" href="https://fonts.googleapis.com">` 추가  
- 폰트 링크에 `&display=swap` 유지 (이미 있음)  
- 가능하면 폰트를 로컬로 내려받아 서빙하면 FCP 개선에 유리

### 1-5. Projects 이미지를 OptimizedImage로 통일
**위치**: `src/components/Projects.tsx`  
**현재**: `<img loading="lazy">`만 사용  
**제안**: 이미 있는 `OptimizedImage`를 사용해 스켈레톤 + fade-in 적용 시 체감 로딩 품질 개선 (선택)

---

## 2. 리팩토링

### 2-1. 미사용 코드 제거
- **`src/components/common/OptimizedImage.tsx`**: 현재 어디에서도 import되지 않음 → 사용할 계획이 있으면 Projects 등에 적용, 없으면 제거
- **`src/components/common/ScrollReveal.tsx`**: 마찬가지로 미사용 → 재사용할 곳 있으면 적용, 없으면 제거
- **`src/hooks/useDarkMode.ts`**: 사용처 없음 (ThemeContext만 사용 중) → 삭제해도 됨

### 2-2. Navbar 스크롤/클릭 로직 정리
**위치**: `src/components/Navbar.tsx`  
**문제**: `handleNavClick` 안의 `scrollToSection`이 두 갈래로 비슷한 코드 반복  
**제안**: `scrollToSection(href)` 하나로 묶고, `getElementById(href.slice(1))` 실패 시 `querySelector(href)` 한 번만 재시도하도록 단순화

### 2-3. 애니메이션 variants 공통화
**위치**: About, Hero, TechStack, Projects, Contact 등  
**문제**: `containerVariants`, `itemVariants` 등이 컴포넌트마다 비슷하게 반복 정의됨  
**제안**: `src/utils/animations.ts`에 공통 variants 정의 후 import해서 사용 (이미 `animations.ts`가 있으면 거기 확장)

### 2-4. App.css
**위치**: `src/App.css`  
**내용**: 주석 한 줄만 있음  
**제안**: 실제 스타일이 없다면 제거하고 `App.tsx`에서 import 삭제

### 2-5. 접근성·SEO
- Hero / CTA 버튼에 `aria-label` 필요 시 추가  
- 네비게이션에 `aria-current="page"` 또는 섹션에 맞는 역할 부여 검토

---

## 3. 적용 우선순위 제안

| 우선순위 | 항목 | 효과 | 난이도 |
|---------|------|------|--------|
| 1 | ThemeContext useMemo | 리렌더 감소 | 낮음 |
| 2 | Navbar 스크롤 쓰로틀/RAF | 스크롤 시 부하 감소 | 낮음 |
| 3 | 미사용 코드 제거 (useDarkMode, 미사용 컴포넌트) | 번들·유지보수 | 낮음 |
| 4 | TechStack categories / resize 최적화 | 불필요 연산 감소 | 낮음 |
| 5 | Font preconnect 또는 로컬 폰트 | FCP 개선 | 중간 |
| 6 | OptimizedImage 도입 또는 제거 결정 | 일관성·체감 품질 | 중간 |
| 7 | variants 공통화 | DRY, 유지보수 | 중간 |

원하면 위 항목 중 하나씩 골라서 패치 형태로 적용해 줄 수 있습니다.
