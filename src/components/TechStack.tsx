import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiStar, FiChevronDown } from "react-icons/fi";
import {
  getLevelText,
  getProgressBarColor,
  getSkillsByCategory,
  skillCategories,
  skills,
} from "../data/skills";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = Object.entries(skillCategories);

  const filteredSkills =
    selectedCategory === "all" ? skills : getSkillsByCategory(selectedCategory);

  // 모바일에서 초기 6개만 표시, PC는 전체 표시
  const displaySkills = isMobile && !showAllMobile 
    ? filteredSkills.slice(0, 6) 
    : filteredSkills;

  // 카테고리 변경 핸들러 (모바일 "더 보기" 상태도 함께 리셋)
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowAllMobile(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  } as const;

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  } as const;

  return (
    <section
      id="skills"
      className="section bg-secondary-50 dark:bg-secondary-800/50"
    >
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Tech Stack</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            실무와 학습을 통해 습득한 기술 스택
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {/* All Category */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === "all"
                ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
              }`}
          >
            <FiStar className="w-5 h-5" />
            All
          </motion.button>

          {/* Category Buttons */}
          {categories.map(([key, category]) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === key
                    ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                    : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          {selectedCategory !== "all" && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-secondary-800 rounded-full shadow-md">
                {(() => {
                  const Icon =
                    skillCategories[
                      selectedCategory as keyof typeof skillCategories
                    ].icon;
                  return <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />;
                })()}
                <p className="text-secondary-600 dark:text-secondary-300 font-medium">
                  {
                    skillCategories[
                      selectedCategory as keyof typeof skillCategories
                    ].description
                  }
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto"
          >
            {displaySkills.map((skill, index) => {
              const Icon = skill.icon;
              const progressColor = getProgressBarColor(skill.level);
              const levelText = getLevelText(skill.level);

              return (
                <motion.div
                  key={`${skill.name}-${selectedCategory}-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card p-4 md:p-6 group cursor-pointer"
                >
                {/* Header: Icon + Name + Level (모바일에서 긴 이름 시 퍼센트 영역 보존) */}
                <div className="flex items-center justify-between gap-2 mb-3 md:mb-4 min-w-0">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 overflow-hidden">
                    <div className="relative flex-shrink-0">
                      <Icon
                        className={`w-8 h-8 md:w-10 md:h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <h3 className="text-base md:text-lg font-bold text-secondary-900 dark:text-white truncate">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-secondary-500 dark:text-secondary-400 truncate block">
                        {
                          skillCategories[
                            skill.category as keyof typeof skillCategories
                          ].name
                        }
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 whitespace-nowrap ml-1">
                    <div className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 tabular-nums">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-400">
                      {levelText}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3 md:mb-4">
                  <div className="h-1.5 md:h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <motion.div
                      key={`progress-${skill.name}-${selectedCategory}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.2, 
                        delay: index * 0.08,
                        ease: [0.43, 0.13, 0.23, 0.96] // 부드러운 ease-out
                      }}
                      className={`h-full ${progressColor} rounded-full relative overflow-hidden`}
                    >
                      {/* 차오르는 효과를 위한 그라디언트 */}
                      <motion.div
                        key={`shine-${skill.name}-${selectedCategory}`}
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.08 + 0.3,
                          ease: 'easeInOut',
                          repeat: 0
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Description - 모바일에서 숨김 */}
                {skill.description && (
                  <p className="hidden md:block text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {skill.description}
                  </p>
                )}

                {/* Hover Effect Border */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
              </motion.div>
            );
          })}
          </motion.div>
        </AnimatePresence>

        {/* 모바일 "더 보기" 버튼 */}
        {isMobile && filteredSkills.length > 6 && !showAllMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex justify-center"
          >
            <motion.button
              onClick={() => setShowAllMobile(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <span>더 보기 ({filteredSkills.length - 6}개)</span>
              <FiChevronDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
        >
          {categories.map(([key, category]) => {
            const categorySkills = getSkillsByCategory(key);
            const avgLevel = Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.level, 0) /
              categorySkills.length,
            );

            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                variants={categoryVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-4 text-center"
              >
                <div className="flex justify-center mb-2">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {categorySkills.length}
                </div>
                <div className="text-xs text-secondary-600 dark:text-secondary-400 mb-2">
                  {category.name}
                </div>
                <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  평균 {avgLevel}%
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-secondary-600 dark:text-secondary-300 italic">
            "기술은 도구일 뿐, 중요한 것은{" "}
            <span className="font-bold gradient-text">문제 해결</span>입니다."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
