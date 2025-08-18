import { useState } from "react";
import ProductCard from "./ProductCard";
import AllProducts from "./AllProducts";
import turmericImage from "@/assets/turmeric.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";

const ProductGrid = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const products = [
    {
      id: "1",
      name: "Organic Turmeric Powder",
      description: "Premium quality turmeric powder with high curcumin content for natural anti-inflammatory support.",
      image: turmericImage,
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.8,
      isOrganic: true,
      benefits: ["Anti-inflammatory", "Antioxidant", "Joint Health"]
    },
    {
      id: "2", 
      name: "Ashwagandha Root Extract",
      description: "Pure ashwagandha root extract to help manage stress and support overall wellness naturally.",
      image: ashwagandhaImage,
      price: "$32.99",
      rating: 4.9,
      isOrganic: true,
      benefits: ["Stress Relief", "Energy", "Adaptogen"]
    },
    {
      id: "3",
      name: "Premium Green Tea Blend",
      description: "Hand-picked organic green tea leaves rich in antioxidants for daily wellness support.",
      image: greenTeaImage,
      price: "$18.99",
      originalPrice: "$22.99",
      rating: 4.7,
      isOrganic: true,
      benefits: ["Antioxidants", "Metabolism", "Focus"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-herb-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully selected and tested herbal products to support your natural wellness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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