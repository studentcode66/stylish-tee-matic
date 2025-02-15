
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "@/types/product";
import { addToCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Normally this would fetch from an API
  const product: Product = {
    id: parseInt(id || "1"),
    name: "The Classic White",
    price: 129,
    description: "A timeless classic that never goes out of style. Made from premium cotton with a modern fit.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"],
    stock: 10
  };

  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Size and color are required",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full rounded-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold">
                  {product.name}
                </h1>
                <p className="mt-4 text-2xl text-primary">
                  ${product.price}
                </p>
              </div>

              <p className="text-muted-foreground">
                {product.description}
              </p>

              <div>
                <h3 className="font-medium mb-4">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border ${
                        selectedSize === size 
                          ? "border-primary text-primary" 
                          : "border-muted text-muted-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border ${
                        selectedColor === color 
                          ? "border-primary text-primary" 
                          : "border-muted text-muted-foreground hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-full border border-muted hover:border-primary"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 rounded-full border border-muted hover:border-primary"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </button>

              {product.stock <= 5 && (
                <p className="text-sm text-red-500">
                  Only {product.stock} left in stock!
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
