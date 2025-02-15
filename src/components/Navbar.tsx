
import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair font-bold">
            SHIRTS<span className="text-primary">MATTER</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Shop</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-primary transition-colors">
              <ShoppingBag size={20} />
            </button>
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
              <a href="#" className="hover:text-primary transition-colors">Shop</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
