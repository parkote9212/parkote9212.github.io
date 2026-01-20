import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  skills,
  skillCategories,
  getSkillsByCategory,
  getLevelText,
  getProgressBarColor,
} from "../data/skills";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = Object.entries(skillCategories);

  const filteredSkills =
    selectedCategory === "all" ? skills : getSkillsByCategory(selectedCategory);

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
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
            }`}
          >
            🌟 All
          </motion.button>

          {/* Category Buttons */}
          {categories.map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                  : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
              }`}
            >
              {category.icon} {category.name}
            </motion.button>
          ))}
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
                <span className="text-2xl">
                  {
                    skillCategories[
                      selectedCategory as keyof typeof skillCategories
                    ].icon
                  }
                </span>
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
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const progressColor = getProgressBarColor(skill.level);
            const levelText = getLevelText(skill.level);

            return (
              <motion.div
                key={`${skill.name}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card p-6 group cursor-pointer"
              >
                {/* Header: Icon + Name + Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Icon
                        className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-secondary-500 dark:text-secondary-400">
                        {
                          skillCategories[
                            skill.category as keyof typeof skillCategories
                          ].name
                        }
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-400">
                      {levelText}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${progressColor} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                {skill.description && (
                  <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {skill.description}
                  </p>
                )}

                {/* Hover Effect Border */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
              </motion.div>
            );
          })}
        </motion.div>

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

            return (
              <motion.div
                key={key}
                variants={categoryVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-4 text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
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
