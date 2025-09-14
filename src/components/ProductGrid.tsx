import { useState } from "react";
import ProductCard from "./ProductCard";
import AllProducts from "./AllProducts";
import { featuredProducts } from "@/data/products";

const ProductGrid = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-background via-herb-light/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px bg-herb-green/30 flex-1 max-w-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-herb-green px-4">
              Featured Products
            </h2>
            <div className="h-px bg-herb-green/30 flex-1 max-w-16"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium herbal wellness products for natural health support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllProducts(true)}
            className="bg-gradient-to-r from-herb-green to-herb-light text-cream px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-natural"
          >
            View All Products
          </button>
        </div>
        
        <AllProducts 
          isOpen={showAllProducts} 
          onClose={() => setShowAllProducts(false)} 
        />
      </div>
    </section>
  );
};

export default ProductGrid;