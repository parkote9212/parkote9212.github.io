import React from "react";
import { FaJava, FaRocket } from "react-icons/fa";
import {
  FiCpu,
  FiDatabase,
  FiLock,
  FiSettings,
} from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import {
  SiAmazon,
  SiClaude,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMariadb,
  SiPython,
  SiRaycast,
  SiReact,
  SiRedis,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import {
  ChromaDBIcon,
  CursorIcon,
  FastAPIIcon,
  MyBatisIcon,
  ZustandIcon,
} from "../assets/icons/LogoIcons";

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
  // Frontend (AI 의존도 반영하여 레벨 조정)
  {
    name: "HTML5",
    level: 65,
    icon: SiHtml5,
    category: "frontend",
    color: "text-orange-600",
    description: "시맨틱 마크업, 폼·접근성(ARIA), SEO 고려 구조 작성",
  },
  {
    name: "CSS3",
    level: 60,
    icon: SiCss3,
    category: "frontend",
    color: "text-blue-600",
    description: "Flexbox·Grid 레이아웃, 미디어쿼리 반응형, 애니메이션",
  },
  {
    name: "JavaScript",
    level: 60,
    icon: SiJavascript,
    category: "frontend",
    color: "text-yellow-500",
    description: "ES6+ 문법, DOM·이벤트 제어, 비동기(Promise/async)",
  },
  {
    name: "TypeScript",
    level: 55,
    icon: SiTypescript,
    category: "frontend",
    color: "text-blue-700",
    description: "인터페이스·제네릭, strict 모드, React/Vite 연동",
  },
  {
    name: "React",
    level: 60,
    icon: SiReact,
    category: "frontend",
    color: "text-cyan-500",
    description: "함수형 컴포넌트·Hooks, React 18/19, Vite 빌드",
  },
  {
    name: "Vue.js",
    level: 45,
    icon: SiVuedotjs,
    category: "frontend",
    color: "text-green-600",
    description: "Composition API, Pinia 상태 관리, Vite·Tailwind 연동",
  },
  {
    name: "Tailwind CSS",
    level: 56,
    icon: SiTailwindcss,
    category: "frontend",
    color: "text-cyan-500",
    description: "유틸리티 퍼스트, JIT·다크모드, v4 PostCSS(@tailwindcss/postcss)",
  },
  {
    name: "Zustand",
    level: 58,
    icon: ZustandIcon,
    category: "frontend",
    color: "text-amber-600",
    description: "slice 패턴·미들웨어, React 훅(useStore), 경량 전역 상태",
  },

  // Backend (실제 코드 기반으로 정확하게)
  {
    name: "Java",
    level: 75,
    icon: FaJava,
    category: "backend",
    color: "text-red-600",
    description: "객체지향 설계, 디자인 패턴, Morden Java 17/21 기능 활용",
  },
  {
    name: "Python",
    level: 61,
    icon: SiPython,
    category: "backend",
    color: "text-blue-500",
    description: "AST 파싱, 스크립팅, 데이터 처리, 벡터 DB 연동",
  },
  {
    name: "FastAPI",
    level: 61,
    icon: FastAPIIcon,
    category: "backend",
    color: "text-teal-600",
    description: "비동기 REST API, Pydantic 스키마, SSE 스트리밍, 의존성 주입",
  },
  {
    name: "Spring Framework",
    level: 70,
    icon: SiSpring,
    category: "backend",
    color: "text-green-600",
    description: "DI/IoC 컨테이너, AOP 기반 횡단 관심사 처리, MVC 패턴 구현",
  },
  {
    name: "Spring Boot",
    level: 75,
    icon: SiSpringboot,
    category: "backend",
    color: "text-green-700",
    description: "RESTful API 설계, 자동 구성, WebSocket 통신, Batch Job 구현",
  },
  {
    name: "Spring Security",
    level: 68,
    icon: FiLock,
    category: "backend",
    color: "text-green-600",
    description: "JWT 인증/인가, Access·Refresh Token, 권한 체크, CORS·CSRF 설정",
  },
  {
    name: "JPA",
    level: 65,
    icon: FiDatabase,
    category: "backend",
    color: "text-purple-600",
    description: "Entity 설계 및 연관관계 매핑, N+1 문제 해결, Fetch 전략 최적화",
  },
  {
    name: "MyBatis",
    level: 70,
    icon: MyBatisIcon,
    category: "backend",
    color: "text-red-700",
    description: "동적 SQL 작성, 복잡한 조인 및 서브쿼리 처리, 성능 최적화",
  },

  // Database
  {
    name: "MariaDB",
    level: 70,
    icon: SiMariadb,
    category: "database",
    color: "text-blue-800",
    description: "관계형 DB 설계, 인덱싱 전략, 쿼리 성능 분석 및 최적화",
  },
  {
    name: "RDBMS",
    level: 70,
    icon: FiDatabase,
    category: "database",
    color: "text-purple-600",
    description: "ER 다이어그램 설계, 정규화 및 역정규화, ACID 트랜잭션 관리",
  },
  {
    name: "벡터DB",
    level: 56,
    icon: FiDatabase,
    category: "database",
    color: "text-indigo-600",
    description: "임베딩 저장·유사도 검색, RAG 파이프라인 연동",
  },
  {
    name: "ChromaDB",
    level: 56,
    icon: ChromaDBIcon,
    category: "database",
    color: "text-emerald-600",
    description: "로컬 벡터 DB, 코드·문서 임베딩 저장 및 유사도 검색 (RAG)",
  },
  {
    name: "Redis",
    level: 58,
    icon: SiRedis,
    category: "database",
    color: "text-red-600",
    description: "캐시, 세션 스토어, 분산 락 (결재 동시성 제어 등)",
  },

  // DevOps
  {
    name: "Linux",
    level: 55,
    icon: SiLinux,
    category: "devops",
    color: "text-gray-800 dark:text-yellow-300",
    description: "셸 스크립트, 시스템 관리, 권한 제어 및 프로세스 관리",
  },
  {
    name: "Docker",
    level: 55,
    icon: SiDocker,
    category: "devops",
    color: "text-blue-600",
    description: "이미지 빌드, Docker Compose",
  },
  {
    name: "AWS",
    level: 60,
    icon: SiAmazon,
    category: "devops",
    color: "text-orange-500",
    description: "EC2 인스턴스 관리, RDS 데이터베이스 구 ECR 리포지토리를 통한 CI/CD 자동화",
  },
  {
    name: "Git",
    level: 75,
    icon: SiGit,
    category: "devops",
    color: "text-orange-600",
    description: "버전 관리, Git Flow 전략, 충돌 해결 및 리베이싱",
  },
  {
    name: "GitHub",
    level: 75,
    icon: SiGithub,
    category: "devops",
    color: "text-gray-800 dark:text-gray-100",
    description: "PR 리뷰, 이슈 추적, CI/CD 자동화, 팀 협업 워크플로우",
  },

  // AI Tools
  {
    name: "Cursor",
    level: 85,
    icon: CursorIcon,
    category: "ai",
    color: "text-emerald-600",
    description: "AI 기반 IDE, 코드 생성·리팩터·디버깅, MCP·에이전트 워크플로우",
  },
  {
    name: "Claude",
    level: 80,
    icon: SiClaude,
    category: "ai",
    color: "text-amber-600",
    description: "Anthropic LLM, 코딩·문서·분석, API 연동·스트리밍 응답",
  },
  {
    name: "Gemini / NotebookLM",
    level: 70,
    icon: SiGooglegemini,
    category: "ai",
    color: "text-blue-600",
    description: "Google AI, 문서 요약·질의응답, 소스 기반 노트·리서치",
  },
  {
    name: "Raycast",
    level: 75,
    icon: SiRaycast,
    category: "ai",
    color: "text-orange-500",
    description: "맥용 런처, 확장·스크립트, AI 프롬프트·클립보드·워크플로우",
  },
  {
    name: "LLM 활용",
    level: 75,
    icon: TbBrandOpenai,
    category: "ai",
    color: "text-purple-600",
    description: "프롬프트 엔지니어링, 컨텍스트 설계, 복잡한 문제 해결 자동화",
  },
  {
    name: "MCP 연동",
    level: 70,
    icon: TbBrandOpenai,
    category: "ai",
    color: "text-indigo-600",
    description: "Model Context Protocol, Claude Desktop·Notion·Obsidian 연동, 개발 워크플로우 자동화",
  },
];

