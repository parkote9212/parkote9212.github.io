# 성능 최적화 가이드

## 적용된 최적화 기법

### 1. 코드 스플리팅 (Code Splitting)

#### React.lazy와 Suspense
```typescript
// App.tsx
const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
// ...

<Suspense fallback={<LoadingSpinner />}>
  <About />
</Suspense>
```

**효과**: 초기 로딩 시간 단축, 필요할 때만 컴포넌트 로드

#### Vite Manual Chunks
```typescript
// vite.config.ts
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
  'framer-motion': ['framer-motion'],
  'react-icons': ['react-icons'],
}
```

**효과**: 라이브러리별로 청크 분리, 캐싱 효율 향상

---

### 2. 이미지 최적화

#### OptimizedImage 컴포넌트
```typescript
// Loading skeleton + lazy loading
<OptimizedImage
  src="/project.png"
  alt="Project"
  loading="lazy"
  decoding="async"
/>
```

**기능**:
- Lazy Loading (스크롤 시 로드)
- Loading Skeleton (로딩 중 표시)
- Error Fallback (에러 시 대체 UI)
- Fade-in 애니메이션

**권장 이미지 포맷**:
- WebP (최우선)
- JPEG/PNG (호환성)
- SVG (아이콘)

---

### 3. 애니메이션 최적화

#### 공통 애니메이션 유틸리티
```typescript
// utils/animations.ts
export const fadeInUp = { ... };
export const staggerContainer = { ... };
```

**효과**: 코드 재사용, 일관된 애니메이션

#### Framer Motion 최적화
```typescript
// viewport once 설정
viewport={{ once: true, margin: '-100px' }}
```

**효과**:
- 한 번만 애니메이션 실행
- 미리 로드 (margin)
- 불필요한 리렌더링 방지

#### 성능 최적화 팁
```typescript
// ❌ 피해야 할 것
animate={{ x: [0, 100], scale: [1, 2] }}

// ✅ 권장
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

### 4. ScrollReveal Hook

```typescript
// useInView 활용
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  animate={isInView ? 'visible' : 'hidden'}
/>
```

**효과**: 뷰포트 진입 시에만 애니메이션 실행

---

## 성능 측정

### Lighthouse 점수 목표
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 측정 방법
```bash
# Chrome DevTools
1. F12 > Lighthouse 탭
2. "Analyze page load" 클릭
3. 점수 확인

# 또는 CLI
npm install -g lighthouse
lighthouse https://your-site.com
```

---

## 빌드 최적화

### 프로덕션 빌드
```bash
npm run build
```

### 빌드 분석
```bash
npm run build -- --mode analyze
```

### 권장 설정
```typescript
// vite.config.ts
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true, // console.log 제거
    },
  },
}
```

---

## 체크리스트

### 배포 전 확인사항
- [ ] 이미지 최적화 (WebP 변환)
- [ ] Lazy Loading 적용
- [ ] Code Splitting 확인
- [ ] Lighthouse 점수 측정
- [ ] 모바일 성능 테스트
- [ ] 다크모드 전환 테스트
- [ ] 애니메이션 버벅임 확인

### 추가 최적화 가능 항목
- [ ] Service Worker (PWA)
- [ ] CDN 사용
- [ ] Gzip/Brotli 압축
- [ ] Critical CSS
- [ ] Preload/Prefetch

---

## 참고 자료

- [Vite Performance](https://vitejs.dev/guide/performance.html)
- [React Optimization](https://react.dev/learn/render-and-commit)
- [Framer Motion Performance](https://www.framer.com/motion/guide-reduce-bundle-size/)
- [Web.dev Performance](https://web.dev/performance/)
