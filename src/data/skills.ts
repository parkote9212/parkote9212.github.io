import React from 'react';
import { FaJava } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMariadb,
  SiMysql,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

// IconType 정의
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface Skill {
  name: string;
  level: number; // 0-100 (퍼센트)
  icon: IconType;
  category: string;
  color: string; // Tailwind color class
  description?: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML5',
    level: 80,
    icon: SiHtml5,
    category: 'frontend',
    color: 'text-orange-600',
    description: '시맨틱 마크업과 접근성을 고려한 구조화',
  },
  {
    name: 'CSS3',
    level: 75,
    icon: SiCss3,
    category: 'frontend',
    color: 'text-blue-600',
    description: 'Flexbox, Grid, 반응형 디자인',
  },
  {
    name: 'JavaScript',
    level: 70,
    icon: SiJavascript,
    category: 'frontend',
    color: 'text-yellow-500',
    description: 'ES6+, 비동기 처리, DOM 조작',
  },
  {
    name: 'TypeScript',
    level: 60,
    icon: SiTypescript,
    category: 'frontend',
    color: 'text-blue-700',
    description: '타입 안정성을 활용한 개발',
  },
  {
    name: 'React',
    level: 65,
    icon: SiReact,
    category: 'frontend',
    color: 'text-cyan-500',
    description: 'Hooks, 상태 관리, 컴포넌트 설계',
  },
  {
    name: 'Vue.js',
    level: 50,
    icon: SiVuedotjs,
    category: 'frontend',
    color: 'text-green-600',
    description: '기본 컴포넌트 개발 및 Composition API',
  },

  // Backend
  {
    name: 'Java',
    level: 75,
    icon: FaJava,
    category: 'backend',
    color: 'text-red-600',
    description: 'OOP, 디자인 패턴, Java 8+',
  },
  {
    name: 'Spring Framework',
    level: 70,
    icon: SiSpring,
    category: 'backend',
    color: 'text-green-600',
    description: 'DI/IoC, AOP, MVC 패턴',
  },
  {
    name: 'Spring Boot',
    level: 70,
    icon: SiSpringboot,
    category: 'backend',
    color: 'text-green-700',
    description: 'RESTful API, 자동 설정, 내장 서버',
  },
  {
    name: 'JPA',
    level: 60,
    icon: FiDatabase,
    category: 'backend',
    color: 'text-purple-600',
    description: 'Entity 관리, 연관관계 매핑',
  },
  {
    name: 'MyBatis',
    level: 65,
    icon: FiDatabase,
    category: 'backend',
    color: 'text-red-700',
    description: 'SQL 매핑, 동적 쿼리 작성',
  },

  // Database
  {
    name: 'MariaDB',
    level: 70,
    icon: SiMariadb,
    category: 'database',
    color: 'text-blue-800',
    description: '쿼리 최적화, 인덱싱, 트랜잭션',
  },
  {
    name: 'MySQL',
    level: 70,
    icon: SiMysql,
    category: 'database',
    color: 'text-blue-700',
    description: '데이터베이스 설계, 정규화',
  },

  // DevOps
  {
    name: 'Linux',
    level: 65,
    icon: SiLinux,
    category: 'devops',
    color: 'text-gray-800',
    description: 'Shell 스크립트, 서버 관리',
  },
  {
    name: 'Docker',
    level: 60,
    icon: SiDocker,
    category: 'devops',
    color: 'text-blue-600',
    description: '컨테이너화, 이미지 관리, Docker Compose',
  },
  {
    name: 'AWS',
    level: 65,
    icon: SiAmazon,
    category: 'devops',
    color: 'text-orange-500',
    description: 'EC2, RDS, S3 활용 및 배포',
  },
  {
    name: 'Git',
    level: 75,
    icon: SiGit,
    category: 'devops',
    color: 'text-orange-600',
    description: '버전 관리, 브랜치 전략',
  },
  {
    name: 'GitHub',
    level: 75,
    icon: SiGithub,
    category: 'devops',
    color: 'text-gray-800',
    description: 'PR, 이슈 관리, CI/CD',
  },

  // AI Tools
  {
    name: 'AI Assistant',
    level: 80,
    icon: TbBrandOpenai,
    category: 'ai',
    color: 'text-emerald-600',
    description: 'Cursor, Claude를 활용한 생산성 향상',
  },
  {
    name: 'LLM 활용',
    level: 75,
    icon: TbBrandOpenai,
    category: 'ai',
    color: 'text-purple-600',
    description: '프롬프트 엔지니어링, AI 기반 문제 해결',
  },
  {
    name: 'MCP 연동',
    level: 70,
    icon: TbBrandOpenai,
    category: 'ai',
    color: 'text-indigo-600',
    description: 'Model Context Protocol 활용',
  },
];

export const skillCategories = {
  frontend: {
    name: 'Frontend',
    description: '사용자 인터페이스 개발',
    color: 'from-blue-500 to-cyan-500',
    icon: '🎨',
  },
  backend: {
    name: 'Backend',
    description: '서버 및 비즈니스 로직',
    color: 'from-green-500 to-emerald-500',
    icon: '⚙️',
  },
  database: {
    name: 'Database',
    description: '데이터 관리 및 저장',
    color: 'from-purple-500 to-pink-500',
    icon: '🗄️',
  },
  devops: {
    name: 'DevOps',
    description: '배포 및 인프라 관리',
    color: 'from-orange-500 to-red-500',
    icon: '🚀',
  },
  ai: {
    name: 'AI Tools',
    description: 'AI 도구 활용 및 생산성',
    color: 'from-indigo-500 to-purple-500',
    icon: '🤖',
  },
};

// 카테고리별로 스킬 그룹화
export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

// 숙련도에 따른 레벨 텍스트 반환
export const getLevelText = (level: number): string => {
  if (level >= 80) return '능숙';
  if (level >= 70) return '중급';
  if (level >= 60) return '초중급';
  if (level >= 50) return '초급';
  return '입문';
};

// 숙련도에 따른 색상 반환
export const getLevelColor = (level: number): string => {
  if (level >= 80) return 'text-green-600 dark:text-green-400';
  if (level >= 70) return 'text-blue-600 dark:text-blue-400';
  if (level >= 60) return 'text-yellow-600 dark:text-yellow-400';
  if (level >= 50) return 'text-orange-600 dark:text-orange-400';
  return 'text-gray-600 dark:text-gray-400';
};

// 숙련도에 따른 프로그레스 바 색상 반환
export const getProgressBarColor = (level: number): string => {
  if (level >= 80) return 'bg-gradient-to-r from-green-500 to-emerald-500';
  if (level >= 70) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
  if (level >= 60) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
  if (level >= 50) return 'bg-gradient-to-r from-orange-500 to-red-500';
  return 'bg-gradient-to-r from-gray-400 to-gray-500';
};
