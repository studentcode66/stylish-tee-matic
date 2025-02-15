
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="animate-fade-up">
            <span className="text-primary uppercase tracking-wider text-sm font-medium">
              Premium Collection
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-playfair font-bold leading-tight">
              Where Style Meets
              <br />
              Sophistication
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
            Discover our curated collection of premium shirts, designed for those who appreciate the finest details.
          </p>
          
          <div className="animate-fade-up [animation-delay:400ms]">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
