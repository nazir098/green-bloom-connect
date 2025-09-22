import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, Leaf, ShoppingCart } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";
import { CartPopup } from "./CartPopup";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  isOrganic?: boolean;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  origin?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const { addToCart } = useCart();
  
  const { 
    id,
    name, 
    description, 
    image, 
    price, 
    originalPrice, 
    rating, 
    isOrganic = true, 
    benefits 
  } = props;

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    setIsCartPopupOpen(true);
  };
  return (
    <Card className="group hover:shadow-natural transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="aspect-square bg-white flex items-center justify-center p-3">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {isOrganic && (
            <Badge className="absolute top-3 left-3 bg-herb-green text-cream">
              <Leaf className="w-3 h-3 mr-1" />
              Organic
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-base text-foreground line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current text-herb-light" />
            <span className="text-xs text-muted-foreground">{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {benefits.slice(0, 2).map((benefit) => (
            <Badge key={benefit} variant="secondary" className="text-xs">
              {benefit}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-herb-green">{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="space-y-2">
          <Button 
            onClick={handleAddToCart}
            variant="herbal" 
            size="sm"
            className="w-full flex items-center gap-2"
          >
            <ShoppingCart className="w-3 h-3" />
            Add to Cart
          </Button>
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="outline" 
            size="sm"
            className="w-full"
          >
            View Details
          </Button>
        </div>
      </CardFooter>
      
      <ProductDetailModal 
        product={{
          ...props,
          price: price,
          originalPrice: originalPrice,
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <CartPopup
        isOpen={isCartPopupOpen}
        onClose={() => setIsCartPopupOpen(false)}
        addedItem={{
          name,
          image,
          price
        }}
      />
    </Card>
  );
};

export default ProductCard;