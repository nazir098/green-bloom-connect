import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';

// Lazy load pages for code splitting
const Index = lazy(() => import('@/pages/Index'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-herb-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;