import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy loading으로 성능 최적화
const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading Spinner
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

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
