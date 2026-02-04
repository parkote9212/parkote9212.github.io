import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiFileText } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

/** 네비게이션 메뉴 항목 (이름 + 앵커) */
const MENU_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
] as const;

/** 스크롤 시 활성 섹션 판별에 사용하는 id 목록 */
const SECTION_IDS = ['about', 'skills', 'projects', 'resume', 'contact'];

/** 네비 높이만큼 오프셋 (px) */
const NAV_OFFSET = 80;

/**
 * 앵커 href(#id)에 해당하는 요소로 스무스 스크롤합니다.
 * getElementById 실패 시 querySelector로 재시도합니다.
 *
 * @param href - '#sectionId' 형태의 앵커
 * @returns 스크롤 성공 여부
 */
function scrollToSection(href: string): boolean {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const el = document.getElementById(id) ?? document.querySelector(href);
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop;
  const targetY = rect.top + scrollTop - NAV_OFFSET;

  window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  return true;
}

/**
 * 상단 고정 네비게이션. 스크롤 시 배경/블러 적용, 앵커 메뉴 활성 표시, 다크모드 토글, 모바일 햄버거 메뉴를 제공합니다.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggleTheme } = useTheme();

  /** 스크롤 시 스크롤 여부·활성 섹션 업데이트 (requestAnimationFrame으로 쓰로틀) */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);

        const current = SECTION_IDS.find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
        if (current) setActiveSection(`#${current}`);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * 앵커 클릭 시 메뉴를 닫고 해당 섹션으로 스크롤. lazy 로딩된 섹션은 재시도합니다.
   * @param e - 클릭/터치 이벤트
   * @param href - '#sectionId'
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith('#')) return;
      e.preventDefault();
      setIsOpen(false);

      const runAfterDelay = () => {
        if (scrollToSection(href)) return;
        let attempts = 0;
        const maxAttempts = 40;
        const id = setInterval(() => {
          attempts++;
          if (scrollToSection(href) || attempts >= maxAttempts) clearInterval(id);
        }, 50);
      };

      setTimeout(runAfterDelay, 100);
    },
    [],
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GC Park
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/parkote9212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </motion.a>

            <motion.a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Resume"
            >
              <FiFileText size={22} />
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700 overflow-visible"
            style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
          >
            <div className="px-4 py-6 space-y-1">
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    onTouchEnd={(e) => handleNavClick(e, item.href)}
                    style={{
                      touchAction: 'manipulation',
                      minHeight: 44,
                      display: 'flex',
                      alignItems: 'center',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                    className={`py-3 px-2 -mx-2 text-base font-medium transition-colors rounded-lg active:bg-secondary-100 dark:active:bg-secondary-800 cursor-pointer ${
                      activeSection === item.href
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-secondary-700 dark:text-secondary-300'
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 pt-4 mt-4 border-t border-secondary-200 dark:border-secondary-700">
                <motion.a
                  href="https://github.com/parkote9212"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ touchAction: 'manipulation', minHeight: 44 }}
                  className="flex items-center justify-center min-w-[44px] py-3 px-4 space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg active:bg-secondary-100 dark:active:bg-secondary-800"
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={20} />
                  <span className="text-sm">GitHub</span>
                </motion.a>
                <a
                  href="#resume"
                  onClick={(e) => handleNavClick(e, '#resume')}
                  onTouchEnd={(e) => handleNavClick(e, '#resume')}
                  style={{
                    touchAction: 'manipulation',
                    minHeight: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  className="min-w-[44px] py-3 px-4 space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg active:bg-secondary-100 dark:active:bg-secondary-800 cursor-pointer"
                >
                  <FiFileText size={20} />
                  <span className="text-sm">Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
