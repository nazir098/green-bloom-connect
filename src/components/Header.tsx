import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail } from "lucide-react";
import ProductSearch from "./ProductSearch";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCart = () => {
    const cartElement = document.querySelector('[data-cart-section]');
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add a subtle highlight effect
      cartElement.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');
      setTimeout(() => {
        cartElement.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
      }, 2000);
    }
  };
  return (
<header className="bg-background/95 backdrop-blur-md border-b border-green-200 sticky top-0 z-50 shadow-sm">
  <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
    <div className="flex items-center justify-between">
      
      {/* Logo + Brand Name - Smaller on mobile */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-green-700 italic tracking-wide drop-shadow-sm">
          Minnat Herbal
        </span>
      </div>

      {/* Navigation & Search */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
          <a href="#home" className="text-foreground hover:text-green-600 transition-colors font-medium">
            Home
          </a>
          <a href="#products" className="text-foreground hover:text-green-600 transition-colors font-medium">
            Products
          </a>
          <a href="#about" className="text-foreground hover:text-green-600 transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-green-600 transition-colors font-medium">
            Contact
          </a>
        </nav>
        
        {/* Search Component - Hidden on mobile, icon only on tablet */}
        <div className="hidden md:block">
          <ProductSearch />
        </div>
      </div>

      {/* Buttons - Compact on mobile */}
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
        {/* Hide on mobile, keep on desktop */}
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden lg:flex border-green-600 text-green-700 hover:bg-green-50"
          onClick={() => scrollToSection('contact')}
        >
          <Phone className="w-4 h-4 mr-1" />
          Contact
        </Button>
        
        {/* Cart button - Hide on mobile (bottom nav will handle it) */}
        <Button 
          variant="herbal" 
          size="sm"
          className="hidden md:flex bg-green-600 hover:bg-green-700 text-white shadow-md relative"
          onClick={scrollToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Cart
          {cartCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-red-500 hover:bg-red-600 flex items-center justify-center">
              {cartCount}
            </Badge>
          )}
        </Button>
      </div>

    </div>
  </div>
</header>

  );
};

export default Header;
