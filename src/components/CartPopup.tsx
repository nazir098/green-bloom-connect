import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  addedItem?: {
    name: string;
    image: string;
    price: string;
  };
}

export const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose, addedItem }) => {
  const { cartItems, getCartTotal, cartCount } = useCart();

  const handleViewCart = () => {
    onClose();
    // Scroll to cart section
    setTimeout(() => {
      const cartElement = document.querySelector('[data-cart-section]');
      if (cartElement) {
        cartElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Add a subtle highlight effect
        cartElement.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');
        setTimeout(() => {
          cartElement.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
        }, 2000);
      }
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Added to Cart!
          </DialogTitle>
        </DialogHeader>
        
        {addedItem && (
          <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
            <img 
              src={addedItem.image} 
              alt={addedItem.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-medium">{addedItem.name}</h3>
              <p className="text-sm text-muted-foreground">{addedItem.price}</p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Cart Summary</span>
            <span className="text-sm text-muted-foreground">
              {cartCount} item{cartCount !== 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="flex justify-between items-center font-medium">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Continue Shopping
          </Button>
          <Button onClick={handleViewCart} className="flex-1">
            View Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};