import { Button } from "@/components/ui/button";
import { Leaf, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-herbs.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative py-16 md:py-20 bg-gradient-to-br from-herb-green via-herb-green/90 to-herb-light/20">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Natural herbs and botanicals" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-herb-green/60 to-herb-green/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="h-6 w-6 text-herb-light" />
            <span className="text-herb-light font-medium text-lg">Premium Herbal Catalogue</span>
            <Leaf className="h-6 w-6 text-herb-light" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            Nature's Finest
            <span className="block text-herb-light">Wellness Collection</span>
          </h1>
          
          <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
            Discover our curated selection of premium herbal supplements and wellness products, sourced from trusted growers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="herbal" 
              size="lg" 
              className="text-lg px-8 bg-cream text-herb-green hover:bg-cream/90"
              onClick={() => scrollToSection('products')}
            >
              Browse Catalogue
            </Button>
            <div className="flex items-center gap-6 text-cream/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current text-herb-light" />
                <span className="hidden sm:inline">Certified Organic</span>
                <span className="sm:hidden">Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-herb-light" />
                <span className="hidden sm:inline">Quality Tested</span>
                <span className="sm:hidden">Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;