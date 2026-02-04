import { useState } from 'react';
import { motion } from 'framer-motion';

/** OptimizedImage 컴포넌트 props */
interface OptimizedImageProps {
  /** 이미지 URL */
  src: string;
  /** 대체 텍스트 (접근성) */
  alt: string;
  /** 적용할 CSS 클래스 */
  className?: string;
  /** 로드 실패 시 표시할 fallback 노드 */
  fallback?: React.ReactNode;
}

/**
 * lazy 로딩, 로드 시 페이드인, 스켈레톤, 에러 fallback을 지원하는 이미지 컴포넌트.
 * Projects 등 목록/카드 이미지에 사용하면 체감 로딩 품질을 개선할 수 있습니다.
 *
 * @param props - src, alt, className, fallback
 */
const OptimizedImage = ({ src, alt, className = '', fallback }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary-200 dark:bg-secondary-700 animate-pulse rounded" />
      )}

      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default OptimizedImage;
