import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

/** ScrollReveal 컴포넌트 props */
interface ScrollRevealProps {
  /** 래핑할 자식 노드 */
  children: ReactNode;
  /** framer-motion variants (hidden / visible 등) */
  variants?: Variants;
  /** 애니메이션 지연(초) */
  delay?: number;
  /** 래퍼에 적용할 CSS 클래스 */
  className?: string;
}

/** 스크롤 시 한 번만 보이면 되는 기본 variants */
const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * 뷰포트에 들어왔을 때 한 번만 애니메이션으로 노출하는 래퍼.
 * useInView + margin으로 스크롤 시점을 조절합니다.
 *
 * @param props - children, variants, delay, className
 */
const ScrollReveal = ({
  children,
  variants = defaultVariants,
  delay = 0,
  className = '',
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
