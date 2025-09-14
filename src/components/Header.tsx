import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { set } from "date-fns";
import ProductSearch from "./ProductSearch";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
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
  <div className="container mx-auto px-4 py-3">
    <div className="flex items-center justify-between">
      
      {/* Logo + Brand Name */}
      <div className="flex items-center gap-2">
{/*         <img 
          src="/lovable-uploads/3bda1951-e127-4971-8585-37f1e595cbf4.png" 
          alt="Minnat Herbal Logo" 
          className="h-9 w-9 drop-shadow-sm" 
        /> */}
        <span className="text-3xl font-serif font-bold text-green-700 italic tracking-wide drop-shadow-sm">
          Minnat Herbal
        </span>
      </div>

      {/* Navigation & Search */}
      <div className="flex items-center gap-6">
        <nav className="hidden lg:flex items-center gap-8">
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
        
        {/* Search Component */}
        <div className="hidden md:block">
          <ProductSearch />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden sm:flex border-green-600 text-green-700 hover:bg-green-50"
          onClick={() => scrollToSection('contact')}
        >
          <Phone className="w-4 h-4 mr-1" />
          Contact
        </Button>
        <Button 
          variant="herbal" 
          size="sm"
          className="bg-green-600 hover:bg-green-700 text-white shadow-md relative"
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
