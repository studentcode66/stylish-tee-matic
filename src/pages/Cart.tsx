
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem, getCart, updateCartItem, removeFromCart, calculateTotal } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleUpdateQuantity = (itemId: number, quantity: number) => {
    updateCartItem(itemId, { quantity });
    setCart(getCart());
  };

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
    setCart(getCart());
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-8">Your cart is empty</p>
              <button
                onClick={() => navigate("/shop")}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-6 p-4 border border-muted rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-playfair text-xl">{item.name}</h3>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-muted-foreground hover:text-primary"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-muted-foreground mt-2">
                        Size: {item.selectedSize}, Color: {item.selectedColor}
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-2 rounded-full border border-muted hover:border-primary"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                          className="p-2 rounded-full border border-muted hover:border-primary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-primary">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 border border-muted rounded-lg">
                  <h3 className="font-playfair text-xl mb-6">Order Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${calculateTotal(cart)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t border-muted pt-4">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>${calculateTotal(cart)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mt-8"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
