import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, MessageCircle, Mail, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from '@/contexts/CurrencyContext';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface CartDrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const CartDrawer = ({ open, onOpenChange, trigger }: CartDrawerProps) => {
  const { formatPrice } = useCurrency();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, sendToWhatsApp, clearCart } = useCart();

  const sendToEmail = () => {
    if (cartItems.length === 0) return;

    const subject = encodeURIComponent("Herbal Products Order Request");
    const body = encodeURIComponent(`Hello! I'd like to order these herbal products:

${cartItems.map(item => 
  `${item.name}
Quantity: ${item.quantity}
Price: ${item.price} each
`
).join('\n')}Total: $${getCartTotal().toFixed(2)}

Please let me know the next steps for placing this order. Thank you!`);

    const emailUrl = `mailto:aamnaglobal@gmail.com?subject=${subject}&body=${body}`;
    window.open(emailUrl, '_blank');
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-between">
            Your Cart
            <Badge variant="secondary">{cartItems.length} items</Badge>
          </DrawerTitle>
          <DrawerDescription>Review your items and proceed to order</DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y-auto px-4 pb-4 max-h-[50vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-start gap-3 p-3 border border-border rounded-lg bg-card">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground text-sm line-clamp-2">{item.name}</h4>
                    <p className="text-herb-green font-semibold text-sm">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 w-7 p-0"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 w-7 p-0"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <DrawerFooter className="border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-herb-green">{formatPrice(getCartTotal().toString())}</span>
            </div>
            
            <div className="space-y-2">
              <Button 
                variant="herbal" 
                className="w-full flex items-center gap-2"
                onClick={sendToWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
                Order via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2"
                onClick={sendToEmail}
              >
                <Mail className="w-4 h-4" />
                Order via Email
              </Button>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
