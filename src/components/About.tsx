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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
    <section id="about" className="section bg-white dark:bg-secondary-900">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            다양한 경험을 통해 성장한 개발자의 이야기
          </p>
        </motion.div>

        {/* Story Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-6">
            <FiHeart className="text-primary-600 dark:text-primary-400 w-6 h-6" />
            <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300">
              왜 개발자가 되었는가?
            </h3>
          </div>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto mb-24">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 dark:from-primary-800 dark:via-accent-800 dark:to-primary-800" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="card p-6 group cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 rounded-full text-xs font-semibold mb-2">
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.4 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg ring-4 ring-white dark:ring-secondary-900`}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            나만의 강점
          </h3>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            경험을 통해 얻은 핵심 역량
          </p>
        </motion.div>

        {/* Strengths Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card p-8 text-center group cursor-pointer"
              >
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${strength.gradient} text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  {strength.title}
                </h4>

                {/* Description */}
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {strength.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`mt-6 h-1 w-0 group-hover:w-full mx-auto rounded-full bg-gradient-to-r ${strength.gradient} transition-all duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="relative p-8 glass rounded-2xl">
            <div className="absolute top-4 left-4 text-6xl text-primary-300 dark:text-primary-700 opacity-50">"</div>
            <p className="text-xl md:text-2xl font-medium text-secondary-700 dark:text-secondary-200 italic leading-relaxed relative z-10">
              다양한 경험은 제게 넓은 시야를 주었고,<br />
              개발은 그 경험들을 현실로 만드는 도구입니다.
            </p>
            <div className="absolute bottom-4 right-4 text-6xl text-primary-300 dark:text-primary-700 opacity-50">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
