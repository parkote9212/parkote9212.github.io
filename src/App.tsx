import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

/** 섹션 lazy 로딩으로 초기 번들 축소 */
const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

/** Suspense fallback용 스피너 */
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

/**
 * 루트 앱 컴포넌트. Navbar + Hero + (About, TechStack, Projects, Resume, Contact, Footer)를
 * Lazy + Suspense로 구성합니다.
 */
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Resume />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
