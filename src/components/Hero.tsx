import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    // resume.pdf 다운로드 로직
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'GCPark_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 애니메이션 variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  } as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-400/30 dark:bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-400/30 dark:bg-accent-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
            👋 안녕하세요
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-secondary-900 dark:text-white mb-2">
            안정적인 서비스를 구축하는
          </span>
          <span className="block gradient-text">
            Full Stack Developer
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          창업 경험을 통해{' '}
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            기획부터 배포까지
          </span>
          의 전체 사이클을 이해합니다
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA - 프로젝트 보기 */}
          <motion.a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:from-primary-700 group-hover:to-primary-800 transition-all duration-300" />
            <span className="relative flex items-center gap-2">
              프로젝트 보기
              <FiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </motion.a>

          {/* Secondary CTA - 이력서 다운로드 */}
          <motion.button
            onClick={handleDownloadResume}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white rounded-xl font-semibold text-lg border-2 border-secondary-200 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-500 shadow-lg hover:shadow-xl transition-all"
          >
            <FiDownload className="group-hover:translate-y-1 transition-transform duration-300" />
            이력서 다운로드
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-secondary-500 dark:text-secondary-400 font-medium">
            스크롤하여 더 알아보기
          </span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FiArrowDown className="text-secondary-400 dark:text-secondary-500 w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border-4 border-primary-300/30 dark:border-primary-500/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 border-4 border-accent-300/30 dark:border-accent-500/20 rounded-full"
        animate={{
          rotate: [360, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </section>
  );
};

export default Hero;
