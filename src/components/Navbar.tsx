import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiFileText } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ];

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // 현재 활성 섹션 감지
      const sections = ['about', 'skills', 'projects', 'contact', 'resume'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

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
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GC Park
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
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

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* GitHub */}
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

            {/* Blog/Resume */}
            <motion.a
              href="#resume"
              onClick={(e) => handleClick(e, '#resume')}
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Resume"
            >
              <FiFileText size={22} />
            </motion.a>

            {/* Dark Mode Toggle */}
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
            </motion.button>

            {/* Hamburger */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block text-base font-medium transition-colors ${
                    activeSection === item.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-secondary-700 dark:text-secondary-300'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                <motion.a
                  href="https://github.com/parkote9212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={20} />
                  <span className="text-sm">GitHub</span>
                </motion.a>
                <motion.a
                  href="#resume"
                  onClick={(e) => handleClick(e, '#resume')}
                  className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <FiFileText size={20} />
                  <span className="text-sm">Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
