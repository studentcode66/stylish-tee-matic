
import { Menu, ShoppingBag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart } from "@/lib/cart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-playfair font-bold">
            SHIRTS<span className="text-primary">MATTER</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Link to="#" className="hover:text-primary transition-colors">About</Link>
            <Link to="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="p-2 hover:text-primary transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="p-2 hover:text-primary transition-colors">
              <User size={20} />
            </button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
              <Link to="#" className="hover:text-primary transition-colors">About</Link>
              <Link to="#" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