export const skillCategories = {
  frontend: {
    name: "Frontend",
    description: "사용자 인터페이스 개발",
    color: "from-blue-500 to-cyan-500",
    icon: HiOutlineColorSwatch,
  },
  backend: {
    name: "Backend",
    description: "서버 및 비즈니스 로직",
    color: "from-green-500 to-emerald-500",
    icon: FiSettings,
  },
  database: {
    name: "Database",
    description: "데이터 관리 및 저장",
    color: "from-purple-500 to-pink-500",
    icon: FiDatabase,
  },
  devops: {
    name: "DevOps",
    description: "배포 및 인프라 관리",
    color: "from-orange-500 to-red-500",
    icon: FaRocket,
  },
  ai: {
    name: "AI Tools",
    description: "AI 도구 활용 및 생산성",
    color: "from-indigo-500 to-purple-500",
    icon: FiCpu,
  },
};

// 카테고리별로 스킬 그룹화
export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

// 숙련도에 따른 레벨 텍스트 반환
export const getLevelText = (level: number): string => {
  if (level >= 80) return "능숙";
  if (level >= 70) return "중급";
  if (level >= 60) return "초중급";
  if (level >= 50) return "초급";
  return "입문";
};

// 숙련도에 따른 색상 반환
export const getLevelColor = (level: number): string => {
  if (level >= 80) return "text-green-600 dark:text-green-400";
  if (level >= 70) return "text-blue-600 dark:text-blue-400";
  if (level >= 60) return "text-yellow-600 dark:text-yellow-400";
  if (level >= 50) return "text-orange-600 dark:text-orange-400";
  return "text-gray-600 dark:text-gray-400";
};

// 숙련도에 따른 프로그레스 바 색상 반환
export const getProgressBarColor = (level: number): string => {
  if (level >= 80) return "bg-gradient-to-r from-green-500 to-emerald-500";
  if (level >= 70) return "bg-gradient-to-r from-blue-500 to-cyan-500";
  if (level >= 60) return "bg-gradient-to-r from-yellow-500 to-orange-500";
  if (level >= 50) return "bg-gradient-to-r from-orange-500 to-red-500";
  return "bg-gradient-to-r from-gray-400 to-gray-500";
};
