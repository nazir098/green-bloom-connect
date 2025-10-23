/**
 * Image Configuration
 * Centralized configuration for image specifications across the application
 */

export interface ImageSpec {
  width: number;
  height: number;
  aspectRatio: string;
  maxFileSize: string;
  format: string[];
  quality: number;
}

export const IMAGE_SPECS: Record<string, ImageSpec> = {
  // Product listing card images
  productCard: {
    width: 800,
    height: 800,
    aspectRatio: '1:1',
    maxFileSize: '150KB',
    format: ['JPG', 'PNG', 'WebP'],
    quality: 85
  },
  
  // Product detail page main images
  productDetail: {
    width: 1200,
    height: 1200,
    aspectRatio: '1:1',
    maxFileSize: '250KB',
    format: ['JPG', 'PNG', 'WebP'],
    quality: 90
  },
  
  // Thumbnail images
  thumbnail: {
    width: 400,
    height: 400,
    aspectRatio: '1:1',
    maxFileSize: '50KB',
    format: ['JPG', 'PNG', 'WebP'],
    quality: 80
  },
  
  // Hero/banner images
  hero: {
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
    maxFileSize: '400KB',
    format: ['JPG', 'WebP'],
    quality: 85
  }
};

/**
 * Responsive breakpoints for srcset
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1920
};

/**
 * Image loading strategies
 */
export const LOADING_STRATEGY = {
  hero: 'eager' as const,       // Above the fold - load immediately
  productCard: 'lazy' as const, // Below fold - lazy load
  thumbnail: 'lazy' as const,   // Small images - lazy load
  detail: 'eager' as const      // Important content - load immediately
};

/**
 * Image sizes for different viewports
 */
export const SIZES = {
  productCard: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw',
  productDetail: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  thumbnail: '(max-width: 640px) 20vw, 100px',
  hero: '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px'
};

/**
 * Optimization recommendations
 */
export const OPTIMIZATION_TIPS = {
  compression: 'Use tools like TinyPNG, ImageOptim, or Squoosh',
  format: 'Prefer WebP with JPG/PNG fallback for best compatibility',
  naming: 'Use descriptive names: product-name-variant.jpg',
  organization: 'Store in /src/assets/products/ directory',
  testing: 'Test on mobile devices with slow network throttling'
};
