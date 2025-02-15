
export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "The Classic White",
      price: "$129",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Midnight Navy",
      price: "$149",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Slate Gray",
      price: "$139",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary uppercase tracking-wider text-sm font-medium">
            Best Sellers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-playfair font-bold">
            Featured Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-playfair text-xl">{product.name}</h3>
                <p className="mt-2 text-primary">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
