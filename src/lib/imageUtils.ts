/**
 * Image Optimization Utilities
 * Provides functions for responsive images, lazy loading, and performance optimization
 */

export interface ImageSource {
  src: string;
  width: number;
  type?: string;
}

/**
 * Generate srcset string for responsive images
 */
export const generateSrcSet = (imagePath: string, sizes: number[]): string => {
  return sizes
    .map(size => `${imagePath} ${size}w`)
    .join(', ');
};

/**
 * Get optimized image sizes based on viewport
 */
export const getResponsiveSizes = (type: 'card' | 'detail' | 'thumbnail' | 'hero'): string => {
  const sizeMap = {
    card: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw',
    detail: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
    thumbnail: '(max-width: 640px) 20vw, 100px',
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px'
  };
  
  return sizeMap[type];
};

/**
 * Check if WebP is supported
 */
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

/**
 * Get WebP alternative path if available
 */
export const getWebPPath = (imagePath: string): string => {
  if (!supportsWebP()) return imagePath;
  return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
};

/**
 * Create low-quality placeholder for blur-up effect
 */
export const getLQIP = (imagePath: string): string => {
  // In production, this would return a tiny version of the image
  // For now, we'll use a CSS gradient as placeholder
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3C/svg%3E';
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Check if image meets recommended specifications
 */
export const validateImageSize = (
  width: number,
  height: number,
  type: 'card' | 'detail' | 'thumbnail' | 'hero'
): { valid: boolean; message?: string } => {
  const specs = {
    card: { width: 800, height: 800, tolerance: 0.1 },
    detail: { width: 1200, height: 1200, tolerance: 0.1 },
    thumbnail: { width: 400, height: 400, tolerance: 0.1 },
    hero: { width: 1920, height: 1080, tolerance: 0.1 }
  };
  
  const spec = specs[type];
  const widthDiff = Math.abs(width - spec.width) / spec.width;
  const heightDiff = Math.abs(height - spec.height) / spec.height;
  
  if (widthDiff > spec.tolerance || heightDiff > spec.tolerance) {
    return {
      valid: false,
      message: `Image dimensions ${width}x${height} don't match recommended ${spec.width}x${spec.height}`
    };
  }
  
  return { valid: true };
};

/**
 * Lazy load image with intersection observer
 */
export const useLazyLoad = (threshold = 0.1) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return { loading: 'eager' as const };
  }
  
  return { loading: 'lazy' as const };
};
