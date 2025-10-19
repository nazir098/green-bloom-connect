import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartPopup } from "./CartPopup";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  price: string;
  originalPrice?: string;
  rating: number;
  reviews?: number;
  isOrganic?: boolean;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  origin?: string;
}

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [addedItem, setAddedItem] = useState<{ name: string; image: string; price: string } | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    addToCart(item);
    setAddedItem(item);
    setIsCartPopupOpen(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images Carousel */}
          <div className="space-y-4">
            {/* Main Carousel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {displayImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square bg-white rounded-lg p-8 flex items-center justify-center">
                        <img
                          src={img}
                          alt={`${product.name} - View ${index + 1}`}
                          className="w-full h-full object-contain cursor-zoom-in"
                          onClick={() => setSelectedImageIndex(index)}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {displayImages.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>
              {product.isOrganic && (
                <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 z-10">
                  Organic
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {displayImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {displayImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all hover:border-herb-green ${
                      selectedImageIndex === index ? 'border-herb-green ring-2 ring-herb-green' : 'border-border'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground">({product.rating})</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-3">
              <h3 className="font-semibold">Key Benefits:</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <Badge key={index} variant="secondary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {product.ingredients && (
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Ingredients</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>• {ingredient}</li>
                ))}
              </ul>
            </Card>
          )}
          
          {product.usage && (
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Usage Instructions</h3>
              <p className="text-sm text-muted-foreground">{product.usage}</p>
            </Card>
          )}
          
          {product.origin && (
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Origin</h3>
              <p className="text-sm text-muted-foreground">{product.origin}</p>
            </Card>
          )}
        </div>
      </DialogContent>
      
      <CartPopup
        isOpen={isCartPopupOpen}
        onClose={() => setIsCartPopupOpen(false)}
        addedItem={addedItem}
      />
    </Dialog>
  );
};

export default ProductDetailModal;