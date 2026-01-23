export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  role: string;
  highlights: string[];
  github?: string;
  demo?: string;
  docs?: string;
  status: "completed" | "in-progress" | "planned";
  image?: string;
  images?: string[];
  featured?: boolean;
  period?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BizSync - ERP 통합 칸반 관리 시스템",
    description:
      "실시간 협업 칸반보드 기반 프로젝트 관리 시스템. WebSocket을 활용한 실시간 업데이트, JWT 기반 인증, 결재 시스템 등 ERP 기능 통합",
    tags: [
      "Spring Boot 3.5",
      "React 19",
      "TypeScript",
      "JPA",
      "MyBatis",
      "WebSocket",
      "JWT",
      "MariaDB",
      "Docker",
    ],
    role: "개인 프로젝트 (풀스택)",
    highlights: [
      "WebSocket(STOMP)을 활용한 실시간 칸반보드 드래그앤드롭 구현",
      "Spring Security + JWT 기반 인증/인가 시스템 구축",
      "JPA와 MyBatis 하이브리드 아키텍처 설계",
      "결재 라인 시스템 및 알림 기능 개발",
      "Docker Compose로 개발 환경 컨테이너화",
      "EC2, RDS 배포 및 모니터링",
      "Zustand를 활용한 전역 상태 관리",
      "RESTful API 설계 및 Swagger 문서화",
    ],
    images: ["/images/bizsync1.gif", "/images/bizsync2.gif", "/images/bizsync3.gif"],
    github: "https://github.com/parkote9212/bizsync-project",
    status: "completed",
    docs: "www.naver.com",
    featured: false,
    period: "2026.01 - 현재",
  },
  {
    id: 2,
    title: "공공 경매 물건 정보 서비스",
    description:
      "온비드(Onbid) 공공 API를 활용한 경매 물건 검색 및 관리 플랫폼. 카카오맵 연동, 통계 대시보드, 스케줄링 기반 데이터 동기화",
    tags: [
      "Spring Boot 3.3",
      "React",
      "MyBatis",
      "AOP",
      "WebClient",
      "ShedLock",
      "Kakao Map API",
      "MariaDB",
      "Recharts",
    ],
    images: ["/images/onbid1.JPG", "/images/onbid2.JPG", "/images/onbid3.png"],
    role: "개인 프로젝트 (풀스택)",
    highlights: [
      "온비드 공공 API 연동 및 데이터 파싱 (XML ↔ JSON)",
      "카카오맵 API로 물건 위치 시각화 구현",
      "Spring AOP를 활용한 로깅 및 예외 처리",
      "ShedLock으로 스케줄러 중복 실행 방지",
      "Full-Text Search 인덱스를 활용한 검색 최적화",
      "Recharts로 지역/카테고리별 통계 대시보드 구현",
      "Spring Retry를 활용한 외부 API 호출 안정성 확보",
    ],
    github: "https://github.com/parkote9212/side-proj",
    status: "in-progress",
    docs: "www.naver.com",
    featured: false,
    period: "2025.10 - 2025.11",
  },
  {
    id: 3,
    title: "FitNeeds - 헬스장 이용권 거래 플랫폼 (팀 프로젝트)",
    description:
      "헬스장 회원권/이용권 거래 중개 플랫폼. 관리자 페이지에서 예약 관리, 이용권 관리, 상품 관리 등 ERP 기능 담당",
    tags: [
      "Spring Boot 3.5",
      "React 18",
      "JPA",
      "MyBatis",
      "Spring Security",
      "JWT",
      "MariaDB",
      "Bootstrap",
      "Redux Toolkit",
    ],
    role: "팀 프로젝트 - 풀스택 개발 (관리자 시스템)",
    highlights: [
      "관리자 백엔드: 예약 관리, 이용권 거래 관리, 이용권 관리, 상품 관리 API 개발",
      "관리자 프론트: 전체 페이지 구조 설계 및 레이아웃 구성",
      "공통 CSS 스타일 가이드(erp-common.css) 작성",
      "JPA + MyBatis 하이브리드 데이터 접근 계층 설계",
      "AOP 기반 로깅 및 트랜잭션 관리",
    ],
    github: "https://github.com/fitness-team-project/fitneeds",
    docs: "www.naver.com",
    status: "in-progress",
    featured: false,
    period: "2025.11 - 현재",
  },
];

// 상태별 프로젝트 필터링
export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return projects.filter((project) => project.status === status);
};

// Featured 프로젝트 가져오기
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// 특정 태그를 포함하는 프로젝트 가져오기
export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter((project) =>
    project.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())),
  );
};

// 상태별 색상 반환
export const getStatusColor = (status: Project["status"]): string => {
  switch (status) {
    case "completed":
      return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
    case "in-progress":
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
    case "planned":
      return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400";
    default:
      return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400";
  }
};

// 상태별 텍스트 반환
export const getStatusText = (status: Project["status"]): string => {
  switch (status) {
    case "completed":
      return "완료";
    case "in-progress":
      return "진행 중";
    case "planned":
      return "예정";
    default:
      return "알 수 없음";
  }
};

// 태그별 색상 매핑
export const tagColors: { [key: string]: string } = {
  "Spring Boot":
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  "Spring Boot 3.5":
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  "Spring Boot 3.3":
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  React: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400",
  "React 19":
    "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400",
  "React 18":
    "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400",
  TypeScript:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Python:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
  JPA: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  MyBatis:
    "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  WebSocket:
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400",
  JWT: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
  Docker:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  MariaDB:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  "Kakao Map API":
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
  Recharts:
    "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  AOP: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  WebClient:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  ShedLock:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  "Spring Security":
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Bootstrap:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  "Redux Toolkit":
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
};

// 태그 색상 가져오기 (기본값 포함)
export const getTagColor = (tag: string): string => {
  return (
    tagColors[tag] ||
    "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400"
  );
};
