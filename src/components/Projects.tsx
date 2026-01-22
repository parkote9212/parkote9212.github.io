import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useMemo, memo } from "react";
import {
  FiCheck,
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiX,
  FiPause,
  FiPlay,
  FiStar,
  FiFolder,
  FiCalendar,
  FiUser,
  FiInbox,
} from "react-icons/fi";
import { HiOutlineCheckCircle, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import type { Project } from "../data/projects";
import {
  getStatusColor,
  getStatusText,
  getTagColor,
  projects,
} from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">(
    "all",
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.status === filter),
    [filter],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  } as const;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const ProjectCard = memo(({ project }: { project: Project }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -10 }}
        onClick={() => setSelectedProject(project)}
        style={{ willChange: "transform" }}
        className="card group overflow-hidden h-full flex flex-col cursor-pointer"
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-200 via-accent-200 to-primary-300 dark:from-primary-800 dark:via-accent-800 dark:to-primary-900">
              <div className="opacity-30">
                {project.featured ? (
                  <FiStar className="w-16 h-16 text-yellow-400" />
                ) : (
                  <FiFolder className="w-16 h-16 text-primary-400" />
                )}
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getStatusColor(
                project.status,
              )}`}
            >
              {getStatusText(project.status)}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700">
                <FiStar className="w-3 h-3" />
                Featured
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white font-semibold">자세히 보기 →</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Period */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
              {project.title}
            </h3>
            {project.period && (
              <p className="inline-flex items-center gap-1.5 text-sm text-secondary-500 dark:text-secondary-400">
                <FiCalendar className="w-4 h-4" />
                {project.period}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Role */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
              <FiUser className="w-4 h-4" />
              {project.role}
            </span>
          </div>

          {/* Highlights Preview */}
          <div className="mb-4 flex-1">
            <h4 className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
              주요 성과:
            </h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-400 line-clamp-1"
                >
                  <FiCheck className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
              {project.highlights.length > 2 && (
                <li className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  +{project.highlights.length - 2}개 더보기
                </li>
              )}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Quick Links */}
          <div className="flex gap-2 pt-4 border-t border-secondary-200 dark:border-secondary-700">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 rounded-lg text-sm font-medium hover:bg-secondary-800 dark:hover:bg-secondary-100 transition-colors"
              >
                <FiGithub />
                GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                <FiExternalLink />
                Demo
              </motion.a>
            )}
            {project.docs && (
              <motion.a
                href={project.docs}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent-600 text-white rounded-lg text-sm font-medium hover:bg-accent-700 transition-colors"
              >
                <FiFileText />
                문서
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  });
  
  ProjectCard.displayName = "ProjectCard";

  const ProjectModal = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const displayImages =
      project.images || (project.image ? [project.image] : []);

    // 프로젝트가 변경될 때마다 이미지 인덱스 초기화
    useEffect(() => {
      setCurrentImageIndex(0);
      setIsAutoPlay(true);
    }, [project.id]);

    // 모달 열릴 때 body scroll 막기
    useEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        // 닫힐 때 원본 스타일로 명시적 복구
        document.body.style.overflow =
          originalStyle === "hidden" ? "unset" : originalStyle;

        // 브라우저에게 레이아웃을 다시 그리도록 자극
        window.dispatchEvent(new Event("resize"));
      };
    }, []);

    // 자동 슬라이드 기능
    useEffect(() => {
      // 이미지가 1개 이하이거나 자동재생이 꺼져있거나 호버 중이면 실행하지 않음
      if (displayImages.length <= 1 || !isAutoPlay || isHovered) {
        return;
      }

      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      }, 6000); // 6초마다 자동 전환

      return () => clearInterval(interval);
    }, [displayImages.length, isAutoPlay, isHovered]);

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      // 수동 조작 시 자동 슬라이드 일시정지 및 리셋
      setIsAutoPlay(false);
    };

    const prevImage = () => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + displayImages.length) % displayImages.length,
      );
      // 수동 조작 시 자동 슬라이드 일시정지 및 리셋
      setIsAutoPlay(false);
    };

    const toggleAutoPlay = () => {
      setIsAutoPlay((prev) => !prev);
    };

    return (
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-white dark:from-secondary-800 to-transparent">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedProject(null)}
              className="p-2 bg-secondary-200 dark:bg-secondary-700 rounded-full hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors"
            >
              <FiX className="w-6 h-6 text-secondary-700 dark:text-secondary-300" />
            </motion.button>
          </div>

          {/* Image Slider */}
          <div
            className="relative h-64 md:h-80 -mt-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {displayImages.length > 0 ? (
              <>
                <motion.img
                  key={currentImageIndex}
                  src={displayImages[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  loading="eager"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Navigation Arrows - Only show if multiple images */}
                {displayImages.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      ←
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      →
                    </motion.button>

                    {/* Auto Play Toggle Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAutoPlay();
                      }}
                      className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm z-10"
                      title={isAutoPlay ? "자동 재생 일시정지" : "자동 재생 시작"}
                    >
                      {isAutoPlay ? (
                        <FiPause className="w-4 h-4" />
                      ) : (
                        <FiPlay className="w-4 h-4" />
                      )}
                    </motion.button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm z-10">
                      {currentImageIndex + 1} / {displayImages.length}
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {displayImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                            setIsAutoPlay(false);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-white w-6"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-200 via-accent-200 to-primary-300 dark:from-primary-800 dark:via-accent-800 dark:to-primary-900">
                <div className="opacity-30">
                  {project.featured ? (
                    <FiStar className="w-24 h-24 text-yellow-400" />
                  ) : (
                    <FiFolder className="w-24 h-24 text-primary-400" />
                  )}
                </div>
              </div>
            )}

            {/* Badges on Image */}
            <div className="absolute top-4 left-4 flex gap-2">
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700">
                  <FiStar className="w-3 h-3" />
                  Featured
                </span>
              )}
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getStatusColor(
                  project.status,
                )}`}
              >
                {getStatusText(project.status)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title & Period */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-3">
                {project.title}
              </h2>
              {project.period && (
                <p className="inline-flex items-center gap-1.5 text-secondary-500 dark:text-secondary-400">
                  <FiCalendar className="w-4 h-4" />
                  {project.period}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Role */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 uppercase mb-2">
                Role
              </h3>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium">
                <FiUser className="w-4 h-4" />
                {project.role}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 uppercase mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getTagColor(
                      tag,
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 uppercase mb-3">
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <FiCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-secondary-200 dark:border-secondary-700">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 rounded-lg font-semibold hover:bg-secondary-800 dark:hover:bg-secondary-100 transition-colors shadow-lg"
                >
                  <FiGithub className="w-5 h-5" />
                  GitHub Repository
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  <FiExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              )}
              {project.docs && (
                <motion.a
                  href={project.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-700 transition-colors shadow-lg"
                >
                  <FiFileText className="w-5 h-5" />
                  개발운영문서
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section bg-white dark:bg-secondary-900">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            실무와 개인 학습을 통해 완성한 프로젝트들
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === "all"
                ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
            }`}
          >
            <FiStar className="w-5 h-5" />
            All Projects ({projects.length})
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("completed")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === "completed"
                ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
            }`}
          >
            <HiOutlineCheckCircle className="w-5 h-5" />
            Completed (
            {projects.filter((p) => p.status === "completed").length})
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("in-progress")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === "in-progress"
                ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:shadow-md"
            }`}
          >
            <HiOutlineWrenchScrewdriver className="w-5 h-5" />
            In Progress (
            {projects.filter((p) => p.status === "in-progress").length})
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${selectedProject ? 'modal-open' : 'modal-closed'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={`${filter}-${project.id}`} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="flex justify-center mb-4">
              <FiInbox className="w-16 h-16 text-secondary-400 dark:text-secondary-500" />
            </div>
            <p className="text-xl text-secondary-500 dark:text-secondary-400">
              해당 카테고리에 프로젝트가 없습니다.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-lg text-secondary-700 dark:text-secondary-200 mb-4">
              더 많은 프로젝트와 코드가 궁금하신가요?
            </p>
            <motion.a
              href="https://github.com/parkote9212"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              <FiGithub className="w-5 h-5" />
              GitHub에서 더 보기
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal key="project-modal" project={selectedProject} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
