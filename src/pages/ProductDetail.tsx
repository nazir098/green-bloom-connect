import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Leaf, ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import MobileBottomNav from "@/components/MobileBottomNav";
import { getProductById } from "@/data/products";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const product = getProductById(id || "");

  // Scroll to top when product changes, without auto-scrolling during page interaction
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Sync carousel with selected image index
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setSelectedImageIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const displayImages = product?.images && product.images.length > 0 ? product.images : [product?.image || ""];

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")} variant="herbal">
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const element = document.getElementById('products');
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Product Images Carousel - Optimized for mobile */}
          <div className="space-y-4">
            {/* Main Image Carousel */}
            <div className="relative overflow-hidden rounded-lg">
              <Carousel className="w-full" opts={{ loop: true }} setApi={setCarouselApi}>
                <CarouselContent>
                  {displayImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img 
                          src={img} 
                          alt={`${product.name} - View ${index + 1}`}
                          className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg cursor-zoom-in"
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
                <Badge className="absolute top-3 left-3 bg-herb-green text-cream z-10">
                  <Leaf className="w-3 h-3 mr-1" />
                  Organic
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {displayImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {displayImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      carouselApi?.scrollTo(index);
                    }}
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
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-herb-light" />
                  <span className="font-medium text-sm sm:text-base">{product.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm sm:text-base">({product.reviews || 0} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-herb-green">{product.price}</span>
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-muted-foreground line-through">{product.originalPrice}</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.fullDescription || product.description}</p>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit) => (
                  <Badge key={benefit} variant="secondary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="herbal" 
                className="flex-1 flex items-center gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Cart Section */}
        <div className="mt-16">
          <Cart />
        </div>

        {/* Additional Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Ingredients</h3>
              <ul className="space-y-2 text-muted-foreground">
                {product.ingredients?.map((ingredient, index) => (
                  <li key={index} className="text-sm">• {ingredient}</li>
                )) || <li className="text-sm">No ingredients listed</li>}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Usage Instructions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.usage}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Origin</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.origin}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
      
      {/* Sticky Add to Cart button for mobile */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 p-3 bg-background/95 backdrop-blur-md border-t border-border z-30">
        <Button 
          variant="herbal" 
          className="w-full flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart - {product.price}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;