import { X } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

interface AllProductsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllProducts = ({ isOpen, onClose }: AllProductsProps) => {

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                images={product.images}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                benefits={product.benefits}
                ingredients={product.ingredients}
                usage={product.usage}
                origin={product.origin}
                isOrganic={product.isOrganic}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;