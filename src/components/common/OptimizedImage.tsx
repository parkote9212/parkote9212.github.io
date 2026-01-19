import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

const OptimizedImage = ({ src, alt, className = '', fallback }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="relative">
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary-200 dark:bg-secondary-700 animate-pulse rounded" />
      )}

      {/* Optimized Image */}
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
