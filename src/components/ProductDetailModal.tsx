import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isOrganic?: boolean;
  benefits: string[];
  ingredients?: string;
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
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: `₹${product.price}`,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.isOrganic && (
                <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">
                  Organic
                </Badge>
              )}
            </div>
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
                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
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
              <p className="text-sm text-muted-foreground">{product.ingredients}</p>
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
    </Dialog>
  );
};

export default ProductDetailModal;