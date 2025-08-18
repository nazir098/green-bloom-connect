import { useState } from "react";
import { X } from "lucide-react";
import ProductCard from "./ProductCard";
import turmericImage from "@/assets/turmeric.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";
import gingerImage from "@/assets/ginger.jpg";
import garlicImage from "@/assets/garlic.jpg";
import moringaImage from "@/assets/moringa.jpg";
import blackPepperImage from "@/assets/black-pepper.jpg";
import cinnamonImage from "@/assets/cinnamon.jpg";
import spirulinaImage from "@/assets/spirulina.jpg";

interface AllProductsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllProducts = ({ isOpen, onClose }: AllProductsProps) => {
  const allProducts = [
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
    },
    {
      id: "4",
      name: "Fresh Ginger Powder",
      description: "Pure organic ginger root powder to support digestive health and natural immunity.",
      image: gingerImage,
      price: "$21.99",
      rating: 4.6,
      isOrganic: true,
      benefits: ["Digestive Health", "Anti-nausea", "Immunity"]
    },
    {
      id: "5",
      name: "Organic Garlic Powder",
      description: "Premium garlic powder rich in allicin for cardiovascular health and immune support.",
      image: garlicImage,
      price: "$16.99",
      originalPrice: "$19.99",
      rating: 4.5,
      isOrganic: true,
      benefits: ["Heart Health", "Immunity", "Antibacterial"]
    },
    {
      id: "6",
      name: "Moringa Leaf Powder",
      description: "Nutrient-dense moringa leaves packed with vitamins, minerals, and essential amino acids.",
      image: moringaImage,
      price: "$28.99",
      rating: 4.8,
      isOrganic: true,
      benefits: ["Superfood", "Energy", "Nutrition"]
    },
    {
      id: "7",
      name: "Black Pepper Powder",
      description: "Premium black pepper powder to enhance nutrient absorption and add natural flavor.",
      image: blackPepperImage,
      price: "$14.99",
      rating: 4.4,
      isOrganic: true,
      benefits: ["Bioavailability", "Digestion", "Flavor"]
    },
    {
      id: "8",
      name: "Ceylon Cinnamon Powder",
      description: "True Ceylon cinnamon powder for blood sugar support and natural sweetness.",
      image: cinnamonImage,
      price: "$26.99",
      originalPrice: "$31.99",
      rating: 4.7,
      isOrganic: true,
      benefits: ["Blood Sugar", "Antioxidant", "Natural Sweetener"]
    },
    {
      id: "9",
      name: "Spirulina Powder",
      description: "Pure spirulina algae powder packed with protein, vitamins, and essential nutrients.",
      image: spirulinaImage,
      price: "$34.99",
      rating: 4.6,
      isOrganic: true,
      benefits: ["Protein", "Energy", "Detox"]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">All Products</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;