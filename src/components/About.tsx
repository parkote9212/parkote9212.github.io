import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiCode,
  FiHeart,
  FiMonitor,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      period: '고등학교',
      title: '컴퓨터와의 첫 만남',
      description: '컴퓨터에 대한 관심으로 OA 자격증을 취득하고, 웹페이지와 임베디드 시스템을 코딩하며 개발의 즐거움을 처음 경험했습니다.',
      icon: FiMonitor,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      period: '전문대학 (1년)',
      title: '게임 프로그래밍 전공',
      description: '게임 개발의 꿈을 안고 전문대학에서 게임 프로그래밍을 1년간 배우며 코딩 실력을 쌓았습니다.',
      icon: HiOutlineAcademicCap,
      color: 'from-purple-500 to-pink-500',
    },
    {
      period: '군 복무 & 자퇴',
      title: '삶의 전환점',
      description: '군 입대 후 제대했으나 가정 사정으로 학업을 중단하고 새로운 길을 모색해야 했습니다.',
      icon: HiOutlineShieldCheck,
      color: 'from-gray-500 to-gray-600',
    },
    {
      period: '건설업계 (안전/품질 관리자)',
      title: '현장에서의 문제 해결',
      description: '건설 현장에서 안전과 품질을 관리하며 실무 문제 해결 능력을 키웠지만, 직접 서비스를 만들고 싶다는 갈증이 커졌습니다.',
      icon: FiTool,
      color: 'from-orange-500 to-red-500',
    },
    {
      period: '국비 교육',
      title: '풀스택/인프라 교육 수료',
      description: '개발자로의 전환을 결심하고 국비지원 교육을 통해 풀스택 개발과 인프라를 체계적으로 학습했습니다.',
      icon: FiCode,
      color: 'from-green-500 to-emerald-500',
    },
    {
      period: '현재',
      title: '안정적인 서비스를 만드는 개발자',
      description: '다양한 경험을 바탕으로 기획부터 배포까지 전체 사이클을 이해하며, 사용자에게 가치를 전달하는 개발자로 성장하고 있습니다.',
      icon: FiTarget,
      color: 'from-primary-500 to-accent-500',
    },
  ];

  const strengths = [
    {
      title: '끈기',
      description: '어려운 환경을 극복하며 목표를 향해 나아가는 끈기를 가지고 있습니다.',
      icon: HiOutlineLightBulb,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: '문제 해결',
      description: '건설 현장 실무 경험을 바탕으로 실질적인 문제를 해결하는 능력을 갖췄습니다.',
      icon: FiTrendingUp,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: '소통',
      description: '다양한 팀 프로젝트 경험을 통해 효과적으로 협업하는 방법을 알고 있습니다.',
      icon: FiUsers,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  } as const;

  return (
    <section id="about" className="section bg-white dark:bg-secondary-900 py-16">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            다양한 경험을 통해 성장한 개발자의 이야기
          </p>
        </motion.div>

        {/* Story Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-full">
            <FiHeart className="text-primary-600 dark:text-primary-400 w-5 h-5" />
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">
              왜 개발자가 되었는가?
            </h3>
          </div>
        </motion.div>

        {/* 타임라인 */}
        <div ref={ref} className="relative mb-16">
          {/* SVG 연결선 - 지그재그 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 200" preserveAspectRatio="none" style={{ zIndex: 0 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="rgb(59, 130, 246)" opacity="0.6" />
              </marker>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* 첫 번째 행: 1→2→3 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              d="M 8 60 L 50 60 L 92 60"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            
            {/* 3↓4 (세로 연결) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              d="M 92 120 L 92 180"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            
            {/* 두 번째 행: 4←5←6 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              d="M 92 180 L 50 180 L 8 180"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          {/* 타임라인 그리드 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
            style={{ zIndex: 1 }}
          >
            {/* 첫 번째 행: 왼쪽→오른쪽 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {timeline.slice(0, 3).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="order-1"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card p-4 group cursor-pointer h-full"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="inline-block px-2 py-0.5 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 rounded-full text-xs font-semibold mb-1.5">
                            {item.period}
                          </span>
                          <h3 className="text-sm font-bold text-secondary-900 dark:text-white mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* 두 번째 행: 오른쪽→왼쪽 (역순) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[timeline[5], timeline[4], timeline[3]].map((item, index) => {
                const Icon = item.icon;
                const originalIndex = 5 - index; // 원래 인덱스
                // Grid에서 역순 배치: 첫 번째 아이템을 3번째 위치로, 두 번째를 2번째로, 세 번째를 1번째로
                const gridOrder = index === 0 ? 3 : index === 1 ? 2 : 1;
                return (
                  <motion.div
                    key={originalIndex}
                    variants={itemVariants}
                    style={{ order: gridOrder }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card p-4 group cursor-pointer h-full"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="inline-block px-2 py-0.5 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 rounded-full text-xs font-semibold mb-1.5">
                            {item.period}
                          </span>
                          <h3 className="text-sm font-bold text-secondary-900 dark:text-white mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 나만의 강점 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              나만의 강점
            </h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-300">
              경험을 통해 얻은 핵심 역량
            </p>
          </div>

          {/* Strengths Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  className="card p-4 group cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${strength.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-secondary-900 dark:text-white pt-0.5">
                      {strength.title}
                    </h4>
                  </div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed pl-11">
                    {strength.description}
                  </p>
                  <motion.div
                    className={`mt-2 h-1 w-0 group-hover:w-full rounded-full bg-gradient-to-r ${strength.gradient} transition-all duration-500`}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="relative p-6 glass rounded-xl">
            <div className="absolute top-2 left-3 text-4xl text-primary-300 dark:text-primary-700 opacity-50">"</div>
            <p className="text-base md:text-lg font-medium text-secondary-700 dark:text-secondary-200 italic leading-relaxed relative z-10 px-4">
              다양한 경험은 제게 넓은 시야를 주었고,<br />
              개발은 그 경험들을 현실로 만드는 도구입니다.
            </p>
            <div className="absolute bottom-2 right-3 text-4xl text-primary-300 dark:text-primary-700 opacity-50">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
