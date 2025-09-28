import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ProductCard from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  original_price?: number;
  rating: number;
  benefits: string[];
  ingredients?: string;
  usage?: string;
  origin?: string;
  is_organic: boolean;
  is_featured: boolean;
}

interface AllProductsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllProducts = ({ isOpen, onClose }: AllProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetchAllProducts();
    }
  }, [isOpen]);

  const fetchAllProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">All Products</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted rounded-lg h-64 mb-4"></div>
                  <div className="bg-muted rounded h-4 mb-2"></div>
                  <div className="bg-muted rounded h-4 w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price.toString()}
                  originalPrice={product.original_price?.toString()}
                  rating={product.rating}
                  benefits={product.benefits || []}
                  ingredients={product.ingredients ? [product.ingredients] : undefined}
                  usage={product.usage}
                  origin={product.origin}
                  isOrganic={product.is_organic}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;