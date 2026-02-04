/**
 * Framer Motion용 공통 애니메이션 variants 및 viewport 설정.
 * 섹션/카드/리스트 등에서 재사용할 수 있습니다.
 */

/** hidden → visible 페이드 인 (opacity만) */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
} as const;

/** 아래에서 위로 페이드 인 (opacity + y) */
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} as const;

/** 위에서 아래로 페이드 인 */
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} as const;

/** 왼쪽에서 오른쪽으로 페이드 인 */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
} as const;

/** 오른쪽에서 왼쪽으로 페이드 인 */
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
} as const;

/** 스케일 인 (작게 → 원래 크기) */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
} as const;

/**
 * 자식 요소를 순차적으로 등장시키는 컨테이너용 variants.
 * @param staggerChildren - 자식 간 지연(초)
 * @returns framer-motion variants 객체
 */
export const staggerContainer = (staggerChildren = 0.1) =>
  ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren: 0.1 },
    },
  }) as const;

/** staggerContainer와 함께 쓰는 자식용 variants (아래에서 위로) */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
} as const;

/** 호버 시 살짝 확대 (버튼 등) */
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: 'easeInOut' },
};

/** 호버 시 살짝 떠오르는 효과 (카드) */
export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3, ease: 'easeOut' },
};

/** 탭 시 눌리는 효과 */
export const tapScale = {
  scale: 0.95,
};

/** useInView / whileInView: 한 번만 애니메이션 실행, 상단 100px 여유 */
export const viewportOnce = {
  once: true,
  margin: '-100px',
};

/** useInView / whileInView: 매번 실행, 상단 50px 여유 */
export const viewport = {
  once: false,
  margin: '-50px',
};
