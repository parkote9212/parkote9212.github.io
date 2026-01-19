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
  status: 'completed' | 'in-progress' | 'planned';
  image?: string;
  featured?: boolean;
  period?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BizSync - ERP 통합 관리 시스템',
    description: '실시간 협업 칸반보드 기반 프로젝트 관리 및 ERP 통합 솔루션',
    tags: ['Spring Boot', 'React', 'TypeScript', 'MariaDB', 'Docker'],
    role: '풀스택 개발 (진행 중)',
    highlights: [
      '칸반보드 실시간 업데이트 기능 구현',
      'RESTful API 설계 및 구현',
      'Docker를 활용한 컨테이너화 및 배포',
      'TypeScript로 타입 안정성 확보',
      'MariaDB 데이터베이스 설계 및 최적화',
    ],
    github: 'https://github.com/parkote9212/bizsync-project',
    status: 'in-progress',
    image: '/projects/bizsync.png',
    featured: true,
    period: '2024.01 - 현재',
  },
  {
    id: 2,
    title: 'Safety AI - CCTV 위험 감지 서비스',
    description: 'AI 기반 실시간 CCTV 위험 상황 감지 및 알림 시스템',
    tags: ['Spring Boot', 'Python', 'AWS', 'React', 'AI/ML', 'RDS', 'S3'],
    role: '백엔드 리드 & 인프라',
    highlights: [
      'DB 스키마 설계 및 메인 백엔드 개발 담당',
      'Python AI 모델 서빙 서버 구축',
      'AWS 인프라 구축 (EC2, RDS, S3)',
      '실시간 위험 감지 알림 시스템 구현',
      'RESTful API 설계 및 문서화',
      'ERD 설계 및 데이터베이스 최적화',
    ],
    github: 'https://github.com/parkote9212/safety-ai-report',
    docs: '기획서, API 문서, ERD 포함',
    status: 'completed',
    image: '/projects/safety-ai.png',
    featured: true,
    period: '2024.10 - 2024.12',
  },
  {
    id: 3,
    title: '공공데이터 활용 지역 정보 서비스',
    description: '공공 API를 활용한 실시간 지역 정보 제공 웹 서비스',
    tags: ['Spring Boot', 'React', 'Public API', 'REST API'],
    role: '개인 프로젝트 (풀스택)',
    highlights: [
      '공공데이터 포털 API 연동 및 데이터 가공',
      '반응형 웹 디자인으로 모바일 최적화',
      'REST API 설계 및 구현',
      'Spring Boot 백엔드 서버 구축',
      'React를 활용한 동적 UI 개발',
    ],
    github: 'https://github.com/parkote9212/side-proj',
    status: 'completed',
    image: '/projects/public-data.png',
    period: '2024.08 - 2024.09',
  },
];

// 상태별 프로젝트 필터링
export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter((project) => project.status === status);
};

// Featured 프로젝트 가져오기
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// 특정 태그를 포함하는 프로젝트 가져오기
export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter((project) =>
    project.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

// 상태별 색상 반환
export const getStatusColor = (status: Project['status']): string => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
    case 'in-progress':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
    case 'planned':
      return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
    default:
      return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
  }
};

// 상태별 텍스트 반환
export const getStatusText = (status: Project['status']): string => {
  switch (status) {
    case 'completed':
      return '완료';
    case 'in-progress':
      return '진행 중';
    case 'planned':
      return '예정';
    default:
      return '알 수 없음';
  }
};

// 태그별 색상 매핑
export const tagColors: { [key: string]: string } = {
  'Spring Boot': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  'React': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400',
  'TypeScript': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  'Python': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  'AWS': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
  'Docker': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  'MariaDB': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  'MySQL': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  'AI/ML': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
  'RDS': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
  'S3': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
  'Public API': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400',
  'REST API': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
};

// 태그 색상 가져오기 (기본값 포함)
export const getTagColor = (tag: string): string => {
  return tagColors[tag] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
};
