import { Button } from "@/components/ui/button";
import { Leaf, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { set } from "date-fns";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-herb-green" />
            <span className="text-2xl font-bold text-foreground">HerbalBliss</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-herb-green transition-colors">Home</a>
            <a href="#products" className="text-foreground hover:text-herb-green transition-colors">Products</a>
            <a href="#about" className="text-foreground hover:text-herb-green transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-herb-green transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4" />
              Contact
            </Button>
            <Button variant="herbal" size="sm">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;