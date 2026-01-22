import { motion } from 'framer-motion';
import { FiGithub, FiArrowUp, FiMail } from 'react-icons/fi';
import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary-900 dark:bg-secondary-950 text-white py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              GC Park
            </h3>
            <p className="text-secondary-400 leading-relaxed">
              안정적인 서비스를 구축하는<br />
              Full Stack Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-sm font-semibold text-secondary-300 uppercase mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-sm font-semibold text-secondary-300 uppercase mb-4">
              Connect
            </h4>
            <div className="flex md:justify-end gap-4">
              <motion.a
                href="https://github.com/parkote9212"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:parkote9212@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors text-sm font-medium"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-secondary-400 text-sm text-center md:text-left">
            © {currentYear}. Park GC. All rights reserved.
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-secondary-400 text-sm">
            <span>Built with</span>
            <div className="flex items-center gap-2">
              <SiReact className="w-4 h-4 text-cyan-400" title="React" />
              <SiTypescript className="w-4 h-4 text-blue-400" title="TypeScript" />
              <SiTailwindcss className="w-4 h-4 text-cyan-500" title="Tailwind CSS" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
