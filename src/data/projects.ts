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
    title: "BizSync - 기업형 프로젝트 관리 솔루션",
    description:
      "프로젝트 관리, 칸반 보드, 전자결재, 실시간 채팅을 통합한 팀 협업 플랫폼. WebSocket 기반 실시간 동기화, JWT 인증, Spring AOP 기반 권한 관리, GitHub Actions CI/CD 배포 파이프라인 구축",
    tags: [
      "Spring Boot 3.5",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Zustand",
      "Vite",
      "JPA",
      "MyBatis",
      "WebSocket",
      "JWT",
      "Redis",
      "Spring Batch",
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
      "Redis 분산 락으로 예산 차감 동시성 제어",
      "다단계 결재 라인 시스템 및 예산 관리 기능",
      "Spring Batch 배치 Job 구현",
      "Docker Compose + Nginx 리버스 프록시 배포 환경 구성",
      "Zustand 상태 관리 및 React 19 호환 Drag & Drop (@hello-pangea/dnd)",
    ],
    images: ["/images/bizsync1.gif", "/images/bizsync2.gif", "/images/bizsync3.gif"],
    github: "https://github.com/parkote9212/bizsync-project",
    status: "in-progress",
    docs: "https://www.notion.so/BizSync-2e9800a6a897803fa490f6a061179510?source=copy_link",
    site: "http://54.180.155.0",
    featured: true,
    period: "2026.01 -",
  },
  {
    id: 3,
    title: "FitNeeds - 헬스장 이용권 거래 플랫폼 (팀 프로젝트)",
    description:
      "헬스장 회원권/이용권 거래 중개 플랫폼. 관리자 페이지에서 예약 관리, 이용권 관리, 상품 관리 등 ERP 기능 담당",
    tags: [
      "Spring Boot 3.5",
      "React 18",
      "TypeScript",
      "Bootstrap 5",
      "Redux Toolkit",
      "JPA",
      "MyBatis",
      "Spring Security",
      "JWT",
      "MariaDB",
    ],
    role: "팀 프로젝트 - 풀스택 개발 (관리자 시스템)",
    highlights: [
      "관리자 백엔드: 예약 관리, 이용권 거래 관리, 이용권 관리, 상품 관리 API 개발",
      "관리자 프론트: 전체 페이지 구조 설계 및 레이아웃 구성",
      "공통 CSS 스타일 가이드(erp-common.css) 작성",
      "JPA + MyBatis 하이브리드 데이터 접근 계층 설계",
      "AOP 기반 로깅 및 트랜잭션 관리",
    ],
    images: ["/images/fitneeds1.gif", "/images/fitneeds2.gif", "/images/fitneeds3.gif"],
    github: "https://github.com/parkote9212/fitneeds",
    docs: "https://www.notion.so/FITNEES-2f6800a6a897805f80a4dacc92d7fc57?source=copy_link",
    status: "completed",
    featured: false,
    period: "2025.11 - 2026.01",
  },
  {
    id: 2,
    title: "Side-Proj - 공매 물건 정보 조회 플랫폼",
    description:
      "온비드(OnBid) 공공 API를 활용한 공매 물건 자동 수집 및 지도 기반 시각화 플랫폼. 카카오맵 연동, 통계 대시보드, 스케줄링 기반 데이터 동기화",
    tags: [
      "Spring Boot 3.3",
      "React 18",
      "TypeScript",
      "Recharts",
      "Kakao Map API",
      "MyBatis",
      "AOP",
      "WebClient",
      "ShedLock",
      "MariaDB",
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
    id: 4,
    title: "CODEBASE-QA - RAG 기반 코드 분석 시스템",
    description:
      "로컬 LLM(Ollama)과 벡터 데이터베이스(ChromaDB)를 활용한 개인 코드베이스 질의응답 플랫폼. AST 기반 파싱, ChromaDB 벡터 검색, SSE 스트리밍 응답, Vue 3 + Pinia 프론트엔드",
    tags: [
      "Python 3.11",
      "FastAPI",
      "Vue 3",
      "Ollama",
      "ChromaDB",
      "RAG",
      "sentence-transformers",
      "Pinia",
      "Tailwind CSS v4",
      "Vite",
      "SSE",
      "highlight.js",
    ],
    role: "개인 프로젝트 (풀스택)",
    highlights: [
      "RAG(Retrieval-Augmented Generation) 파이프라인 설계 및 구현 (벡터 검색 + LLM 생성)",
      "ChromaDB 벡터 데이터베이스로 코드 임베딩 저장 및 유사도 검색 (all-MiniLM-L6-v2)",
      "Ollama 로컬 LLM 연동 및 스트리밍 응답 구현 (qwen2.5:3b)",
      "Python AST 기반 코드 파싱 (Java/Python/Vue/JavaScript) 및 청킹 전략",
      "SSE(Server-Sent Events)로 실시간 스트리밍 답변 구현",
      "Vue 3 Composition API + Pinia 상태 관리 (채팅 세션·테마 관리)",
      "Tailwind CSS v4 (@tailwindcss/postcss) 기반 다크/라이트 모드",
      "마크다운 내보내기 및 클립보드 복사 기능 (대화 기록 관리)",
      "프로젝트별 인덱싱 진행률 추적 및 취소 기능 (Thread Lock + 전역 상태)",
      "highlight.js로 코드 블록 신택스 하이라이팅 및 복사 기능",
    ],
    github: "https://github.com/parkote9212/codebase-qa",
    docs: "https://www.notion.so/CODEBASE-QA-2fa800a6a897805caa19e8a3bbc1efe1?source=copy_link",
    status: "completed",
    featured: true,
    period: "2026.02 - 2026.02",
  },
  {
    id: 5,
    title: "Safety AI Agent - 안전에이전트앱",
    description:
      "산업안전보건법 기준 현장 사진 자동 분석 AI 서비스. Claude API로 위험 요소 식별·개선안 스트리밍, RAG 기반 산안법 Q&A, FastAPI + SSE 백엔드.",
    tags: [
      "Python 3.12",
      "FastAPI",
      "Claude API",
      "SSE",
      "ChromaDB",
      "RAG",
    ],
    role: "팀 프로젝트 (2인) - 백엔드·인프라 담당",
    highlights: [
      "SSE 스트리밍 전환으로 첫 응답 0.2초, 토큰 최적화로 비용 40% 절감",
      "버퍼링 + JSON 변환으로 네트워크 요청 99% 감소 (800+ → 4~6회)",
      "타입 안전성 강화(cast 제거), 배포 전 환경변수 검증",
    ],
    docs: "https://www.notion.so/2e4800a6a897814e843ed4ea6790db07",
    status: "in-progress",
    featured: false,
    period: "2026.01 -",
  },
  {
    id: 6,
    title: "AI-QC(기획중)",
    description:
      "AI 기반 품질 관리(QC) 서비스. 기획 단계입니다.",
    tags: ["AI", "QC", "기획중"],
    role: "개인 프로젝트",
    highlights: [],
    docs: "https://www.notion.so/AI-QC-2fd800a6a8978034816cf878550c4540?source=copy_link",
    status: "planned",
    featured: false,
    period: "기획중",
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
      return "기획중";
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
  "Python 3.11":
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  "Python 3.12":
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  "Claude API":
    "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  FastAPI:
    "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400",
  "Vue 3":
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Ollama:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  ChromaDB:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  RAG:
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400",
  AI: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  QC: "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400",
  기획중:
    "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  "sentence-transformers":
    "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
  Pinia:
    "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  "Tailwind CSS v4":
    "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400",
  Vite:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  SSE:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  "highlight.js":
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
};

// 태그 색상 가져오기 (기본값 포함)
export const getTagColor = (tag: string): string => {
  return (
    tagColors[tag] ||
    "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400"
  );
};
