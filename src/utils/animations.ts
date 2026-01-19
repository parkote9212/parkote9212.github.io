// Fade In 애니메이션
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
} as const;

// Fade In Up 애니메이션
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
} as const;

// Fade In Down 애니메이션
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
} as const;

// Fade In Left 애니메이션
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
} as const;

// Fade In Right 애니메이션
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
} as const;

// Scale In 애니메이션
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
} as const;

// Stagger Container 애니메이션
export const staggerContainer = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.1,
    },
  },
} as const);

// Stagger Item 애니메이션
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
} as const;

// 호버 효과 - Scale
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
};

// 호버 효과 - Lift (카드)
export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

// 탭 효과
export const tapScale = {
  scale: 0.95,
};

// Viewport 설정 (한 번만 실행)
export const viewportOnce = {
  once: true,
  margin: '-100px',
};

// Viewport 설정 (여러 번 실행)
export const viewport = {
  once: false,
  margin: '-50px',
};
