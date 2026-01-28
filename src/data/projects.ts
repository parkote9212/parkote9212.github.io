export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  role: string;
  highlights: string[];
  github?: string;
  demo?: string;
  site?: string;
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
    title: "BizSync - 기업형 프로젝트 협업 플랫폼",
    description:
      "프로젝트 관리, 칸반 보드, 전자결재, 실시간 채팅을 통합한 팀 협업 솔루션. WebSocket 기반 실시간 동기화, JWT 인증, Spring AOP 기반 권한 관리, GitHub Actions CI/CD 배포 파이프라인 구축",
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
      "AWS EC2",
      "AWS RDS",
      "AWS ECR",
      "GitHub Actions",
    ],
    role: "개인 프로젝트 (풀스택)",
    highlights: [
      "GitHub Actions + ECR + EC2 CI/CD 파이프라인 구축 (main 브랜치 푸시 시 자동 배포)",
      "WebSocket(STOMP) 기반 실시간 칸반보드 동기화 및 낙관적 업데이트(Optimistic UI) 구현",
      "Spring AOP로 프로젝트 권한 체크 로직 분리 (@RequireProjectLeader)",
      "Spring Security + JWT 인증/인가 (Access + Refresh Token Rotation)",
      "JPA + MyBatis 하이브리드 ORM (단순 CRUD vs 복잡 조인 쿼리 최적화)",
      "비관적 락(Pessimistic Lock)으로 예산 차감 동시성 제어",
      "다단계 결재 라인 시스템 및 예산 관리 기능",
      "Docker Compose + Nginx 리버스 프록시 배포 환경 구성",
      "Zustand 상태 관리 및 React 19 호환 Drag & Drop (@hello-pangea/dnd)",
    ],
    images: ["/images/bizsync1.gif", "/images/bizsync2.gif", "/images/bizsync3.gif"],
    github: "https://github.com/parkote9212/bizsync-project",
    status: "completed",
    docs: "https://www.notion.so/BizSync-2e9800a6a897803fa490f6a061179510?source=copy_link",
    site: "http://54.180.155.0",
    featured: true,
    period: "2026.01 - 2026.01",
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
    status: "completed",
    docs: "https://www.notion.so/Side-Proj-2e2800a6a89781748b7bf8648d5f8efe?source=copy_link",
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
    github: "https://github.com/parkote9212/fitneeds",
    docs: "https://www.notion.so/FITNEES-2f6800a6a897805f80a4dacc92d7fc57?source=copy_link",
    status: "in-progress",
    featured: false,
    period: "2025.11 - 2026.01",
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
  "AWS EC2":
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  "AWS RDS":
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  "AWS ECR":
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  "GitHub Actions":
    "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400",
};

// 태그 색상 가져오기 (기본값 포함)
export const getTagColor = (tag: string): string => {
  return (
    tagColors[tag] ||
    "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400"
  );
};
