import { Button } from "@/components/ui/button";
import { Leaf, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-herbs.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Natural herbs and botanicals" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-herb-green/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-herb-light" />
            <span className="text-herb-light font-medium">100% Natural & Organic</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight">
            Premium Herbal
            <span className="block text-herb-light">Wellness Products</span>
          </h1>
          
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Discover the power of nature with our carefully curated collection of premium herbal supplements and wellness products. Sourced directly from trusted growers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="herbal" size="lg" className="text-lg px-8">
              Explore Products
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-cream/80">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current text-herb-light" />
              <span>Certified Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-herb-light" />
              <span>Quality Tested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;