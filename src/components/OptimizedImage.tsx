import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

/**
 * Optimized Image Component
 * Handles lazy loading, progressive loading, and loading states
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  loading = "lazy",
  priority = false,
  sizes,
  onLoad
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          error && "opacity-50",
          className
        )}
        decoding="async"
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};
