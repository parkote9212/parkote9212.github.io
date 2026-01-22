import { motion } from "framer-motion";
import { FiFileText, FiBriefcase } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { fadeInUp, staggerContainer, staggerItem } from "../utils/animations";

const Resume = () => {
  const handleOpenResume = () => {
    window.open(
      "https://unique-flyingfish-69a.notion.site/Resume-2ee800a6a8978019af0cd397ebe53bca?source=copy_link",
      "_blank",
    );
  };

  return (
    <section id="resume" className="section bg-white dark:bg-secondary-900">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="section-title">Resume</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            이력서 및 경력사항
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Resume Card */}
          <motion.div
            variants={staggerItem}
            className="card p-8 md:p-12 text-center"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl mb-6 shadow-xl"
            >
              <FiFileText className="w-12 h-12" />
            </motion.div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              이력서 보기
            </h3>

            {/* Description */}
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
              상세한 경력사항과 프로젝트 이력을 확인하실 수 있습니다.
            </p>

            {/* Download Button */}
            <motion.button
              onClick={handleOpenResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <FiFileText className="w-5 h-5" />
              이력서 보기 (Notion)
            </motion.button>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700">
              <p className="text-sm text-secondary-500 dark:text-secondary-400">
                * Notion 페이지로 제공됩니다. Notion 또는 브라우저에서 확인
                가능합니다.
              </p>
            </div>
          </motion.div>

          {/* Quick Summary */}
          <motion.div
            variants={staggerItem}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div whileHover={{ y: -5 }} className="card p-6 text-center">
              <div className="flex justify-center mb-3">
                <FiBriefcase className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                경력
              </h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                풀스택 개발
                <br />
                국비 교육 수료
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card p-6 text-center">
              <div className="flex justify-center mb-3">
                <HiOutlineAcademicCap className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                학력
              </h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                게임프로그래밍 전공
                <br />
                다양한 경험
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card p-6 text-center">
              <div className="flex justify-center mb-3">
                <FaRocket className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                프로젝트
              </h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                3+ 프로젝트
                <br />
                풀스택 개발
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
