import { Button } from "@/components/ui/button";
import { Leaf, Star, Award, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-herbs.jpg";
import turmericImage from "@/assets/turmeric.jpg";
import gingerImage from "@/assets/ginger.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import moringaImage from "@/assets/moringa.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const herbalImages = [
    { src: heroImage, alt: "Premium herbal collection", title: "Ancient Wisdom, Modern Wellness" },
    { src: turmericImage, alt: "Golden turmeric root", title: "Golden Turmeric Excellence" },
    { src: gingerImage, alt: "Fresh ginger root", title: "Energizing Ginger Power" },
    { src: ashwagandhaImage, alt: "Ashwagandha herbs", title: "Adaptogenic Ashwagandha" },
    { src: moringaImage, alt: "Moringa leaves", title: "Superfood Moringa Leaves" }
  ];

  return (
    <section id="home" className="relative py-12 md:py-16 bg-gradient-to-br from-herb-green via-herb-green/95 to-herb-light/30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="h-8 w-8 text-herb-light animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Leaf className="h-12 w-12 text-herb-light animate-pulse" />
      </div>
      
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <Carousel 
          className="w-full h-full"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full">
            {herbalImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-herb-green/70 via-herb-green/60 to-herb-light/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-herb-green/80 via-transparent to-transparent"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="h-7 w-7 text-herb-light animate-pulse" />
            <span className="text-herb-light font-semibold text-xl tracking-wide">Healing the world, naturallyl</span>
            <Leaf className="h-7 w-7 text-herb-light animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cream to-herb-light bg-clip-text text-transparent">
              Ancient Ayurvedic
            </span>
            <span className="block text-herb-light drop-shadow-lg">Herbal Treasures</span>
          </h1>
          
          <p className="text-xl text-cream/95 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the profound healing wisdom of Ayurveda with our handpicked collection of 
            premium herbs and botanicals, sustainably sourced from pristine regions across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              variant="herbal" 
              size="lg" 
              className="text-lg px-10 py-4 bg-gradient-to-r from-cream to-herb-light text-herb-green hover:from-herb-light hover:to-cream font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('products')}
            >
              Explore Sacred Herbs
            </Button>
            <div className="flex items-center gap-8 text-cream/90">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-6 h-6 fill-current text-herb-light" />
                <span className="font-medium">100% Organic</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-6 h-6 text-herb-light" />
                <span className="font-medium">Lab Tested</span>
              </div>
            </div>
          </div>
          
          <div className="text-herb-light/80 text-sm font-medium tracking-wider">
            ✨ Trusted by Ayurvedic practitioners for over 20 years ✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;