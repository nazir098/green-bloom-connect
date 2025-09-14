import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.benefits.some(benefit => 
          benefit.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredProducts(filtered.slice(0, 5)); // Limit to 5 results
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setSearchTerm("");
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 bg-background/80 backdrop-blur-sm border-herb-green/20 focus:border-herb-green"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && filteredProducts.length > 0 && (
        <Card className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-md border-herb-green/20 shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="flex items-center gap-3 p-3 hover:bg-herb-light/10 rounded-lg cursor-pointer transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">
                    {product.name}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-herb-green">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {isOpen && filteredProducts.length === 0 && searchTerm && (
        <Card className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-md border-herb-green/20 shadow-lg z-50">
          <div className="p-4 text-center text-muted-foreground">
            No products found for "{searchTerm}"
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProductSearch;