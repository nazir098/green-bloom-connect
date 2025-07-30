import { useState, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  }, [cartItems]);

  const sendToWhatsApp = useCallback(() => {
    if (cartItems.length === 0) return;

    const message = `Hello! I'd like to order these herbal products:\n\n${cartItems.map(item => 
      `${item.name}\nQuantity: ${item.quantity}\nPrice: ${item.price} each\n`
    ).join('\n')}Total: $${getCartTotal().toFixed(2)}\n\nPlease let me know the next steps. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, [cartItems, getCartTotal]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    sendToWhatsApp,
    cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
  };
};