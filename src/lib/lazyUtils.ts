/**
 * Utility functions for optimized lazy loading
 */

/**
 * Preload a lazy component before it's needed
 * Usage: preloadComponent(() => import('./HeavyComponent'))
 */
export const preloadComponent = (importFunc: () => Promise<any>) => {
  importFunc();
};

/**
 * Lazy load with retry logic for better reliability
 */
export const lazyWithRetry = (
  componentImport: () => Promise<any>,
  retries = 3,
  interval = 1000
) => {
  return new Promise((resolve, reject) => {
    const retry = async (n: number) => {
      try {
        const component = await componentImport();
        resolve(component);
      } catch (error) {
        if (n <= 1) {
          reject(error);
        } else {
          setTimeout(() => retry(n - 1), interval);
        }
      }
    };
    retry(retries);
  });
};
