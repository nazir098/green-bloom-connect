import { Button } from "@/components/ui/button";
import { Leaf, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { set } from "date-fns";
import ProductSearch from "./ProductSearch";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
<header className="bg-background/95 backdrop-blur-md border-b border-green-200 sticky top-0 z-50 shadow-sm">
  <div className="container mx-auto px-4 py-3">
    <div className="flex items-center justify-between">
      
      {/* Logo + Brand Name */}
      <div className="flex items-center gap-2">
        <Leaf className="h-9 w-9 text-green-600 drop-shadow-sm" />
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
          className="bg-green-600 hover:bg-green-700 text-white shadow-md"
          onClick={() => scrollToSection('products')}
        >
          Shop Now
        </Button>
      </div>

    </div>
  </div>
</header>

  );
};

export default Header;