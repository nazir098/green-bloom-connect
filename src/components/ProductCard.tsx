import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, Leaf, ShoppingCart } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";
import { CartPopup } from "./CartPopup";
import { useCart } from "@/contexts/CartContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
import { OptimizedImage } from "./OptimizedImage";
import { SIZES } from "@/config/imageConfig";

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
  images?: string[];
}

const ProductCard = (props: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentImageIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  
  const { 
    id,
    name, 
    description, 
    image, 
    images,
    price, 
    originalPrice, 
    rating, 
    isOrganic = true, 
    benefits 
  } = props;

  const displayImages = images && images.length > 0 ? images : [image];

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    setIsCartPopupOpen(true);
  };

  // Generate structured data for this product
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `https://minatherbal.com${image}`,
    "brand": {
      "@type": "Brand",
      "name": "Minnat Herbal"
    },
    "offers": {
      "@type": "Offer",
      "price": price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Minnat Herbal"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "bestRating": "5",
      "ratingCount": "100"
    },
    "category": "Herbal Products"
  };
  return (
    <Card 
      className="group hover:shadow-natural transition-all duration-300 hover:-translate-y-1 bg-card border-border cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* Add structured data for this product */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(productStructuredData)
      }} />
      
      <CardHeader className="p-0">
        <div 
          className="relative overflow-hidden rounded-t-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Carousel for multiple product images */}
          <Carousel 
            className="w-full" 
            onClick={(e) => e.stopPropagation()}
            opts={{
              loop: true,
              align: "start",
              dragFree: false,
              containScroll: "trimSnaps",
            }}
            plugins={displayImages.length > 1 ? [autoplayPlugin.current] : []}
            setApi={setEmblaApi}
          >
            <CarouselContent>
              {displayImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square bg-gradient-to-br from-cream/40 to-herb-green/5 flex items-center justify-center p-4 border border-border/30 shadow-inner">
                    <OptimizedImage
                      src={img} 
                      alt={`${name} - View ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-300"
                      loading="lazy"
                      sizes={SIZES.productCard}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {isOrganic && (
            <Badge className="absolute top-2 left-2 bg-herb-green text-cream text-xs z-10">
              <Leaf className="w-2.5 h-2.5 mr-1" />
              Organic
            </Badge>
          )}
          {displayImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
              {displayImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-4' : 'bg-white/60'
                  }`} 
                />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-2 sm:p-3 md:p-4">
        <div className="flex items-start justify-between mb-1 sm:mb-2">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground line-clamp-1 flex-1 hover:text-herb-green transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-0.5 ml-1">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-herb-light flex-shrink-0" />
            <span className="text-xs text-muted-foreground">{rating}</span>
          </div>
        </div>
        
        {/* Hide description on mobile for compactness */}
        <p className="hidden sm:block text-muted-foreground text-xs mb-2 md:mb-3 line-clamp-2">{description}</p>
        
        {/* Show only 1 benefit on mobile, 2 on larger screens */}
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {benefits.slice(0, 1).map((benefit) => (
            <Badge key={benefit} variant="secondary" className="text-xs">
              {benefit}
            </Badge>
          ))}
          <span className="hidden sm:inline">
            {benefits.slice(1, 2).map((benefit) => (
              <Badge key={benefit} variant="secondary" className="text-xs">
                {benefit}
              </Badge>
            ))}
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <span className="text-base sm:text-lg md:text-xl font-bold text-herb-green">{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-2 sm:p-3 md:p-4 pt-0">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
          variant="herbal" 
          size="sm"
          className="w-full flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9"
        >
          <ShoppingCart className="w-3 h-3" />
          Add to Cart
        </Button>
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