import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, sendToWhatsApp, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Your cart is empty</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Your Cart
          <Badge variant="secondary">{cartItems.length} items</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{item.name}</h4>
              <p className="text-herb-green font-semibold">{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total: </span>
            <span className="text-2xl font-bold text-herb-green">${getCartTotal().toFixed(2)}</span>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="herbal" 
              className="flex-1 flex items-center gap-2"
              onClick={sendToWhatsApp}
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;