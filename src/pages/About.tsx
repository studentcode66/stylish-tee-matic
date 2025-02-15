
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 animate-fade-up">
              About SHIRTSMATTER
            </h1>
            
            <div className="space-y-8">
              <section className="glass p-8 rounded-lg animate-fade-up [animation-delay:200ms]">
                <h2 className="text-2xl font-playfair font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2024, SHIRTSMATTER emerged from a simple yet powerful idea: 
                  everyone deserves to wear shirts that make them feel confident and comfortable. 
                  We believe that quality clothing isn't just about the fabric—it's about how it 
                  makes you feel.
                </p>
              </section>

              <section className="glass p-8 rounded-lg animate-fade-up [animation-delay:400ms]">
                <h2 className="text-2xl font-playfair font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  We're dedicated to providing premium quality shirts that combine timeless style 
                  with modern comfort. Each piece in our collection is carefully crafted to ensure 
                  the perfect fit and lasting durability.
                </p>
              </section>

              <section className="glass p-8 rounded-lg animate-fade-up [animation-delay:600ms]">
                <h2 className="text-2xl font-playfair font-bold mb-4">Quality Promise</h2>
                <p className="text-muted-foreground">
                  Every shirt we sell undergoes rigorous quality checks. We source the finest 
                  materials and work with skilled craftspeople to ensure each piece meets our 
                  high standards. Your satisfaction is our top priority.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
