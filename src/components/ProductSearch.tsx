import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import turmericImage from "@/assets/turmeric.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";
import gingerImage from "@/assets/ginger.jpg";
import garlicImage from "@/assets/garlic.jpg";
import moringaImage from "@/assets/moringa.jpg";
import blackPepperImage from "@/assets/black-pepper.jpg";
import cinnamonImage from "@/assets/cinnamon.jpg";
import spirulinaImage from "@/assets/spirulina.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  isOrganic: boolean;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  origin?: string;
}

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allProducts: Product[] = [
    {
      id: "1",
      name: "Organic Turmeric Powder",
      description: "Premium quality turmeric powder with high curcumin content for natural anti-inflammatory support.",
      image: turmericImage,
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.8,
      isOrganic: true,
      benefits: ["Anti-inflammatory", "Antioxidant", "Joint Health"],
      ingredients: ["100% Organic Turmeric Root (Curcuma longa)"],
      usage: "Mix 1/2 teaspoon in warm milk or water, take twice daily",
      origin: "Sourced from organic farms in India"
    },
    {
      id: "2", 
      name: "Ashwagandha Root Extract",
      description: "Pure ashwagandha root extract to help manage stress and support overall wellness naturally.",
      image: ashwagandhaImage,
      price: "$32.99",
      rating: 4.9,
      isOrganic: true,
      benefits: ["Stress Relief", "Energy", "Adaptogen"],
      ingredients: ["Organic Ashwagandha Root Extract (Withania somnifera)"],
      usage: "Take 1 capsule daily with food or as directed by healthcare provider",
      origin: "Ethically sourced from India"
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
      benefits: ["Antioxidants", "Metabolism", "Focus"],
      ingredients: ["Organic Green Tea Leaves (Camellia sinensis)"],
      usage: "Steep 1 teaspoon in hot water for 3-5 minutes, enjoy 2-3 cups daily",
      origin: "Premium gardens of Darjeeling, India"
    },
    {
      id: "4",
      name: "Fresh Ginger Powder",
      description: "Pure organic ginger root powder to support digestive health and natural immunity.",
      image: gingerImage,
      price: "$21.99",
      rating: 4.6,
      isOrganic: true,
      benefits: ["Digestive Health", "Anti-nausea", "Immunity"],
      ingredients: ["100% Organic Ginger Root (Zingiber officinale)"],
      usage: "Add 1/4 teaspoon to tea, smoothies, or cooking",
      origin: "Organically grown in India"
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
      benefits: ["Heart Health", "Immunity", "Antibacterial"],
      ingredients: ["100% Organic Garlic (Allium sativum)"],
      usage: "Use in cooking or mix 1/4 teaspoon in water",
      origin: "Certified organic farms"
    },
    {
      id: "6",
      name: "Moringa Leaf Powder",
      description: "Nutrient-dense moringa leaves packed with vitamins, minerals, and essential amino acids.",
      image: moringaImage,
      price: "$28.99",
      rating: 4.8,
      isOrganic: true,
      benefits: ["Superfood", "Energy", "Nutrition"],
      ingredients: ["100% Organic Moringa Leaves (Moringa oleifera)"],
      usage: "Mix 1 teaspoon in smoothies, juice, or yogurt daily",
      origin: "Sustainably harvested from India"
    },
    {
      id: "7",
      name: "Black Pepper Powder",
      description: "Premium black pepper powder to enhance nutrient absorption and add natural flavor.",
      image: blackPepperImage,
      price: "$14.99",
      rating: 4.4,
      isOrganic: true,
      benefits: ["Bioavailability", "Digestion", "Flavor"],
      ingredients: ["100% Organic Black Pepper (Piper nigrum)"],
      usage: "Use as seasoning or mix with other herbs for enhanced absorption",
      origin: "Premium spice gardens of Kerala, India"
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
      benefits: ["Blood Sugar", "Antioxidant", "Natural Sweetener"],
      ingredients: ["100% Ceylon Cinnamon Bark (Cinnamomum verum)"],
      usage: "Add 1/2 teaspoon to beverages, oatmeal, or baking",
      origin: "Authentic Ceylon cinnamon from Sri Lanka"
    },
    {
      id: "9",
      name: "Spirulina Powder",
      description: "Pure spirulina algae powder packed with protein, vitamins, and essential nutrients.",
      image: spirulinaImage,
      price: "$34.99",
      rating: 4.6,
      isOrganic: true,
      benefits: ["Protein", "Energy", "Detox"],
      ingredients: ["100% Pure Spirulina (Spirulina platensis)"],
      usage: "Mix 1-2 teaspoons in smoothies or juice daily",
      origin: "Cultivated in controlled freshwater environments"
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.benefits.some(benefit => 
          benefit.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredProducts(filtered.slice(0, 5)); // Limit to 5 results
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setSearchTerm("");
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 bg-background/80 backdrop-blur-sm border-herb-green/20 focus:border-herb-green"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && filteredProducts.length > 0 && (
        <Card className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-md border-herb-green/20 shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="flex items-center gap-3 p-3 hover:bg-herb-light/10 rounded-lg cursor-pointer transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">
                    {product.name}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-herb-green">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {isOpen && filteredProducts.length === 0 && searchTerm && (
        <Card className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-md border-herb-green/20 shadow-lg z-50">
          <div className="p-4 text-center text-muted-foreground">
            No products found for "{searchTerm}"
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProductSearch;