import { Home, Package, ShoppingCart, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCart = () => {
    const cartElement = document.querySelector('[data-cart-section]');
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 shadow-lg">
      <div className="grid grid-cols-4 h-16">
        <button
          onClick={() => scrollToSection('home')}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-herb-green transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={() => scrollToSection('products')}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-herb-green transition-colors"
        >
          <Package className="w-5 h-5" />
          <span className="text-xs font-medium">Products</span>
        </button>

        <button
          onClick={scrollToCart}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-herb-green transition-colors relative"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-xs font-medium">Cart</span>
          {cartCount > 0 && (
            <Badge className="absolute top-1 right-6 h-5 w-5 p-0 text-xs bg-red-500 flex items-center justify-center">
              {cartCount}
            </Badge>
          )}
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-herb-green transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Contact</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
