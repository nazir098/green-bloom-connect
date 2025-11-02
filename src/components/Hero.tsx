import { Button } from "@/components/ui/button";
import { Leaf, Star, Award, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-herbs.jpg";
import Autoplay from "embla-carousel-autoplay";
import { OptimizedImage } from "./OptimizedImage";
import { SIZES } from "@/config/imageConfig";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const herbalImages = [
    { src: heroImage, alt: "Premium herbal collection", title: "Ancient Wisdom, Modern Wellness" },
    ...products.slice(0, 4).map(product => ({
      src: product.image,
      alt: product.name,
      title: product.name
    }))
  ];

  return (
    <section id="home" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-br from-herb-green via-herb-green/95 to-herb-light/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Brand Logo - Smaller on mobile */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 lg:mb-8 animate-fade-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e5b20330-587d-421f-889d-efa0d47aa01f.png" 
                  alt="Minnat Herbal - Premium Ayurvedic Herbs" 
                  className="h-12 sm:h-16 lg:h-20 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-herb-light/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
            
            {/* Hide tagline on mobile for compactness */}
            <div className="hidden sm:flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6 animate-fade-in">
              <Leaf className="h-5 w-5 lg:h-7 lg:w-7 text-herb-light animate-pulse" />
              <span className="text-herb-light font-semibold text-sm lg:text-xl italic tracking-widest">
                {t('hero.tagline')}
              </span>
            </div>
            
            {/* Responsive heading sizes */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-3 sm:mb-4 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-cream to-herb-light bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
              <span className="block text-herb-light drop-shadow-lg">{t('hero.subtitle')}</span>
            </h1>
            
            {/* Shorter description on mobile */}
            <p className="text-sm sm:text-base lg:text-lg text-cream/95 mb-4 sm:mb-6 lg:mb-8 leading-relaxed animate-fade-in line-clamp-3 sm:line-clamp-none">
              {t('hero.description')}
            </p>
            
            {/* Smaller CTA on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 sm:mb-6 lg:mb-8 animate-fade-in">
              <Button 
                variant="herbal" 
                size="lg" 
                className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-cream to-herb-light text-herb-green hover:from-herb-light hover:to-cream font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                onClick={() => scrollToSection('products')}
              >
                {t('hero.cta')}
              </Button>
            </div>
            
            {/* Compact trust badges on mobile */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 lg:gap-8 text-cream/90 animate-fade-in">
              <div className="flex items-center gap-1.5 sm:gap-3 bg-white/10 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm hover-scale">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-current text-herb-light" />
                <span className="font-medium text-xs sm:text-sm lg:text-base">{t('hero.organic')}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-3 bg-white/10 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm hover-scale">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-herb-light" />
                <span className="font-medium text-xs sm:text-sm lg:text-base">{t('hero.labTested')}</span>
              </div>
            </div>
            
            {/* Hide on mobile */}
            <div className="hidden sm:block text-herb-light/80 text-xs sm:text-sm font-medium tracking-wider mt-4 sm:mt-6 animate-fade-in">
              ✨ {t('hero.trustBadge')} ✨
            </div>
          </div>

          {/* Carousel Card Section - Hidden on mobile for compactness */}
          <div className="hidden lg:flex justify-center animate-scale-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 opacity-20">
                <Sparkles className="h-8 w-8 text-herb-light animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-20">
                <Leaf className="h-8 w-8 text-herb-light animate-pulse" />
              </div>
              
              <Carousel 
                className="w-full"
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {herbalImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-herb-light/20 hover-scale transition-all duration-500">
                        <OptimizedImage
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover object-center transition-transform duration-700"
                          loading={index === 0 ? "eager" : "lazy"}
                          priority={index === 0}
                          sizes={SIZES.hero}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-herb-green/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-cream font-semibold text-lg drop-shadow-lg animate-fade-in">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover-scale" />
                <CarouselNext className="right-2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover-scale" />
              </Carousel>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;