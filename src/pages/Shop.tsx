
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "The Classic White",
      price: 129,
      description: "A timeless classic that never goes out of style.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Light Blue", "Pink"],
      stock: 10
    },
    {
      id: 2,
      name: "Midnight Navy",
      price: 149,
      description: "Perfect for evening occasions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "Black", "Gray"],
      stock: 8
    },
    {
      id: 3,
      name: "Slate Gray",
      price: 139,
      description: "Modern and versatile.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Charcoal", "Black"],
      stock: 15
    },
  ]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">
            Our Collection
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <a href={`/product/${product.id}`}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-playfair text-xl">{product.name}</h3>
                    <p className="mt-2 text-primary">${product.price}</p>
                    {product.stock <= 5 && (
                      <p className="mt-2 text-sm text-red-500">
                        Only {product.stock} left in stock!
                      </p>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
